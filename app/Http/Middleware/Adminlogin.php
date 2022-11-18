<?php

namespace App\Http\Middleware;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Closure;

class Adminlogin
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
        if (Auth::check()) {
            $admin =  Admin::where(['user_id'=>auth()->user()->id])->first();
            if(auth()->user() && $admin->is_admin == true){
              return  redirect('/Admin');
            }else if(auth()->user()){
                return redirect('/');
             }
            else{
                return redirect('/');
            }
    }else{
        return $next($request);
    }
    }
}
