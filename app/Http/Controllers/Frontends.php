<?php

namespace App\Http\Controllers;

use App\Helper\Help;
use App\Http\Resources\CourseData;
use Illuminate\Http\Request;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Crypt;
use App\Models\CourseInfo;
use App\Models\CourseVideo;
use App\Models\userscourse;
use App\Http\Resources\CourseInfomation;
use App\Http\Resources\courseothm;
use App\Http\Resources\purchasedcourse;
use App\Http\Resources\Sturesult;
use App\Models\Admin;
use App\Models\othm;
use App\Models\question;
use App\Models\Studentresult;
use App\Models\questionremainer;
use Nullix\CryptoJsAes\CryptoJsAes;
// use Illuminate\Support\Facades\Crypt;
use App\Models\Additional;
use App\Models\Currncyrate;
use App\Models\UserCart;
use Illuminate\Support\Facades\Auth;
use Stevebauman\Location\Facades\Location;
use App\Models\User;
class Frontends extends Controller
{
    public function __construct(){

    }

      public function newdashboard($featured, $popular,  $recent, $cart, $allcourse,  $currencysymbol, $currencyex,  $additionalpic){
        //
        // $encrypted = 'U2FsdGVkX18nNvBWNy+rnyQyRS/kF8E69nv2OuceoUCSxh6lYviAIw4BZP18LYqB';
        // $password = "123456";
        // $decrypted = CryptoJsAes::decrypt($encrypted, $password);
        // dd($decrypted);



        $poundton =  $this->poundtonaira();
        $othermoney =    $this->frompoundtoother();
        $toptitle = 'TMC Institute-Home';
        return view('newdesign.dashboard',['featured'=>$featured, 'popular'=>$popular, 'recent'=>$recent, 'cart'=>$cart, 'allcourse'=>$allcourse, 'currencysymbol'=>$currencysymbol, 'currencyex'=>$currencyex, 'poundton'=>$poundton, 'othermoney'=>$othermoney, 'toptitle'=>$toptitle, 'additionalpic'=>$additionalpic]);

      }

      public function courseinfo($singlecourse, $videos, $word, $usercourse, $allcourse,  $additional,  $toptitle,  $additionalpic){
        $currencysymbol =  (new Help)->getplace();
        $currencyex =  (new Help)->moneyconvert();
        $poundton =  $this->poundtonaira();
        $othermoney =    $this->frompoundtoother();

          return view('newdesign.courseinfo',['single'=>json_decode($singlecourse), 'video'=>$videos, 'word'=>$word, 'usercourse'=>$usercourse, 'allcourse'=>$allcourse, 'currencysymbol'=>$currencysymbol, 'currencyex'=>$currencyex, 'poundton'=>$poundton, 'othermoney'=>$othermoney, 'additional'=> $additional, 'toptitle'=>$toptitle, 'additionalpic'=>$additionalpic]);
      }


      public function coursevideo($fetchdata, $coursepurshase, $coursecomplete, $question, $num, $word){
        $result = Studentresult::where([ ['user_id', '=', auth()->user()->id], ['course_id','=', $num], ['course_type', '=', $word], ['status', '=', 1] ])->first();

      $greatereight = questionremainer::where([ ['user_id', '=', auth()->user()->id], ['course_id', '=',$num],  ['totalpercentage', '>=',  80] ])->exists();
    //   dd($greatereight);
      $toptitle = 'TMC Institute-Couse Video';
    //   downresult  greatereight  question
    return view('newdesign.cousevideo', ["fetchdata"=>$fetchdata, "coursepurshase"=>json_decode($coursepurshase), "coursecomplete"=>$coursecomplete, 'question'=>$question, 'num'=>$num, 'word'=>$word, 'downresult'=>$result, 'greatereight'=>$greatereight, 'toptitle'=>$toptitle ]);
}

      public function shoppingcart(){
        $user = $this->getuser();
        if($user){
            $poundtodollar =$this->poundconvert();
            $currencysymbol =  (new Help)->getplace();
            $currencyex =  (new Help)->moneyconvert();
            $poundton =  $this->poundtonaira();
            $othermoney =    $this->frompoundtoother();
            $toptitle = 'TMC Institute-Shopping Cart';
            $additionalpic =  Auth::check() && Additional::where(['user_id'=>auth()->user()->id])->first() != null?Additional::where(['user_id'=>auth()->user()->id])->first()->image:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png';            $othermoney =    $this->frompoundtoother();
            return view('newdesign.shoppingcart', ['currencysymbol'=>$currencysymbol, 'currencyex'=>$currencyex, 'poundtodollar'=>$poundtodollar, 'poundton'=>$poundton, 'othermoney'=>$othermoney, 'toptitle'=>$toptitle, 'additionalpic'=> $additionalpic]);
        }
      }

      public function conditions(){
        $help = new Help();
        $currencysymbol =  $help->getplace()->currency->symbol;
        $currencyex =  $help->moneyconvert();
         $currencycode = (new Help)->getplace()->currency->code;
         $toptitle = 'TMC Institute-Term and Conditions';
         $additionalpic =  Auth::check() && Additional::where(['user_id'=>auth()->user()->id])->first() != null?Additional::where(['user_id'=>auth()->user()->id])->first()->image:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png';            $othermoney =    $this->frompoundtoother();
         return view('newdesign.conditions', ['currencysymbol'=>$currencysymbol, 'currencyex'=>$currencyex, 'currencycode'=>$currencycode, 'toptitle'=>$toptitle, 'additionalpic'=>$additionalpic]);
      }

      public function listcourses($uni, $pagdata, $currencysymbol, $currencyex, $additionalpic){
        $poundton =  $this->poundtonaira();
        $othermoney =    $this->frompoundtoother();
        $toptitle = 'TMC Institute-TMC Courses';
        return view('newdesign.listcouses',['unihead'=>$uni, 'coursesdata'=>$pagdata, 'currencysymbol'=>$currencysymbol, 'currencyex'=>$currencyex, 'poundton'=>$poundton, 'othermoney'=>$othermoney, 'toptitle'=>$toptitle, 'additionalpic'=>$additionalpic]);
      }

      public function usercourses($pagdata, $currencysymbol, $currencyex, $additionalpic){
        $poundton =  $this->poundtonaira();
        $othermoney =    $this->frompoundtoother();
        $toptitle = 'TMC Institute-User courses';
        return view('newdesign.usercourse',['purchasedcourse'=>$pagdata, 'currencysymbol'=>$currencysymbol, 'currencyex'=>$currencyex, 'poundton'=>$poundton, 'othermoney'=>$othermoney, 'toptitle'=>$toptitle, 'additionalpic'=>$additionalpic]);
      }

      public function studyabroad(){
        $additionalpic =  Auth::check() && Additional::where(['user_id'=>auth()->user()->id])->first() != null?Additional::where(['user_id'=>auth()->user()->id])->first()->image:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png';        $currencysymbol =  (new Help)->getplace();
        $currencyex =  (new Help)->moneyconvert();
        $poundton =  $this->poundtonaira();
        $othermoney =    $this->frompoundtoother();
        $toptitle = 'TMC Institute-Study Abroad';
        return view('newdesign.studyabroad', ['currencysymbol'=>$currencysymbol, 'currencyex'=>$currencyex, 'poundton'=>$poundton, 'othermoney'=>$othermoney, 'toptitle'=>$toptitle, 'additionalpic'=>$additionalpic ]);
      }

     public function insertothm(){
        return view('newdesign.insertothm');
     }

     public function othmcourses(  othm $othm){
        // $user = $this->getuser();
        // if($user){
            $cart = Auth::check()?UserCart::where(['user_id'=>auth()->user()->id])->first():[];
            $unique = $othm->get(['MainHead']);
            $convet = $unique->toArray();
            $unique_data = [];
            foreach ($convet as $value) {
                array_push($unique_data,  $value['MainHead']);
          }
            $uni = array_unique($unique_data);
            $info = $othm->orderBy('id', 'asc')->get();
            $data =  courseothm::collection($info)->resolve();
            $page= 1;
            $pagdata =  $this->paginate($data, 6, $page);
             $currencysymbol =  (new Help)->getplace();
            $currencyex =  (new Help)->moneyconvert();
            $poundton =  $this->poundtonaira();
           $additionalpic =  Auth::check() && Additional::where(['user_id'=>auth()->user()->id])->first() != null?Additional::where(['user_id'=>auth()->user()->id])->first()->image:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png';            $othermoney =    $this->frompoundtoother();
            $toptitle = 'TMC Institute-OTHM';
            return view('newdesign.courselistothm', ['unihead'=>$uni, 'coursesdata'=>$pagdata,
          'currencyex'=>$currencyex, 'currencysymbol'=>$currencysymbol,
           'cart'=>$cart, 'poundton'=>$poundton, 'othermoney'=>$othermoney, 'toptitle'=>$toptitle,
            'additionalpic'=>$additionalpic
        ]);
        // }else{
        //     return redirect('/');
        // }

     }

     public function quiz($course_type, $id, $num, CourseInfo $courseInfo,  questionremainer $questionremainer){
            if ($course_type == 'TMC') {
                $decrypt_id =  $this->decrypt($num);
                $data =  $courseInfo->find($decrypt_id);

                if ($data) {
                    $user = $this->getuser();
                    $quest = question::where(['id'=>$id, 'course_type'=>$course_type])->first();
                    $reminder = $questionremainer->where(['user_id'=>$user->id, 'course_type'=>$course_type, 'course_id'=>$decrypt_id ])->get();
                    $toptitle = 'TMC Institute-Quiz';
                    return view('newdesign.quiz', ['quest'=>$quest, 'reminder'=>$reminder, 'course_type'=>$course_type, 'num'=>$decrypt_id, 'toptitle'=> $toptitle, 'coursename'=>$data->coursename ]);
                }
            }else if($course_type == 'OTHM'){
                $decrypt_id =  $this->decrypt($num);
                $data =  othm::find($decrypt_id);
                if ($data) {
                    $user = $this->getuser();
                    $quest = question::where(['id'=>$id, 'course_type'=>$course_type])->first();
                    $reminder = $questionremainer->where(['user_id'=>$user->id, 'course_type'=>$course_type, 'course_id'=>$decrypt_id])->first();
                    // dd($reminder);
                    $toptitle = 'TMC Institute-Quiz';
                    return view('newdesign.quiz', ['quest'=>$quest, 'reminder'=>$reminder, 'course_type'=>$course_type, 'num'=>$decrypt_id, 'toptitle'=> $toptitle,  'coursename'=>$data->coursename]);
                }
            }
}


                    public function result($code, $coursename){
                      $result = Studentresult::where(['unique_code'=>$code, 'coursename'=>$coursename])->first();
                     $data =  Sturesult::make($result);
                     return view('newdesign.comfrirmresult', ['data'=>$data]);
                    }
// https://github.com/brainfoolong/cryptojs-aes-php
 public function adminlog(){
    // $cry = 'U2FsdGVkX1+h92Iyw5U/fhWTwbiLojXpCuLcoaKxxuIzzKTGJFwtqx7iXuyQGT4D';
    // $decrypted =  Crypt::decryptString($cry);
    // dd($decrypted);
    $toptitle = 'TMC Institute-Admin';
    return view('newdesign.adminlogin', ['toptitle'=>$toptitle]);
 }


 public function adminpage(){
    $currencysymbol =  (new Help)->getplace();
    $currencyex =  (new Help)->moneyconvert();
    $poundton =  $this->poundtonaira();
    $othermoney =    $this->frompoundtoother();
    $admin = Admin::where('user_id', auth()->user()->id)->first()->is_admin;
    $toptitle = 'TMC Institute-Quiz';
//    dd( questionremainer::get());
    if($admin == true){
        $resultApproved = Studentresult::where(['status'=>1])->get();
        $dataApproved =  Sturesult::collection($resultApproved)->resolve();
        $page= 1;
        $pagAproved =  $this->paginate($dataApproved, 6, $page);

        $resultunApproved = Studentresult::where(['status'=>0])->get();
        $dataunApproved =  Sturesult::collection($resultunApproved)->resolve();
        // dd($dataunApproved);
        $page= 1;
        $pagunAproved =  $this->paginate($dataunApproved, 6, $page);
        return view('newdesign.admindash', ['currencyex'=>$currencyex, 'currencysymbol'=>$currencysymbol,
        'poundton'=>$poundton, 'othermoney'=>$othermoney, 'admin'=>$admin, 'dataApproved'=>$pagAproved,
         'dataunApproved'=>$pagunAproved, 'toptitle'=>$toptitle]);
    }else{
        return redirect('/');
    }
 }


   public function adminrate(){
    return view('newdesign.adminrate');
   }

   public function allcurrency(){
    $all = Currncyrate::get();
   return response()->json($all);
   }


   public function about(){
    $toptitle = 'TMC Institute-About';
    $currencysymbol =  (new Help)->getplace();
    $currencyex =  (new Help)->moneyconvert();
    $poundton =  $this->poundtonaira();
    $othermoney =    $this->frompoundtoother();
    $additionalpic =  Auth::check() && Additional::where(['user_id'=>auth()->user()->id])->first() != null?Additional::where(['user_id'=>auth()->user()->id])->first()->image:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png';
     return view('newdesign.about',['toptitle'=>$toptitle,'currencyex'=>$currencyex, 'currencysymbol'=>$currencysymbol,
    'poundton'=>$poundton, 'othermoney'=>$othermoney, 'additionalpic'=>$additionalpic]);
   }

   public function forgotten($status){
    $toptitle = 'TMC Institute-forgotten';
    return view('newdesign.forgotten',['toptitle'=>$toptitle,'status'=>$status]);
   }

   public function reset($code, $status){
     $user = User::where(['verification_code'=>$code, 'is_verfield'=> 0])->first();
        if($user){
            if($status == 'Individual' || $status == 'Company'){
                $toptitle = 'TMC Institute-reset';
                return view('newdesign.resetpass',['toptitle'=>$toptitle,  'status'=>$status, 'code'=>$code]);

            }else{

                // $user->update([
                //     'is_verfield'=>1
                //   ]);
                return redirect('/');
            }

        }
   }

}
