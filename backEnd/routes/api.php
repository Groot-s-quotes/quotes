<?php

use App\Http\Controllers\Api\QuoteController;
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

Route::controller(QuoteController::class)->group(function () {
    Route::get('/quotes', 'index');
    Route::post('/quote', 'store');
    Route::get('/quote/{id}', 'show');
    Route::put('/quote/{id}', 'update');
    Route::delete('/quote/{id}', 'destroy');
});