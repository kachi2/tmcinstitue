<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginValidate;
use App\Http\Requests\RegisterValidate;
use App\Models\Admin;
use App\Models\grouppurchase;
use App\Models\User;
use App\Models\userscourse;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;
use Auth0\SDK\Auth0;
use Auth0\SDK\Configuration\SdkConfiguration;

class AuthController extends Controller
{
   protected $dataval;
    public function googleredirect(){
        return Socialite::driver('google')->redirect();
     }

    public function googlecallback(){
        $userdata = Socialite::driver('google')->user();
        $user = User::where(['email'=>$userdata->email, 'fullname'=>$userdata->name])->exists();
        if($user){
            $admin =  Admin::where(['user_id'=>intval($user->id)])->exists();
            if($admin){
                Auth::login($user);
                Session::put('userdetail', auth()->user());
                return redirect('/newdashboard');
            }else{
                Auth::login($user);
                return redirect('/question'.'/'.$user->user_login.'/'.$user->verification_code);
            }

        }else{
            $user = $this->userinfo->create([
                "fullname"=>$userdata->name,
                "email"=>$userdata->email,
                "password"=>Hash::make($userdata->id),
                "termsandcondition"=>1,
                "is_verfield"=>1,
                "verification_code"=>sha1(time()),
                "picture"=>$userdata->avatar_original,
                "user_login"=>'google_login'
            ]);
            Auth::login($user);
           return redirect('/question'.'/'.$user->user_login.'/'.$user->verification_code);
        }
    }
    public function authenticate(){
        $configuration = new SdkConfiguration(
            domain: 'dev-cdxgoy47.us.auth0.com',
            clientId: '7z9K9ZHVM0wUCR7B3f6MkngwZ9C569CW',
            clientSecret: 'H-2jOohqJfmSoTEH6-m_d1pSZ2h5cPP9ye3z2XMFCw7MUYkJWIt7R1mzLjxHCC4F',
            redirectUri: 'http://'.$_SERVER['HTTP_HOST'].'/auth/callback',
            cookieSecret: '4f60eb5de6b5904ad4b8e31d9193e7ea4a3013b476ddb5c259ee9077c05e1457'
          );


          $sdk = new Auth0($configuration);
        //   dd($sdk->getCredentials());

          return redirect($sdk->login());
    }


                public function authcallback()  {

                if(isset($_REQUEST['state']) && isset($_REQUEST['code'])){
                    //  https://github.com/auth0/auth0-php
                    $configuration = new SdkConfiguration(
                        domain: "dev-cdxgoy47.us.auth0.com",
                        clientId: '7z9K9ZHVM0wUCR7B3f6MkngwZ9C569CW',
                        clientSecret: 'H-2jOohqJfmSoTEH6-m_d1pSZ2h5cPP9ye3z2XMFCw7MUYkJWIt7R1mzLjxHCC4F',
                        // 'http://'.$_SERVER['HTTP_HOST'].'/newdashboard',
                        redirectUri: 'http://'.$_SERVER['HTTP_HOST'].'/auth/callback',
                        cookieSecret: '4f60eb5de6b5904ad4b8e31d9193e7ea4a3013b476ddb5c259ee9077c05e1457'
                      );
                      $toptitle = 'TMC Institute';
                      $sdk = new Auth0($configuration);
                    //    echo json_encode($sdk->exchange());
                        // dd($sdk->exchange());
                      try {
                                if ($sdk->exchange()) {
                                    $userdata =  $sdk->getUser();
                                    $user = User::where(['email'=>$userdata['email'], 'fullname'=>$userdata['name']])->first();
                                    if ($user){
                                         Auth::login($user);
                                        Session::put('userdetail', auth()->user());
                                         $newdashboard = 'newdashboard';
                                         $toptitle = 'TMC Institute';
                                         return view('newdesign.authcallback', ['nextpage'=>true, 'toptitle'=>$toptitle]);

                                    }else{
                                        $userdata =  $sdk->getUser();
                                        // echo json_encode($userdata['sid']." ".$userdata['picture']);
                                          $user = new User();
                                             $user->fullname = $userdata['name'];
                                              $user->email = $userdata['email'];
                                              $user->password = Hash::make($userdata['sid']);
                                              $user->termsandcondition = 1;
                                              $user->is_verfield = 1;
                                              $user->verification_code = sha1(time());
                                              $user->picture = $userdata['picture'];
                                              $user->user_login = 'google_login';
                                                $user->save();

                                          Auth::login($user);
                                          return redirect('/question'.'/'.$user->user_login.'/'.$user->verification_code);
                                        // return redirect()->route('question',['user_login'=>$user->user_login,'verification_code'=>$user->verification_code]);
                                    // return view('newdesign.authcallback', ['user_login'=>$user->user_login, 'verification_code'=>$user->verification_code, 'toptitle'=>$toptitle]);

                                    }
                                }
                      }catch(\Exception $e) {
                        $e->getMessage();
                            // return view('newdesign.authcallback', ['message_error'=>$e->getMessage(), 'toptitle'=>$toptitle]);
                      }

                }else{
                    $toptitle = 'TMC Institute';
                  return  redirect('/signup');
                    // return view('newdesign.authcallback', ['sign'=>'signup', 'toptitle'=>$toptitle]);

                }


            //     array:16 [▼
            //     "given_name" => "stephen"
            //     "family_name" => "jason"
            //     "nickname" => "stephenjason41"
            //     "name" => "stephen jason"
            //     "picture" => "https://lh3.googleusercontent.com/a/AItbvmljYPrOhqxgJAd7SH6jz62zyl8DW5lVf9JRZoii=s96-c"
            //     "locale" => "en"
            //     "updated_at" => "2022-09-14T15:47:48.113Z"
            //     "email" => "stephenjason41@gmail.com"
            //     "email_verified" => true
            //     "iss" => "https://dev-cdxgoy47.us.auth0.com/"
            //     "sub" => "google-oauth2|106017471758047809686"
            //     "aud" => "7z9K9ZHVM0wUCR7B3f6MkngwZ9C569CW"
            //     "iat" => 1663170469
            //     "exp" => 1663206469
            //     "sid" => "BcMEqs6S9L6cMNSQcMM-cviLyUnWOks0"
            //     "nonce" => "a6c7ca123634d235dcd3dbd6f37c5331"
            //   ]
                }


            public function oathregister(Admin $admin,  Request $request){

             $result =   $admin->where('user_id', auth()->user()->id)->exists();
             if($result == false){
                $answer = $request->has_organisation == false?1:0;
                 $admin =  new Admin();
                    $admin->user_id = auth()->user()->id;
                     $admin->has_organisation = $answer;
                     $admin->save();
                 Session::put('userdetail', auth()->user());
                 return response()->json(["success"=>"successful", "company"=>$admin->has_organisation]);
             }else{
                return response()->json(["error"=>"please select an option"]);

             }

            }


    public function Register(RegisterValidate $request, Admin $admin, grouppurchase $grouppurchase){
          $request->validated();
           $user = $this->userinfo->create([
            "fullname"=>$request->fullname,
            "email"=>$request->email,
            "password"=>Hash::make($request->password),
            "termsandcondition"=>1,
            "verification_code"=>sha1(time()),
            "user_login"=>'normal'
        ]);
         $admin->create([
            'user_id'=>$user->id,
            'has_organisation'=>false
         ]);


         if($request->code){
            $group = $grouppurchase->where(['email'=>$request->email, 'code'=>$request->code])->get();
             if(count($group) > 0 ){
                 foreach ($group as $grou) {
                $courses = new userscourse();
                $courses->user_id = $user->id;
                $courses->course_id = $grou->course_id;
                $courses->amount = $grou->price;
                $courses->email = $grou->email;
                $courses->status = $grou->status;
                $courses->referencecode =  $grou->code;
                $courses->save();
                 }
             }

             $this->SendMail($user->fullname, $user->email, $user->verification_code, $request->company);
             return response()->json([
                 "code"=>200,
                 "success"=>'your account has been created'
             ]);

         }else{
            $this->SendMail($user->fullname, $user->email, $user->verification_code, $request->company);
            return response()->json([
                "code"=>200,
                "success"=>'your account has been created'
            ]);
         }


    }

    public function Logout() {
        // if(auth()->user()->user_login == 'normal'){
            Auth::logout();
            Session::invalidate();
            Session::flush();
            return redirect('/');
        // }else{
        //     $configuration = new SdkConfiguration(
        //         domain: 'dev-cdxgoy47.us.auth0.com',
        //         clientId: '7z9K9ZHVM0wUCR7B3f6MkngwZ9C569CW',
        //         clientSecret: 'H-2jOohqJfmSoTEH6-m_d1pSZ2h5cPP9ye3z2XMFCw7MUYkJWIt7R1mzLjxHCC4F',
        //         redirectUri: 'http://'.$_SERVER['HTTP_HOST'],
        //         cookieSecret: '4f60eb5de6b5904ad4b8e31d9193e7ea4a3013b476ddb5c259ee9077c05e1457'
        //       );
        //       $sdk = new Auth0($configuration);
        //         Auth::logout();
        //         Session::invalidate();
        //         Session::flush();
        //         return redirect($sdk->logout());
        //         // Auth::logout();
        //         // Session::invalidate();
        //         // return redirect('/');
        //       }

        }




            // public function lognot(){
            //     Auth::logout();
            //     Session::invalidate();
            //     return redirect('/');
            // }



    public function loginusers(LoginValidate $request, User $user, Admin $admin){
             $userid =  $user->where(['email'=>$request->email])->first();
            if($userid){
                $addetail =  $admin->where(['user_id'=>$userid->id])->first();
                if(Auth::attempt(['email'=>$request->email, 'password'=>$request->password, 'is_verfield'=>1]) && $addetail->has_organisation == false){
                    Session::put('userdetail', auth()->user());
                  return response()->json([
                      'code'=>200,
                      'success'=>'you have logged in successfully',
                  ]);
                }
                else{
                  return response()->json(['error'=>'please insert the correct password or email']);
                }
            }else{
                return response()->json(['error'=>'please insert the correct password or email']);

            }
    }


    public function companyregister(RegisterValidate $request, Admin $admin){
        $request->validated();

         $user = $this->userinfo->create([
          "fullname"=>$request->fullname,
          "email"=>$request->email,
          "password"=>Hash::make($request->password),
          "termsandcondition"=>1,
          "verification_code"=>sha1(time()),
          "user_login"=>'normal'
      ]);
       $admin->create([
          'user_id'=>$user->id,
          'has_organisation'=>true
       ]);
      $this->SendMail($user->fullname, $user->email, $user->verification_code,  $request->company);
       return response()->json([
           "code"=>200,
           "success"=>'your account has been created'
       ]);
  }

public function companyloginusers(LoginValidate $request, User $user, Admin $admin){

  $userid =  $user->where('email', $request->email)->first();

  if($userid){
    $addetail =  $admin->where(['user_id'=>$userid->id])->first();
    if(Auth::attempt(['email'=>$request->email, 'password'=>$request->password, 'is_verfield'=>1]) && $addetail->has_organisation == true){
        Session::put('userdetail', auth()->user());
      return response()->json([
          'code'=>200,
          'success'=>'you have login successfully',
      ]);
    }else{
      return response()->json(['error'=>'please insert the correct password or email']);
    }
  }else{
    return response()->json(['error'=>'please insert the correct password or email']);
  }


}

public function loginadmin(LoginValidate $request, User $user, Admin $admin){
    $userid =  $user->where('email', $request->email)->first();
    if($userid){
        $addetail =  $admin->where(['user_id'=>$userid->id])->first();
        if(Auth::attempt(['email'=>$request->email, 'password'=>$request->password, 'is_verfield'=>1]) && $addetail->is_admin == true){
            Session::put('userdetail', auth()->user());
          return response()->json([
              'code'=>200,
              'success'=>'you have login successfully',
          ]);
        }else{
          return response()->json(['error'=>'please insert the correct password or email']);
        }

    }else{
        return response()->json(['error'=>'please insert the correct password or email']);
    }

}

}
