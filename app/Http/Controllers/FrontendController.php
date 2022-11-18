<?php

namespace App\Http\Controllers;

use App\Helper\Help;
use App\Http\Resources\CourseInfomation;
use App\Http\Resources\Personvideos;
use App\Models\Additional;
use App\Models\Admin;
use App\Models\CourseInfo;
use App\Models\grouppurchase;
use App\Models\User;
use App\Models\userscourse;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Cookie;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Cookie;
class FrontendController extends Controller
{

    public function __construct(){

    }
    public function reactview(Request $request){
      $cookies =  true;
        $data = 'stephen';
        return view('index', ['data'=>$data, 'cookies'=>$cookies]);
    }

    public function signup(){
        $toptitle = 'TMC Institute-User-Sign-Up';
            return view('signup', ['toptitle'=>$toptitle]);
    }

    public static function dashboard($data, $cart, $uni){

        return view('dashboard', ['coursesdata'=>$data, 'cart'=>$cart, 'unihead'=>$uni]);
      }

    public function login(){
        $toptitle = 'TMC Institute-User-login';
     return view('login', ['toptitle'=>$toptitle]);


    }

    public function companylogin(){
        $toptitle = 'TMC Institute-Company-Login';
        return view('companylogin', ['toptitle'=>$toptitle]);
    }
    public function activationmail(){
        $toptitle = 'TMC Institute-Activation Mail';
        return view('activationmail', ['toptitle'=>$toptitle]);
    }

    public static function verified(){
        $toptitle = 'TMC Institute-User Verify';
        return view('verified', ['toptitle'=>$toptitle]);

    }


    public  function companyverified(){
        $toptitle = 'TMC Institute-Company Verify';
        return view('verifiedcompany', ['toptitle'=>$toptitle]);

    }



    public static  function coursedetails($data, $coursepurshase, $money){
        return view('coursedetails',['nibble'=>$data, 'coursepurshase'=>$coursepurshase, 'money'=>$money]);
    }

    public static function cart($cart, $money){
        return view('cart', ['cart'=>$cart, 'money'=>$money]);
    }
    public function Main(){
        return view('mainpage');
    }

    public function Profile(Additional $add){
        $toptitle = 'TMC Institute-User Profile';
       $additional = $add->where(['user_id'=>auth()->user()->id])->first();

        return view('profile', ["additional"=>$additional, 'toptitle'=>$toptitle]);
    }

    public function Input(){
        return view('input');
    }

    public function contact(Additional $add){
        $countries = $this->list_countries();
        $additional = $add->where(['user_id'=>auth()->user()->id])->first();
         $help = new Help();
         $userinfoma = $help->getplace();
        $toptitle = 'TMC Institute-User Details';
        return view('contact', compact('countries', 'additional', 'toptitle', 'userinfoma'));
    }

    public function residential(){
        return view('residential');
    }

    public static function invoiceshow(){
        return view('invoice');
    }

    public function snatika(){
        return view('snatika');
    }

    public function question(){
        $toptitle = 'TMC Institute';
        return view('question', ['toptitle'=>$toptitle]);
    }

    public function Adminreg(){
        $toptitle = 'TMC Institute-Company Registration';
        return view('adminreg', ['toptitle'=>$toptitle]);
    }

    public function gifted($code, $email,  $recent){
        $toptitle = 'TMC Institute-User Registration';
        return view('gifted',['gifted_email'=>$email, 'code'=>$code, 'fullname'=>$recent->fullname, 'toptitle'=>$toptitle]);
    }

    public function mycourses( $personvideos){
        return view('mycourses',["videos"=>$personvideos]);
    }

    public function aboutcourse($id, CourseInfo $courseinfo){
        $course =  $courseinfo->find($id);
        if($course){
            return view('aboutcourse', ['coursedetail'=>$course]);
        }else{
            return redirect('/mycourses');
        }

    }

    public function pdftest(){
        return view('pdftest');
    }

    public function privacy(){
        $toptitle = 'TMC Institute-Privacy';
        return view('privacy', ['toptitle'=>$toptitle]);
    }
}
