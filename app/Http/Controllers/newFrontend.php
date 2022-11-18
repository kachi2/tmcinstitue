<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class newFrontend extends Controller
{
 public function __construct(){

}
  public function newdashboard($data){
  dd($data);
    return view('newdesign.dashboard');
  }

public function courseinfo(){
    return view('newdesign.courseinfo');
}

public function coursevideo(){
    return view('newdesign.cousevideo');
}

public function shoppingcart(){
    return view('newdesign.shoppingcart');
}

public function conditions(){
    return view('newdesign.conditions');
}

}
