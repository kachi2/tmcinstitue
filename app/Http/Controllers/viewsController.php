<?php

namespace App\Http\Controllers;

use App\Helper\Help;
use App\Http\Resources\CourseData;
use App\Http\Resources\CourseInfomation;
use App\Http\Resources\CourseResource;
use App\Http\Resources\CourseResourcee;
use App\Http\Resources\purchasedcourse;
use App\Models\Additional;
use App\Models\CourseInfo;
use App\Models\CourseVideo;
use App\Models\othm;
use App\Models\percentage;
use App\Models\question;
use App\Models\UserCart;
use App\Models\userscourse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
class viewsController extends Controller
{

    public function newdashboardfun(){
        $user = $this->getuser();
        $cart = $user? $this->cartadded->where(['user_id'=> $user->id])->first():'';
        $additionalpic =  Auth::check() && Additional::where(['user_id'=>auth()->user()->id])->first() != null?Additional::where(['user_id'=>auth()->user()->id])->first()->image:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png';
        $allcourse = CourseInfo::all();
       $allcollection = $user?CourseResource::collection($allcourse):CourseResourcee::collection($allcourse);
      $featured =  CourseInfo::get()->take(2);
      $featuredcollect = $user?CourseResource::collection($featured):CourseResourcee::collection($featured);
    //   CourseResourcee
       $popular =  CourseInfo::where(['price'=>150000.00, 'price'=>180000.00])->orderBy('id', 'desc')->get()->random(5);
       $popularcollect =  $user?CourseResource::collection($popular):CourseResourcee::collection($popular);
       $recent = CourseInfo::latest()->take(5)->get();
       $recentcollect = $user?CourseResource::collection( $recent):CourseResourcee::collection($recent);
      $show = new Frontends();
      $help = new Help();
      $currencysymbol =(new Help())->getplace();
      $currencyex = (new Help)->moneyconvert();
     return $show->newdashboard($featuredcollect, $popularcollect,  $recentcollect,  $cart, $allcollection, $currencysymbol, $currencyex,  $additionalpic);

    }



    public function listcoursesfun(CourseInfo $courseInfo, UserCart $usercart){
        $user = $this->getuser();
        // $cart =  UserCart::where(['user_id'=>auth()->user()->id])->first();
        $additionalpic =  Auth::check() && Additional::where(['user_id'=>auth()->user()->id])->first() != null?Additional::where(['user_id'=>auth()->user()->id])->first()->image:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png';
        $info = $courseInfo->orderBy('id', 'asc')->get();
        $data =  CourseInfomation::collection($info)->resolve();
        $page= 1;
        $pagdata =  $this->paginate($data, 6, $page);
        $unique = $courseInfo->get(['MainHead']);
        $convet = $unique->toArray();
        $unique_data = [];
        foreach ($convet as $value) {
            array_push($unique_data,  $value['MainHead']);
      }
        $uni = array_unique($unique_data);
        $help = new Help();
        $currencysymbol =  (new Help)->getplace();
        $currencyex =  (new Help)->moneyconvert();
       return    (new Frontends)->listcourses($uni, $pagdata, $currencysymbol, $currencyex,  $additionalpic);
    }

    public function courseinfofun($word, $id, Additional $add){
        $user = $this->getuser();
        // if($user){
            if($word == "TMC"){
              $decrypt_id =  $this->decrypt($id);
                $singlecourse = CourseInfo::find($decrypt_id);
                $additional = Auth::check()?$add->where(['user_id'=>auth()->user()->id])->exists():false;
                if($singlecourse){
                    $videos =  CourseVideo::where(['course_id'=>$decrypt_id,  'course_type'=>$word])->get();
                    $usercourse = Auth::check()?userscourse::where(['user_id'=>auth()->user()->id, 'course_id'=>$decrypt_id, 'course'=>$word])->first()?true:false:false;
                    $allcourse = CourseInfo::all();
                    $toptitle = 'TMC Institute-CourseDetails';
                    $additionalpic =  Auth::check() && Additional::where(['user_id'=>auth()->user()->id])->first() != null?Additional::where(['user_id'=>auth()->user()->id])->first()->image:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png';                    return (new Frontends)->courseinfo($singlecourse, $videos, $word, $usercourse, $allcourse,  $additional,  $toptitle,  $additionalpic);
                }else{
                   return redirect('/listcourses');
                }
            }else if($word == 'OTHM'){
                 $decrypt_id =  $this->decrypt($id);
                $singlecourse = othm::find($decrypt_id);
                $additional =Auth::check()?$add->where(['user_id'=>auth()->user()->id])->exists():false;
                if($singlecourse){
                    $videos =  CourseVideo::where(['course_id'=>$decrypt_id,  'course_type'=>$word])->get();
                    $usercourse = Auth::check()?userscourse::where(['user_id'=>auth()->user()->id, 'course_id'=>$decrypt_id, 'course'=>$word])->first()?true:false:false;
                    $allcourse = othm::all();
                    $toptitle = 'TMC Institute-CourseDetails';
                    $additionalpic =  Auth::check() && Additional::where(['user_id'=>auth()->user()->id])->first() != null?Additional::where(['user_id'=>auth()->user()->id])->first()->image:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png';                    return (new Frontends)->courseinfo($singlecourse, $videos, $word, $usercourse, $allcourse,  $additional, $toptitle,  $additionalpic);
                }else{
                    return redirect('/othmcourses');
                }
            }
        // }else{
        //     return redirect('/');
        // }

    }

    public function coursevideofun(CourseInfo $courseInfo, userscourse $usercourse, $word, $num,  percentage $percentage){
        $user = $this->getuser();
        if($word == 'TMC'){
            $decrypt_id =  $this->decrypt($num);
        $data =  $courseInfo->find($decrypt_id);
        if($data){
            $data['word'] = $word;
            // $money = $this->moneyconvert();
            $coursepurshase = $usercourse->where(['user_id'=>$user->id, 'course_id'=>$decrypt_id, 'course'=>$word])->first();
            $coursecomplete =  $percentage->where(['course_id'=>$decrypt_id, 'course_type'=>$word])->get();
            $question = question::where(['course_id'=>$decrypt_id, 'course_type'=>$word])->get();
            $fetchdata =  new CourseData($data);
            return  (new Frontends)->coursevideo($fetchdata, $coursepurshase, $coursecomplete, $question, $decrypt_id, $word);
        }else{
            return redirect()->back();
        }
        }else if($word == 'OTHM'){
            $decrypt_id =  $this->decrypt($num);
            $data = othm::find($decrypt_id);
            if($data){
                $data['word'] = $word;
                $coursepurshase = $usercourse->where(['user_id'=>$user->id, 'course_id'=>$decrypt_id, 'course'=>$word])->first();
                $coursecomplete =  $percentage->where(['course_id'=>$decrypt_id, 'course_type'=>$word])->get();
                $question = question::where(['course_id'=>$decrypt_id, 'course_type'=>$word])->get();
                $fetchdata =  new CourseData($data);
                return  (new Frontends)->coursevideo($fetchdata, $coursepurshase, $coursecomplete, $question, $decrypt_id, $word);
            }else{
                return redirect()->back();
            }
        }
    }

    public function usercoursesfun(userscourse $userscourse){
        $user = $this->getuser();
        $purchasedcourse = $userscourse->where(['user_id'=>$user->id])->get();
        $data = purchasedcourse::collection($purchasedcourse)->resolve();
        $page= 1;
        $pagdata =  $this->paginate($data, 6, $page);
        $currencysymbol =  (new Help)->getplace();
        $currencyex =  (new Help)->moneyconvert();
        $additionalpic =  Auth::check() && Additional::where(['user_id'=>auth()->user()->id])->first() != null?Additional::where(['user_id'=>auth()->user()->id])->first()->image:'https://res.cloudinary.com/the-morgans-consortium/image/upload/v1658329437/Tmc%20institute/blank-profile-picture-gae268b379_1280_gtgqxr.png';         return (new Frontends)->usercourses($pagdata, $currencysymbol, $currencyex,  $additionalpic);
    }


    public function adminratefun(){
     return (new Frontends)->adminrate();
    }


    public function forgottenfun($status){
        if($status == 'Individual' || $status == 'Company'){
            return (new Frontends)->forgotten($status);
        }else{
            return redirect('/');
        }

    }
}





