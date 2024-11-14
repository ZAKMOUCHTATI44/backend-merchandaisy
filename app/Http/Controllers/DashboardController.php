<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use App\Models\Order;
use App\Models\Sectour;
use App\Models\ShopCart;
use App\Models\Visitor;
use Carbon\Carbon;
use DivisionByZeroError;
use Illuminate\Contracts\Database\Query\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use stdClass;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $count_year = Order::whereYear('created_at', '=', date('Y'))->count();
        $count_month = Order::whereMonth('created_at', '=', date('m'))->count();
        $count_week = Order::whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count();
        $count_today = Order::whereDay('created_at', '=', date('d'))->count();

        $chiffers_affaire_week = CartItem::whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
            ->select(DB::raw('sum(price * quantity) as total'))
            ->first()->total;

        $chiffers_affaire_month = CartItem::whereMonth('created_at', '=', date('m'))
            ->select(DB::raw('sum(price * quantity) as total'))
            ->first()->total;

        try {
            $ticket_moyen_week = $chiffers_affaire_week / $count_week;
        } catch (DivisionByZeroError $e) {
            $ticket_moyen_week = $chiffers_affaire_week / 1;
        }

        try {
            $ticket_moyen_month = $chiffers_affaire_month / $count_month;
        } catch (DivisionByZeroError $e) {
            $ticket_moyen_month = $chiffers_affaire_month / 1;
        }


        // Statistiques de counversion
        $taux_de_conversion = Order::count() / 100;

        try {
            $chiffers_affaire_visiteur =  number_format((float)CartItem::select(DB::raw('sum(price * quantity) as total'))
                ->first()->total / Visitor::sum('count'), 2, '.', '');
        } catch (DivisionByZeroError $e) {
            $chiffers_affaire_visiteur =  number_format((float)CartItem::select(DB::raw('sum(price * quantity) as total'))
                ->first()->total / 1, 2, '.', '');
        }

        $taux_panier = ShopCart::count() / 100;


        // Vente par quartier
        $ventes_par_quartier = Sectour::withcount('orders')->get();

        // Vente par heure
        $ordersByHours = Order
            ::whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
            ->get()
            ->groupBy(function ($date) {
                return Carbon::parse($date->created_at)->format('H');
            });

        $ventes_with_hours = [];

        for ($i = 11; $i <= 22; $i++) {
            $ventes = new stdClass();
            try {
                $value = $ordersByHours[$i]->count();
                $ventes->hours = $i;
                $ventes->value = $value;
                $ventes_with_hours = [...$ventes_with_hours, $ventes];
            } catch (\Throwable $th) {
                $ventes->hours = $i;
                $ventes->value = 0;
                $ventes_with_hours = [...$ventes_with_hours, $ventes];
            }
        }

        $ventes_with_hours = json_encode($ventes_with_hours);




        return view('dashboard', compact(
            'count_year',
            'count_month',
            'count_week',
            'count_today',
            'ticket_moyen_week',
            'ticket_moyen_month',
            'taux_de_conversion',
            'chiffers_affaire_visiteur',
            'ventes_par_quartier',
            'ventes_with_hours',
            'taux_panier'
        ));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
