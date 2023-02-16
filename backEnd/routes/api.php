<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\QuoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('register', [AuthController::class,'register']);
Route::post('login', [AuthController::class,'login']);

Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::get('user-profile', [AuthController::class, 'userPrifile']);
    Route::post('logout', [AuthController::class, 'logout']);
});


Route::controller(QuoteController::class)->group(function () {
    Route::get('/quotes', 'index');
    Route::post('/quote', 'store');
    Route::get('/quote/{id}', 'show');
    Route::put('/quote/{id}', 'update');
    Route::delete('/quote/{id}', 'destroy');
});