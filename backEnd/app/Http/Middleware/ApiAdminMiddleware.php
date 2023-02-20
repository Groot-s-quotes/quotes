<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ApiAdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if(Auth::check())
        {
            if(auth()->user()->tokenCan('server:admin'))
            {
                return $next($request);
            }
            else
             {
                return response()->json([
                    'message'=>'Access Denied. You are not an Admin.'
                ], 403);
            }
        }
         else {
           return response()->json([
                'status'=> 401,
                'message'=>'Please Login First',
            ]);
        }
    
    }
}
