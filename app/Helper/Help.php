<?php
namespace App\Helper;

use App\Models\userscourse;

class Help{


    public static function Helps($model, $row, $length = 4, $prefix){

        $data =  $model::orderBy('id', 'desc')->first();

        if(!$data){
            $og_length = $length;
            $last_number = '';

        }else{
            $code = substr($data->$row, strlen($prefix)+1);
            $code = random_int(0000, 9999);
            $ran = random_int(1, 7);
             $actual_last_number = ($code/1)*$ran;
             $increament_last_number = $actual_last_number+1;
             $last_number_length = strlen($increament_last_number);
             $og_length = $length - $last_number_length;
             $last_number =   $increament_last_number;
        }
        $zero = '';
        for ($i=0; $i < $og_length ; $i++) {
         $zero.="0";
        }

        return $prefix.'-'.$zero.$last_number;

     }
     public  function get_client_ip() {
        $ipaddress = '';
        if (isset($_SERVER['HTTP_CLIENT_IP']))
            $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
        else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
        else if(isset($_SERVER['HTTP_X_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
        else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
        else if(isset($_SERVER['HTTP_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_FORWARDED'];
        else if(isset($_SERVER['REMOTE_ADDR']))
            $ipaddress = $_SERVER['REMOTE_ADDR'];
        else
            $ipaddress = 'UNKNOWN';
        return $ipaddress;
    }
     public function getplace(){
        // $ip = $request->ip();
    // $ip =  $_SERVER['REMOTE_ADDR'];

    $curl = curl_init();
    // 102.89.43.175 - Nigeria
    // 96.158.226.150 - U.S.A
    // 175.200.244.203 - South Korea
    // 92.119.176.178 - United Kingdom
    $ip = '175.200.244.203';
    // $ip = $this->get_client_ip();

    curl_setopt_array($curl, array(
      CURLOPT_URL => "https://api.ipgeolocation.io/ipgeo?apiKey=ed5d8ccaca8d4e05a822b127ee2b5bea&ip=$ip",
    //   CURLOPT_HTTPHEADER => array(
    //  "Accept: application/json"
    //   ),
      CURLOPT_RETURNTRANSFER => true,
    //   CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    //   CURLOPT_CUSTOMREQUEST => "GET"
    ));

    $response = curl_exec($curl);

    curl_close($curl);

    $answer = json_decode($response);

    return $answer;

    }


    public  function moneyconvert(){
      // dd((new Help)->getplace());
        $from = (new Help)->getplace()->currency->code;
        $to = 'NGN';
        $amount = 1;
       $curl = curl_init();
       curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.fastforex.io/fetch-one?from=$from&to=$to&api_key=6ffd04e627-f6e68f8a74-rgrr5z",
        CURLOPT_HTTPHEADER => array(
       "Accept: application/json"
        ),
         CURLOPT_RETURNTRANSFER => true,
         CURLOPT_ENCODING => "",
         CURLOPT_MAXREDIRS => 10,
         CURLOPT_TIMEOUT => 0,
         CURLOPT_FOLLOWLOCATION => true,
         CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
         CURLOPT_CUSTOMREQUEST => "GET"
       ));

       $response = curl_exec($curl);



    $answer = json_decode($response);
    $err = curl_error($curl);
    if ($err) {
    //   dd($err);
    } else {
        // sleep(10);
      return  $response;
    // dd($response);
    }

    curl_close($curl);
    }

    public  function constant(){

        $from= 'USD';
        $to = 'NGN';
        $amount = 1;
       $curl = curl_init();
       curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.fastforex.io/fetch-one?from=$from&to=$to&api_key=6ffd04e627-f6e68f8a74-rgrr5z",
        CURLOPT_HTTPHEADER => array(
       //    "Content-Type: text/plain",
       //    "apikey: j4L2ULOPUCFCzuU6iyBoBH7c949ZQoCd"
       "Accept: application/json"
        ),
         CURLOPT_RETURNTRANSFER => true,
         CURLOPT_ENCODING => "",
         CURLOPT_MAXREDIRS => 10,
         CURLOPT_TIMEOUT => 0,
         CURLOPT_FOLLOWLOCATION => true,
         CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
         CURLOPT_CUSTOMREQUEST => "GET"
       ));

       $response = curl_exec($curl);

       $answer = json_decode($response);

        //  dd($answer->result->NGN);

           return $answer;
            //  dd($answer);
       curl_close($curl);
    //   result





    }


    // public function check(){
    //     $usercourse = userscourse::Where(['user_id'=>auth()->user()->id])->first();
    //     if($usercourse->status == 'COMPLETED' || 'Verification successful'){
    //      return true;
    //     }else if($usercourse->status == null){
    //      return false;
    //     }
    //   }

}


?>
