<?php

namespace App\Http\Controllers;

use App\Mail\CalculatorMail;
use App\Models\Calculator;
use App\Models\Sectour;
use App\Models\User;
use Carbon\Carbon;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class CalculatorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sectours = Sectour::all();
        return Inertia::render('calculator/Calculator', compact('sectours'));
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
        $user = User::updateOrCreate([
            'email' => $request->email,
        ], [
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'phone' => $request->phone,
        ]);
        $calculator = Calculator::create([
            "objectif" => $request->objectif,
            "activite" => $request->activite,
            "gender" => $request->gender,
            "sectour_id" => $request->ville,
            "brithday" => Carbon::parse($request->brithday)->format('Y-m-d'),
            "taille" => intval($request->taille),
            "poids" => intval($request->poids),
            "objectifPoids" => intval($request->objectifPoids),
            "user_id" => $user->id
        ]);

        $date = new DateTime($calculator->brithday);
        $now = new DateTime();
        $interval = $now->diff($date);
        $age = $interval->y;
        $bmr = $calculator->poids * 10 + $calculator->taille * 6.25 - $age * 5;

        if ($calculator->gender === 'homme') {
            $bmr += 5;
        } else {
            $bmr -= 161;
        }

        $tdee = $bmr * $calculator->activite;

        Mail::to($user)->send(new CalculatorMail(round($bmr, 0), round($tdee, 0)));
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
