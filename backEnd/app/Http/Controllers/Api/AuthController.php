<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

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
        $user->password = Hash::make($request->password);
        $user->save();
        //response
        return response($user, Response::HTTP_CREATED);
    }

    public function login(Request $request) {
        $credentials= Validator::make($request->all(),[
            'email'=>'required|max:191',
            'password'=>'required'
        ]);
        if ($credentials->fails()){
            return response()->json([
                'validation_errors'=>$credentials->messages(),
            ]);
        } else{
            $user =User::where('email',$request->email)->first();
            if(! $user || ! Hash::check($request->password, $user->password)){
                return response()->json([
                    'status'=>401,
                    'message'=>'Invalid Credentials'
                ]);
            } else {
                $token = $user->createToken($user->email.'_Token')->plainTextToken;

                return response()->json([
                    'status'=>200,
                    'username'=>$user->name,
                    'token'=>$token,
                    'message'=>'Login Successfully'
                ]);
            }
        } 
} 
    public function userProfile(Request $request){
        return response()->json([
        "message" =>"userProfile OK",
        "userData" => auth()->user()
        ], Response::HTTP_OK);
    }

    public function logout(){
        $cookie = Cookie::forget('cookie_token');
        return response(["message"=>"Session close"], Response::HTTP_OK)->withCookie($cookie);
    }
    public function allUsers(){
        $users = User::all();
        return response()->json([
            "users" => $users
        ]);
    }
}
