<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use App\Events\Adminevent;
use App\Events\Approvedevent;
use App\Events\candidateevent;
use App\Events\existinguserevnt;
use App\Events\forgotevent;
use App\Events\groupevent;
use App\Events\Notexiting;
use App\Events\studyevent;
use App\Http\Requests\additional_info;
use App\Http\Requests\purchase;
use App\Models\CourseInfo;
use App\Models\UserCart;
use App\Models\Studypro;
use App\Models\userscourse;
use App\Models\UserWatched;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\CourseInfomation;
use App\Models\Additional;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use App\Helper\Help;
use App\Http\Requests\addmoney;
use App\Http\Requests\editmoney;
use App\Http\Requests\forgottens;
use App\Http\Requests\resetpas;
use App\Http\Requests\study;
use App\Http\Resources\courseothm;
use App\Http\Resources\purchasedcourse;
use App\Http\Resources\Sturesult;
use App\Models\Currncyrate;
use App\Models\grouppurchase;
use App\Models\Invoice;
use App\Models\othm;
use App\Models\percentage;
use App\Models\questionremainer;
use App\Models\Studentresult;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Response;
// use Illuminate\Support\Facades\Response;
//use Illuminate\Support\Facades\Cookie;
use Symfony\Component\HttpFoundation\Cookie;
class MainConroller extends Controller
{


    public function userscoursepurcase(userscourse $userpurcase, purchase $request){
       $user = $this->getuser();
       $request->validated();
       if($user){
        $userpurcase->create([
                    "user_id"=>auth()->user()->id,
                    "course_id"=>$request->course_id,
                    "status"=>$request->status,
                    "referencecode"=>$request->referencecode,
                    "email"=>$request->email,
                    "amount"=>$request->amount,
                    "terms_and_condition"=>$request->terms_and_condition,
        ]);
         $data = $userpurcase->where(['user_id'=>auth()->user()->id, 'course_id'=>$request->course_id])->first();
      return response()->json(['success'=>'your payment is successful', 'data'=>$data]);
       }else{
           return response()->json([
               'error'=>'you are not a users',
           ]);
       }

    }

    public function userwatch(Request $request, UserWatched $userwatch){
        $user = $this->getuser();
        if($user){
         $watch =  $userwatch->where(['videoid'=>$request->videoid, 'course_id'=>$request->course_id])->first();
         if($watch){
             $watch->update([
                 'videoduration'=>$request->videoduration,
                 'videocurrenttime'=>$request->videocurrenttime
             ]);
             return response()->json(["success"=>"successful"]);
         }else if(!$watch){
             $userwatch->create([
                'user_id'=>auth()->user()->id,
                'videoid'=>$request->videoid,
                'course_id'=>$request->course_id,
                 'episode'=>$request->episode,
                 'videoduration'=>$request->videoduration,
                'videocurrenttime'=>$request->videocurrenttime
             ]);
             return response()->json(["success"=>"successful"]);
         }
        }else{
            return response()->json(["error"=>"error"]);
        }

    }

    public function AddCart(Request $request){
        $user = $this->getuser();
       $usercart = $this->cartadded->where(['user_id'=>$user->id])->first();
       if(!$usercart){
        $this->cartadded->create([
            'user_id'=>$user->id,
            'usercartdetails'=>$request->cartitems
        ]);
        return response()->json(['success'=>'you successfully added items to cart']);
       }else{
        $usercart->update([
        'usercartdetails'=>$request->cartitems
        ]);
        return response()->json(['success'=>'you successfully added items to cart']);
       }
    }

    public function muitplepayment(Request $request){
      $data = json_decode($request->data);
    // $len = count($data);
     foreach ($data as  $value) {
                $course =  new userscourse();
               $course->user_id = auth()->user()->id;
                $course->course_id = $value->id;
            // $value->coursetype == 'TMC'? $course->course_id = $value->id :$course->othm_id = null;
               $course->status = $value->status;
               $course->referencecode = $value->code;
               $course->email = auth()->user()->email;
               $course->amount = $value->price;
               $course->terms_and_condition = 1;
               $course->course = $value->coursetype;
               $course->moneyname = $value->moneyname;
               $course->save();

        //  }
        //  $i++;
     }
     return response()->json(['success'=>'you have successfully purchased the courses']);
    }

    public function deletestorage(UserCart $cart, Request $request){
        $request->commend;
        $cart->where(["user_id"=>auth()->user()->id])->delete();
        return response()->json(['success'=>'deleted']);
    }

    public function insertdata(CourseInfo $courseInfo, Request $request){
        $courseInfo->create([
            "MainHead"=>$request->mainhead,
            "coursename"=>$request->courses,
            "duration"=>$request->duration,
            "price"=>$request->price,
            "language"=>$request->language,
            "access"=>$request->access,
            "coursedetails"=>$request->coursedetails,
            "whothiscoursefor"=>$request->who,
            "learning"=>$request->learning,
            "certificate"=>true
        ]);
        return response()->json([
            'code'=>200,
            'success'=>'you have successfully inserted the data'
        ]);

    }

    public function othmcheck(othm $othm, Request $request){
        $info = $othm->orderBy('id', 'asc')->get();
        $data =  courseothm::collection($info)->resolve();
        $page=  $request->page?$request->page:1;
        $pagdata =  $this->paginate($data, 6, $page);
        return response()->json($pagdata);
     }

     public function coursesdata(CourseInfo $courseInfo, Request $request){
        $info = $courseInfo->orderBy('id', 'asc')->get();
            $data =  CourseInfomation::collection($info)->resolve();
            $pagdata =  $this->paginate($data, 6, $request->page);
            return response()->json($pagdata);
     }

     public function arrangment(CourseInfo $courseInfo,  Request $request){
      $order =  $request->orderby?$request->orderby:'ASC';
       $page =  $request->page?$request->page:1;
        $info = $courseInfo->orderBy('id', $order)->get();
        $data =  CourseInfomation::collection($info)->resolve();
        $pagdata =  $this->paginate($data, 6, $page);
        return response()->json($pagdata);
    }

    public function alphabet(CourseInfo $courseInfo,  Request $request){
       $arr = explode(",", $request->letter);
       $page =  $request->page?$request->page:1;
       $info = $courseInfo->whereIn('firstletter', $arr)->get();
       $data =  CourseInfomation::collection($info)->resolve();
       $pagdata =  $this->paginate($data, 6, $page);
       return response()->json($pagdata);
    }

    public function categories(CourseInfo $courseInfo, Request $request){
        $page =  $request->page?$request->page:1;
        $info = $courseInfo->where('MainHead', $request->categories)->get();
            $data =  CourseInfomation::collection($info)->resolve();
            $pagdata =  $this->paginate($data, 6, $page);
            return response()->json($pagdata);
     }

     public function alphabetothm(othm $courseInfo,  Request $request){
        $arr = explode(",", $request->letter);
        $page =  $request->page?$request->page:1;
        $info = $courseInfo->whereIn('firstletter', $arr)->get();
        $data =  courseothm::collection($info)->resolve();
        $pagdata =  $this->paginate($data, 6, $page);
        return response()->json($pagdata);
     }

     public function categoriesothm(othm $courseInfo, Request $request){
        $page =  $request->page?$request->page:1;
        $info = $courseInfo->where('MainHead', $request->categories)->get();
            $data =  courseothm::collection($info)->resolve();
            $pagdata =  $this->paginate($data, 6, $page);
            return response()->json($pagdata);
     }

     public function arrangmentothm(othm $courseInfo, Request $request){
        $order =  $request->orderby?$request->orderby:'ASC';
        $page =  $request->page?$request->page:1;
         $info = $courseInfo->orderBy('id', $order)->get();
         $data =  courseothm::collection($info)->resolve();
         $pagdata =  $this->paginate($data, 6, $page);
         return response()->json($pagdata);
     }


     public function Additional_info(Additional $addtional, additional_info $request){
   $check = $addtional->find(auth()->user()->id);
            if(!$check){
                $imgurl =   $this->cloudinary($request->image);
                $addtional->create([
                    'country_of_birth'=>$request->country_of_birth,
                    'country_of_residence'=>$request->country_of_residence,
                    "current_address"=>$request->current_address,
                    'email'=>auth()->user()->email,
                    "fullname"=>$request->fullname,
                    'gender'=>$request->gender,
                    "image"=>$imgurl,
                    'user_id'=>auth()->user()->id,
                    'nameprint'=>$request->nameprint,
                    "nationality"=>$request->nationality,
                    'phone_number'=>$request->phone_number,
                    'dob'=>$request->dateofbirth,
                ]);
                return response()->json(["success"=>'successful']);
            }
     }

     public function invoice(Request $request){
         //sendinvoice
      $data = json_decode($request->data);
     $unique_code = Help::Helps(new Invoice, 'user_id', 5, 'TMC');
     $today = Carbon::now();
       $sevendays = $today->addDays(7);
    $len = count($data);
    foreach ($data as $key => $value) {
                $i=0;
          if ($i !== $len - 1) {
             $invoice  = new Invoice();
             $invoice->user_id  = auth()->user()->id;
            $invoice->amount = $value->price;
            $invoice->due_date =  $sevendays;
           $invoice->course_id = $value->id;
           $invoice->course_name = $value->coursename;
           $invoice->status = "PENDING";
           $invoice->code = $unique_code;
           $invoice->save();
        }
        $i++;
    }
  return response()->json(["success"=>"successful"]);
     }

     public function coursecartories(CourseInfo $courseInfo, Request $request){
        $info = $courseInfo->where('MainHead', $request->mainhead)->get();
        $data =  CourseInfomation::collection($info)->resolve();
        $page= $request->page;
        $pagdata =  $this->paginate($data, 10, $page);
        return $pagdata;
     }

     public function setcook(Request $request){
         $cookie_name = "user";
         $cookie_value = $request->cookie;
         $minutes = 1;
        // $response = new Response('Hello World');
        // $response->withCookie(cookie('name', 'virat', $minutes));
        // return $response;
        $cookie = cookie('name', 'value', 1);
        return response('Hello World')->cookie($cookie);
       // return response()->json(['cookie'=>$response]);
        //  Cookie::queue('name', 'stephen', 10);
        //  dd(Cookie::get('name'));
     }

     public function multiuserpurchase(Request $request){
        // dd($request->all());
       $users = json_decode($request->data);
    //    $request->totalcost;
    //    $request->subcost;
    //    $request->today;
    event(new groupevent($users, $request->totalcost,  $request->subcost,  $request->today, auth()->user()->email));

        foreach ($users as $user) {
              $arr = $user->arr;
              $individual = User::where(["email"=>$user->email])->first();
              if($individual){
              event(new existinguserevnt($user->email, $user->code, auth()->user()->fullname, $individual->fullname));
              }else{
                  //Notexiting
                event( new Notexiting($user->email, $user->code, auth()->user()->fullname));
              }

            foreach($arr as $ar) {
              $person = User::where(["email"=>$user->email])->first();
              if($person){
                $group =  new grouppurchase();
                $group->email = $user->email;
                 $group->price = $ar->price;
                 $group->coursename = $ar->coursename;
                 $group->fullname = $user->fullname;
                 $group->course_id = $ar->id;
                 $group->purchaser_id = auth()->user()->id;
                 $group->status = $user->status;
                  $group->code = $user->code;
                  $group->moneyname = $user->moneyname;
                  $group->course = $ar->coursetype;
                  $group->save();
                 $usercourse = new userscourse();
                 $usercourse->user_id = $person->id;
                 $usercourse->course_id =  $ar->id;
                 $usercourse->amount = $ar->price;
                 $usercourse->email = $user->email;
                 $usercourse->status = $user->status;
                 $usercourse->referencecode = $user->code;
                 $usercourse->moneyname = $user->moneyname;
                 $usercourse->course = $ar->coursetype;
                 $usercourse->save();
              }else{
                $group =  new grouppurchase();
                $group->email = $user->email;
                 $group->price = $ar->price;
                 $group->coursename = $ar->coursename;
                 $group->course_id = $ar->id;
                 $group->purchaser_id = auth()->user()->id;
                 $group->status = $user->status;
                  $group->code = $user->code;
                  $group->fullname = $user->fullname;
                  $group->moneyname = $user->moneyname;
                  $group->course = $ar->coursetype;
                  $group->save();
              }
            }
        }
       return response()->json(['success'=>'successfull']);
     }


     public function searchcourse(Request $request){



        //     $messages = Employee::select('*')->where(function ($query) use($request){
        //         if($request->role != null || $request->role != ''){
        //              $query->where('role', $request->role);
        //         }
        //          if($request->gender != null || $request->gender != ''){
        //             $query->Where('gender',  $request->gender);
        //          }

        //          if($request->state != null || $request->state != ''){
        //              $query->where(['state'=>$request->state]);
        //          }

        //          if($request->experience != null || $request->experience != ''){
        //              $query->where('experience_length', $request->experience);
        //          }

        //          if($request->Degree != null || $request->Degree != ''){
        //              $query->where('highest_degree', $request->Degree);
        //          }

        //          if($request->age != null || $request->age != ''){
        //                $ans =  $request->age;
        //              $age = explode("-", $ans);
        //              $query->whereBetween('age', [intval($age[0]), intval($age[1])]);
        //          }
        //   })->get();
        $result =   CourseInfo::search($request->items)->take(5)->get();
        $data =  CourseInfomation::collection($result)->resolve();
            return response()->json($data);
       }

       public function searchcourseothm(Request $request){
        $result =   othm::search($request->items)->take(5)->get();
        $data =  courseothm::collection($result)->resolve();
            return response()->json($data);

       }


       public function usercoursesinfo(userscourse $userscourse, Request $request){

        $user = $this->getuser();
        $purchasedcourse = $userscourse->where(['user_id'=>$user->id])->get();
        $data = purchasedcourse::collection($purchasedcourse)->resolve();
        $pagdata =  $this->paginate($data, 6, $request->page);
        return response()->json($pagdata);
      }


      public function percentcompleted( Request $request){

    $user = $this->getuser();
        $total  =  percentage::where(['videoid'=>$request->videoid, 'course_id'=>$request->course_id , 'course_type'=>$request->course_type, 'user_id'=>$user->id])->first();
        if(!$total){
         $percent =  percentage::create([
             "videoid"=>$request->videoid,
             "course_id"=>$request->course_id,
             'user_id'=>$user->id,
             "percentage"=>$request->percentage,
             'page'=>$request->page,
             "status"=>$request->status,
             "course_type"=>$request->course_type
          ]);
          return response()->json([
            'success'=>$percent->percentage,
            'code'=>200
          ]);
        }else{
           if($total->percentage != 100){
            $total->update([
                // "videoid"=>$request->videoid,
                // "course_id"=>$request->course_id,
                "percentage"=>$request->percentage,
                'page'=>$request->page,
                "status"=>$request->status,
             ]);
             return response()->json([
                'code'=>200,
                'success'=>$total->percentage
              ]);
           }else if ($total->percentage == 100){
              return response()->json([
                'code'=>200,
                'success'=>$total->percentage
              ]);
           }
        }
      }

      public function insertothm (Request $request, othm $courseInfo ){

        $courseInfo->create([
            "MainHead"=>$request->mainhead,
            "coursename"=>$request->courses,
            "duration"=>$request->duration,
            "standard_price"=>$request->standard_price,
            "language"=>$request->language,
            "access"=>$request->access,
            "coursedetails"=>$request->coursedetails,
            "whothiscoursefor"=>$request->who,
            "learning"=>$request->learning,
            "certificate"=>true,
            'why_choose_tmc_institute'=>$request->why_choose_tmc,
            'accelerated_price'=>$request->accelerated_price,
            'firstletter'=>$request->firstletter,
            'currency_name'=>$request->currency_name,
            'certification'=>$request->certification
        ]);
        return response()->json([
            'code'=>200,
            'success'=>'you have successfully inserted the data'
        ]);

      }


      public function studyabroad(study $request, Studypro $studypro){

        $studypro->create([
        'fullname'=>$request->fullname,
        'lastname'=>$request->lastname,
        'email'=>$request->email,
        'phone'=>$request->phone,
        'address'=>$request->address,
        'educational'=>$request->educational,
        'school'=>$request->school
        ]);

        event( new studyevent($request->fullname, $request->email, $request->lastname));
        return response()->json([
            'code'=>200,
            'success'=>'Thank you for completing our form'
        ]);
      }

      public  function questremainer(questionremainer $questionremainer, Request $request){

        // $all = questionremainer::where(['user_id'=>auth()->user()->id, 'tryal'=>$request->tryal, 'course_id'=>$request->course_id])->get();
        $quest = $questionremainer->where(['user_id'=>auth()->user()->id, 'tryal'=>$request->tryal, 'course_id'=>$request->course_id])->get();
        if(count($quest) == 2){
         return response()->json([
                'code'=>200,
                'success'=>intval($request->tryal),
             ]);

        }else if (count($quest) < 2){
            $me = $questionremainer->where(['user_id'=>auth()->user()->id, 'tryal'=>$request->tryal, 'course_id'=>$request->course_id])->first();
            if(!$me){
                questionremainer::create([
                'table_ids'=>$request->table_ids,
                'answers'=>$request->answers,
                'totalpercentage'=>$request->totalpercentage,
                'course_type'=>$request->course_type,
                'tryal'=>$request->tryal,
                'user_id'=>auth()->user()->id,
                'course_id'=>$request->course_id
             ]);
             return response()->json([
                'code'=>200,
                'success'=>intval($request->tryal),
             ]);

             }else{
               $answer = $request->totalpercentage + 10;
                $me->update([
                    'table_ids'=>$request->table_ids,
                    'answers'=>$request->answers,
                    'totalpercentage'=> $answer,
                    'course_type'=>$request->course_type,
                 ]);
                 return response()->json([
                    'code'=>200,
                    'success'=>intval($request->tryal),
                 ]);

              }


            }


      }
      public function downloadcetificate(Studentresult $student, Request $request){
 $unique_code = Help::Helps(new othm, 'user_id', 5, 'TMC');
$result =  $student->where(['user_id'=>auth()->user()->id, 'course_type'=>$request->course_type, 'coursename'=>$request->coursename,  ])->exists();
if(!$result){
    Studentresult::create([
        'user_id'=>auth()->user()->id,
       'fullname'=>auth()->user()->fullname,
       'coursename'=>$request->coursename,
       'course_id'=>$request->course_id,
       'unique_code'=>$unique_code,
       'course_type'=>$request->course_type,
       ]);
       $Adminemail = 'enquiries@tmcinstitute.com';
      event(new Adminevent($Adminemail, auth()->user()->fullname, $request->coursename,  $unique_code));
      event(new candidateevent(auth()->user()->email, auth()->user()->fullname, $request->coursename));
       return response()->json([
        'code'=>200,
        'success'=>'email has been sent to your email address',
       ]);
}else{
    return response()->json([
        'code'=>200,
        'success'=>'email has been sent to your email address',
       ]);
}

      }


      public function downloadresult( Studentresult $student,  $num, $course_type){

        $result =  $student->where(['user_id'=>auth()->user()->id, 'course_id'=>$num, 'course_type'=>$course_type,  ])->first();
         if($result){

           // header('Content-type: image/jpeg');
 $fontwrite = public_path('image/arial.ttf');
 $fontsecond = public_path('image/H4chBXKAlMnTn0CskxY48Ae9oqacbzhqDtg.ttf');
$font = realpath($fontwrite);
$fontsec = realpath($fontsecond);
$imagecert = public_path('image/certificate2.JPG');
$image = imagecreatefromjpeg($imagecert);
$output = 'cetificate.jpg';
$color = imagecolorallocate($image, 51, 51, 102);
$date = date('F d, Y', strtotime($result->created_at));
$size = 30;
$x_axis =  1109;
$y_axis = 1200;
$xaxis= 2804;
// Valuwence in commando science
$bbox = imagettfbbox(85, 0, $font, 'Valuwenceinter'); // do not change this
$center1 = $bbox[4] - $bbox[0];
$centerrecent = (2804 - $center1) / 2;
//  print_r($x); exit;
// $width = abs($bbox[4] - $bbox[0]);
// $height = abs($bbox[5] - $bbox[1]);
$resultname = ucwords($result->fullname);
imagettftext($image, 50, 0, 1196, 900, $color, $fontsec, $resultname);  // name of the student
imagettftext($image, 40, 0, $centerrecent, 1000, $color, $font, 'has successfully completed a course in'); // first line of the what course
imagettftext($image, 40, 0, $centerrecent, 1100, $color, $font, $result->coursename); // secon line of the what course
imagettftext($image, $size, 0, $x_axis, $y_axis, $color, $font, 'Date Completed:'.$date); // date of downoading cetificate
imagettftext($image, $size, 0, 1930, 1710, $color, $font, $result->unique_code); // cetificate number
imagejpeg($image, $output);
return response()->download($output, $output, ['Content-Description: File Transfer', 'Content-Type: application/image', 'Content-Disposition: attachment; filename="'.basename($output).'"', "Content-Transfer-Encoding: binary"]);

         }
      }



      public function currencyaddrate(addmoney $request){
        Currncyrate::create([
            'currencyname'=>$request->currencyname,
            'foreignrate'=>$request->foreignrate,
            'nairarate'=>$request->nairarate
        ]);

        $all = Currncyrate::get();
        return response()->json($all);
      }


      public function editcurrency(editmoney $request){
           $currency = Currncyrate::find($request->id);
           $currency->update([
            'currencyname'=>$request->currencyname,
            'foreignrate'=>$request->foreignrate,
            'nairarate'=>$request->nairarate
           ]);

           $all = Currncyrate::get();
           return response()->json($all);
      }


      public function deletecurency(Request $request){
        $currency = Currncyrate::find($request->id);
        $currency->delete();
        $all = Currncyrate::get();
        return response()->json($all);
      }



      public function approvestatus(Request $request){
       $result  = Studentresult::where('unique_code', $request->code)->first();
       if($result){
         $email =  User::where('id', $result->user_id)->first()->email;
        $result->update([
            'status'=>1
           ]);

        event(new Approvedevent($result->fullname, $result->unique_code, $email));
        $resultunApproved = Studentresult::where(['status'=>0])->get();
        $dataunApproved =  Sturesult::collection($resultunApproved)->resolve();
        $page=  $request->page?$request->page:1;
        $pagunAproved =  $this->paginate($dataunApproved, 6, $page);
           return response()->json([
            'code'=>200,
            'success'=>'Approved',
            'data'=>$pagunAproved
           ]);
       }
      }

      public function Approved(Request $request){
        $resultApproved = Studentresult::where(['status'=>1])->get();
        $dataApproved =  Sturesult::collection($resultApproved)->resolve();
        $page=  $request->page?$request->page:1;
        $pagAproved =  $this->paginate($dataApproved, 6, $page);
        return response()->json(['code'=>200, 'success'=>$pagAproved]);
      }

      public function unApproved(Request $request){
        $resultunApproved = Studentresult::where(['status'=>0])->get();
        $dataunApproved =  Sturesult::collection($resultunApproved)->resolve();
        $page=  $request->page?$request->page:1;
        $pagunAproved =  $this->paginate($dataunApproved, 6, $page);
        return response()->json(['code'=>200, 'success'=>$pagunAproved]);

      }

      public function encrypt(Request $request){
        $ciphering = "AES-128-CTR";
        $simple_string = $request->id;
        $iv_length = openssl_cipher_iv_length($ciphering);
        $options = 0;
        $encryption_iv = '1234567891011121';
        $encryption_key = "Tmcinstitute";

        $encryption = openssl_encrypt($simple_string, $ciphering, $encryption_key, $options, $encryption_iv);
          return $encryption;
      }

     public function fogotten(forgottens $request){
        $user = User::where(['email'=>$request->email, 'fullname'=>$request->fullname])->first();
        if($user){
           $user->update([
             "verification_code"=>sha1(time()),
             'is_verfield'=>0
           ]);
           event(new forgotevent($request->status_type, $user->verification_code, $user->fullname, $user->email));
           return response()->json(['success'=>'please check your email']);
        }else{
            return response()->json(['error'=>'please insert the correct full name or email']);
        }

     }

     public function reset(resetpas $request){
        $user = User::where(['verification_code'=>$request->code, 'is_verfield'=>0])->first();
        if($user){
            $user->update([
                'is_verfield'=>1,
                'password'=>Hash::make($request->password)
              ]);

              return response()->json(['success'=>'you have successfully updated your password']);
        }
     }


}
