<?php

namespace App\Http\Controllers;

use App\Models\CodePromo;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CodePromoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('promocode.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('promocode.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        CodePromo::create([
            "code" => $request->codepromo,
            "discount" => intval($request->valeur),
            "limit" => intval($request->limit),
            "reserved_at" => Carbon::parse($request->reserved_at)
        ]);

        return redirect()->route('promocode.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CodePromo  $codePromo
     * @return \Illuminate\Http\Response
     */
    public function show(CodePromo $codePromo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CodePromo  $codePromo
     * @return \Illuminate\Http\Response
     */
    public function edit(CodePromo $codePromo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CodePromo  $codePromo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CodePromo $codePromo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CodePromo  $codePromo
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $codePromo = CodePromo::findOrFail($id);
        $codePromo->delete();
        return response()->json([
            'status' => "codePromo Has benn removed"
        ]);
    }
    public function pormoCode($codepromo)
    {
        $promo = CodePromo::where('code', $codepromo)->WhereDate('reserved_at', '>', now())->firstOrFail();
        if ($promo->orders_count === $promo->limit) {
            return response()->json([], 404);
        }
        return response()->json(compact('promo'));
    }
    public function datatable(Request $request)
    {
        $codepromo = CodePromo::withCount('orders')->get();
        return datatables()
            ->of($codepromo)
            ->addColumn('dateDebut', function ($code) {
                return Carbon::parse($code->created_at)->format('d-m-Y');
            })
            ->addColumn('dateFin', function ($code) {
                return Carbon::parse($code->reserved_at)->format('d-m-Y');
            })
            ->addColumn('state', function ($code) {
                if ($code->orders_count === $code->limit) {
                    return false;
                }
                if (Carbon::parse($code->reserved_at)->format('d-m-Y') < Carbon::parse(now())->format('d-m-Y')) {
                    return false;
                }
                return true;
            })
            ->make(true);
    }
}
