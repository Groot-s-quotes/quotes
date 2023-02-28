<?php


use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\QuoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('register', [AuthController::class,'register']);
Route::post('login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::get('user-profile', [AuthController::class, 'userProfile']);
    Route::post('logout', [AuthController::class, 'logout']);
});


Route::get('users', [AuthController::class,'allUsers']);


Route::controller(QuoteController::class)->group(function () {
    Route::get('/quotes/{page}', 'index');
    Route::get('/num-quotes', 'numQuotes');
    Route::post('/quote', 'store');
    Route::get('/quote/{id}', 'show');
    Route::put('/quote/{id}', 'update');
    Route::delete('/quote/{id}', 'destroy');
    Route::get('/quotes', 'search');
});

Route::get('/quotes/search/{author_name}', [QuoteController::class, 'search']);

