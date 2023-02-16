<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request){
        //validations
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'
        ]);
        //enrollement
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save();
        //response

        return response()->json([
            "message" => "Successfully registered"
        ]);
    }

    public function login(Request $request){
        return response()->json([
            "message" => "Metodo LOGIN ok"
        ]);
    }

    public function userProfile(Request $request){

    }

    public function logout(){

    }
    public function allUsers(){

    }
}
