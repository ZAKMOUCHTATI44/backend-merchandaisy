<?php

use App\Http\Controllers\CalculatorController;
use App\Http\Controllers\CheckOutContorller;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/products', function (Request $request) {
    return response()->json(['staus' => $request->name]);
});


Route::resource('/calculator', CalculatorController::class);


Route::get('/products', [MenuController::class, 'filter']);
Route::get('/categories', [MenuController::class ,"index"] );

Route::get('/orders', [CheckOutContorller::class, 'store']);