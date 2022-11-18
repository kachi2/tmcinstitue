<?php

namespace App\Http\Controllers;

use App\Http\Resources\CourseData;
use App\Http\Resources\CourseInfomation;
use App\Http\Resources\Personvideos;
use App\Models\Admin;
use App\Models\CourseInfo;
use App\Models\grouppurchase;
use App\Models\User;
use App\Models\userscourse;
use App\Models\UserWatched;
use Illuminate\Http\Request;

class ViewController extends Controller
{
    public function verifiedemail($data){
        $code =   $this->userinfo->where('verification_code', $data)->first();
        if($code && $code->is_verfield == 0){
            $code->update([
                'is_verfield'=>1
            ]);
            return  FrontendController::verified();
             }else{
                return redirect('signup');
             }

    }

    public function company_email($data){
        $code =   $this->userinfo->where('verification_code', $data)->first();
        if($code){
            $code->update([
                'is_verfield'=>1
            ]);
               $frontend =  new FrontendController();
               return  $frontend->companyverified();
             }else{
                return redirect('signup');
             }
    }


    public function courseinfo (CourseInfo $courseInfo, userscourse $usercourse, $num){
      $user = $this->getuser();
      $data =  $courseInfo->find($num);
      $money = $this->moneyconvert();
      dd($money);
      $coursepurshase = $usercourse->where(['user_id'=>$user->id, 'course_id'=>$num])->first();
     $fetchdata = new CourseData($data);
     return FrontendController::coursedetails($fetchdata, $coursepurshase, $money);
    }

    public function paystack_verify($ref){
        $sercrtKey = "sk_live_abbddba5b0e76737438d1f27f9bdb76e33717e5d";
        $curl = curl_init();
        curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.paystack.co/transaction/verify/$ref",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_SSL_VERIFYHOST => 0,
        CURLOPT_SSL_VERIFYPEER => 0,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "Authorization: Bearer $sercrtKey",
            "Cache-Control: no-cache",
        ),
        ));

        $response = curl_exec($curl);
        return $response;

        $err = curl_error($curl);
        curl_close($curl);
            }

        public function dashfunction (CourseInfo $courseInfo){
            $user = $this->getuser();
            $cart =  $this->cartadded->where(['user_id'=> $user->id])->first();
            $info = $courseInfo->orderBy('id', 'asc')->get();
            $data =  CourseInfomation::collection($info)->resolve();
            $page= 1;
            $pagdata =  $this->paginate($data, 4, $page);
            $unique = $courseInfo->get(['MainHead']);
            $convet = $unique->toArray();
            $unique_data = [];
            foreach ($convet as $value) {
                array_push($unique_data,  $value['MainHead']);
          }

            $uni = array_unique($unique_data);
            return FrontendController::dashboard($pagdata, $cart, $uni);
        }

        public function uservideowatch($course_id, $video_id, UserWatched $userwatched){
         $watched = $userwatched->where(['videoid'=>$video_id, 'course_id'=>$course_id])->first();
         return response()->json(["success"=>$watched]);
        }


        public function cartfunction(){
         $user = $this->getuser();
         $money = $this->moneyconvert();
        $cart =  $this->cartadded->where(['user_id'=> $user->id])->first();
        return FrontendController::cart($cart, $money);
        }


        public function invoicefun(){
            return FrontendController::invoiceshow();
        }

        public function questfun($user_login, $verification_code, User $user, Admin $admin){
         $check =  $user->where(['user_login'=>$user_login, 'verification_code'=>$verification_code])->first();
       //  $pre =    $admin->where(['user_id'=>$pre->id])->first();  && !$pre
         if($check){
            $steve =new FrontendController();
             return  $steve->question();
         }else{
             return redirect('/');
         }
        }

        public function usercheckcourse(Request $request){
            $data = json_decode($request->data);
            $collection = collect($data);
        $multiplied = $collection->map(function ($item) {
            $usercourse =  userscourse::where(['email'=>$item->email,   'course_id'=>$item->id])->first();
            if($usercourse){
              $course =  CourseInfo::where('id', $item->id)->first()->coursename;
             return 'This user with this email '.$usercourse->email.' has purchased this course'.$course;
            }else{
               return 'This user with this email has not purchased this '.$item->coursename.'.';
            }
            // return $item * 2;
        });

           $info =  json_encode($multiplied->all());

           return response()->json(['code'=>200, 'success'=>$info]);
        }

        public function giftedfun($code, $email){
            $group = grouppurchase::where(["email"=>$email, "code"=>$code])->get();
            if (count($group) > 0) {
                $group = grouppurchase::where(["email"=>$email, "code"=>$code])->update(["true_status"=>1]);
                $recent = grouppurchase::where(["email"=>$email, "code"=>$code])->first();
                 $front = new FrontendController();
               return $front->gifted($code, $email,  $recent);
            }else{
                return redirect('/');
            }
        }


        public function mycoursesfun(){
            $usercourses =  userscourse::where('user_id', auth()->user()->id)->get();
            $personvideos =  Personvideos::collection($usercourses);
            $front = new FrontendController();
           return $front->mycourses($personvideos);
        }

}
