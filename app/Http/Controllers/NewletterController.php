<?php

namespace App\Http\Controllers;

use App\Models\Newletter;
use Illuminate\Http\Request;

class NewletterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        Newletter::create(['email' => $request->email]);
        return response()->json([
            'status' => 'Merci, vous êtes inscrit !'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Newletter  $newletter
     * @return \Illuminate\Http\Response
     */
    public function show(Newletter $newletter)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Newletter  $newletter
     * @return \Illuminate\Http\Response
     */
    public function edit(Newletter $newletter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Newletter  $newletter
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Newletter $newletter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Newletter  $newletter
     * @return \Illuminate\Http\Response
     */
    public function destroy(Newletter $newletter)
    {
        //
    }
}
