<?php

namespace App\Http\Middleware;

use App\Models\Admin;
use Closure;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class direction
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
        // return $next($request);

    if (Auth::check()) {
            $admin =  Admin::where(['user_id'=>auth()->user()->id])->first();
            if(auth()->user() && $admin){
              return  redirect('/newdashboard');
            }else if(auth()->user()){
                return redirect('/question'.'/'.auth()->user()->user_login.'/'.auth()->user()->verification_code);
            }
            else{
                return redirect('/');
            }
    }else{
        return $next($request);
    }


    }
}
