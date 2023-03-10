<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request){
        //validations
        $validator = Validator::make($request->all(),[
            'name'=>'required',
            'email'=> 'required|email|max:191|unique:users,email',
            'password'=>'required|min:8'

        ]);

        if($validator->fails())
        {
            return response()->json([
               'validation_errors'=>$validator->messages(), 
            ]);
        } else {
            $user = User::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>Hash::make($request->password),
            ]);

            $token = $user->createToken( $user->email.'_Token')->plainTextToken;

            return response()->json([
                'status'=>200,
                'username'=>$user->name,
                'token'=> $token,
                'message'=>'Registered Successfully',
             ]);
        }

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
       auth()->user()->tokens()->delete();
       return response()->json([
        'status'=>200,
        'message'=>'Logged Out Successfully'
       ]);

    }
    public function allUsers(){
        $users = User::all();
        return response()->json([
            "users" => $users
        ]);
    }
}
