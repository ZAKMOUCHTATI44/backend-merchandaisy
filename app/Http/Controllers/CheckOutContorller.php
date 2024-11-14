<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use App\Models\Order;
use App\Models\Sectour;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckOutContorller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('commandes.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $sectours = Sectour::all();
        return Inertia::render('Checkout', compact('sectours'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $user = null;
        if ($request->user) {
            $user = User::where('email', $request->user['email'])->first();
            if (!$user) {
                $user = User::create([
                    'firstname' => $request->user['firstname'],
                    'lastname' => $request->user['lastname'],
                    'email' => $request->user['email'],
                    "phone" => $request->user['phone'],
                    "adresse" => $request->user['adresse']
                ]);
            }
        }

        $order = new Order();
        $order->user_id = $user->id;
        $order->code_promo_id = $request->discount ? $request->discount["id"] : null;
        // $order->sectour_id = 1;
        $order->comment = array_key_exists('comment', $request->user) ? $request->user["comment"] : null;
        $order->save();

        foreach ($request->items as $item) {
            CartItem::create([
                "product_id" => $item['id'],
                "price" => $item['price'],
                "quantity" => $item['qteCart'],
                "order_id" => $order->id
            ]);
        }
        return redirect()->to('/thankyou');
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
    public function datatable(Request $request)
    {
        $orders = Order::with('user')
            ->when($request->status != -1, function (Builder $query) use ($request) {
                $query->where('state', $request->status);
            })
            ->when($request->date[0] && $request->date[1], function (Builder $query) use ($request) {
                $query->whereBetween('created_at', [$request->date[0], $request->date[1]]);
            })
            ->orderBy('created_at', 'desc')->get();

        return datatables()
            ->of($orders)
            ->addColumn('startDate', function ($order) {
                return Carbon::parse($order->created_at)->format('m/d/Y H:i:s');
            })
            ->addColumn('fullname', function ($order) {
                return "{$order->user->firstname} {$order->user->lastname}";
            })
            ->addColumn('phone', function ($order) {
                return $order->user->phone;
            })
            ->addColumn('total', function ($order) {
                $count = 0;
                foreach ($order->cartItems as $item) {
                    $count += $item->price * $item->quantity;
                }
                return "$count MAD";
            })
            ->make(true);
    }
}
