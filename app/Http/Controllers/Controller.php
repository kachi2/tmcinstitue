<?php

namespace App\Http\Controllers;

use App\Events\EmailEvent;
use App\Helper\Help;
use App\Mail\SendEmails;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Models\UserCart;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;
use Illuminate\Pagination\LengthAwarePaginator;
use phpDocumentor\Reflection\Types\Self_;
use Symfony\Component\HttpFoundation\IpUtils;

// // use PolygonIO\Rest\Rest;
// use Stevebauman\Location\Facades\Location;
// use Illuminate\Http\Request;
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function SendMail($fullname, $email, $verification_code, $company){
          event(new EmailEvent($fullname, $verification_code, $email, $company));
    }

    public function getuser (){

      return auth()->user();

    }



   public function get_client_ip() {
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
      CURLOPT_RETURNTRANSFER => true,
    ));

    $response = curl_exec($curl);

    curl_close($curl);

    $answer = json_decode($response);
    return $answer;
    }




    protected $userinfo;
    protected $cartadded;
    public function __construct(User $person, UserCart $cart)
    {
       $this->userinfo = $person;
       $this->cartadded = $cart;
    }


    public function poundconvert(){
        $from= Self::getplace()->currency->code;
        $to = 'USD';
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

       curl_close($curl);

       $answer = json_decode($response);
       return $answer;

    }



    public function paginate($items, $perPage = 4, $page = null){
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
        $total = count($items);
        $currentpage = $page;
        $offset = ($currentpage * $perPage) - $perPage ;
        $itemstoshow = array_slice($items , $offset , $perPage);
        return new LengthAwarePaginator($itemstoshow ,$total ,$perPage);
    }

    public function list_countries(){
        $countries = [
            "Select option",
           "Afghanistan",
           "Aland Islands",
           "Albania",
           "Algeria",
           "American Samoa",
           "Andorra",
           "Angola",
           "Anguilla",
           "Antarctica",
           "Antigua and Barbuda",
           "Argentina",
           "Armenia",
           "Aruba",
           "Australia",
           "Austria",
           "Azerbaijan",
           "Bahamas",
           "Bahrain",
           "Bangladesh",
           "Barbados",
           "Belarus",
           "Belgium",
           "Belize",
           "Benin",
           "Bermuda",
           "Bhutan",
           "Bolivia",
           "Bonaire, Sint Eustatius and Saba",
           "Bosnia and Herzegovina",
           "Botswana",
           "Bouvet Island",
           "Brazil",
           "British Indian Ocean Territory",
           "Brunei Darussalam",
           "Bulgaria",
           "Burkina Faso",
           "Burundi",
           "Cambodia",
           "Cameroon",
           "Canada",
           "Cape Verde",
           "Cayman Islands",
           "Central African Republic",
           "Chad",
           "Chile",
           "China",
           "Christmas Island",
           "Cocos (Keeling) Islands",
           "Colombia",
           "Comoros",
           "Congo",
           "Congo, the Democratic Republic of the",
           "Cook Islands",
           "Costa Rica",
           "Cote D'Ivoire",
           "Croatia",
           "Cuba",
           "Curacao",
           "Cyprus",
           "Czech Republic",
           "Denmark",
           "Djibouti",
           "Dominica",
           "Dominican Republic",
           "Ecuador",
           "Egypt",
           "El Salvador",
           "Equatorial Guinea",
           "Eritrea",
           "Estonia",
           "Ethiopia",
           "Falkland Islands (Malvinas)",
           "Faroe Islands",
           "Fiji",
           "Finland",
           "France",
           "French Guiana",
           "French Polynesia",
           "French Southern Territories",
           "Gabon",
           "Gambia",
           "Georgia",
           "Germany",
           "Ghana",
           "Gibraltar",
           "Greece",
           "Greenland",
           "Grenada",
           "Guadeloupe",
           "Guam",
           "Guatemala",
           "Guernsey",
           "Guinea",
          "Guinea-Bissau",
           "Guyana",
           "Haiti",
           "Heard Island and Mcdonald Islands",
           "Holy See (Vatican City State)",
           "Honduras",
           "Hong Kong",
           "Hungary",
           "Iceland",
           "India",
           "Indonesia",
           "Iran, Islamic Republic of",
           "Iraq",
           "Ireland",
           "Isle of Man",
           "Israel",
           "Italy",
           "Jamaica",
           "Japan",
           "Jersey",
           "Jordan",
           "Kazakhstan",
           "Kenya",
           "Kiribati",
           "Korea, Democratic People's Republic of",
           "Korea, Republic of",
           "Kosovo",
           "Kuwait",
           "Kyrgyzstan",
           "Lao People's Democratic Republic",
           "Latvia",
           "Lebanon",
           "Lesotho",
           "Liberia",
           "Libyan Arab Jamahiriya",
           "Liechtenstein",
           "Lithuania",
           "Luxembourg",
           "Macao",
           "Macedonia, the Former Yugoslav Republic of",
           "Madagascar",
           "Malawi",
           "Malaysia",
           "Maldives",
           "Mali",
           "Malta",
           "Marshall Islands",
           "Martinique",
           "Mauritania",
           "Mauritius",
           "Mayotte",
           "Mexico",
           "Micronesia, Federated States of",
           "Moldova, Republic of",
           "Monaco",
           "Mongolia",
           "Montenegro",
           "Montserrat",
           "Morocco",
           "Mozambique",
           "Myanmar",
           "Namibia",
           "Nauru",
           "Nepal",
           "Netherlands",
           "Netherlands Antilles",
           "New Caledonia",
           "New Zealand",
           "Nicaragua",
           "Niger",
           "Nigeria",
           "Niue",
           "Norfolk Island",
           "Northern Mariana Islands",
           "Norway",
           "Oman",
           "Pakistan",
           "Palau",
           "Palestinian Territory, Occupied",
           "Panama",
           "Papua New Guinea",
           "Paraguay",
           "Peru",
           "Philippines",
           "Pitcairn",
           "Poland",
           "Portugal",
           "Puerto Rico",
           "Qatar",
           "Reunion",
           "Romania",
           "Russian Federation",
           "Rwanda",
           "Saint Barthelemy",
           "Saint Helena",
           "Saint Kitts and Nevis",
           "Saint Lucia",
           "Saint Martin",
           "Saint Pierre and Miquelon",
           "Saint Vincent and the Grenadines",
           "Samoa",
           "San Marino",
           "Sao Tome and Principe",
           "Saudi Arabia",
           "Senegal",
           "Serbia",
           "Serbia and Montenegro",
           "Seychelles",
           "Sierra Leone",
           "Singapore",
           "Sint Maarten",
           "Slovakia",
           "Slovenia",
           "Solomon Islands",
           "Somalia",
           "South Africa",
           "South Georgia and the South Sandwich Islands",
           "South Sudan",
           "Spain",
           "Sri Lanka",
           "Sudan",
           "Suriname",
           "Svalbard and Jan Mayen",
           "Swaziland",
           "Sweden",
           "Switzerland",
           "Syrian Arab Republic",
           "Taiwan, Province of China",
           "Tajikistan",
           "Tanzania, United Republic of",
           "Thailand",
           "Timor-Leste",
           "Togo",
           "Tokelau",
           "Tonga",
           "Trinidad and Tobago",
           "Tunisia",
           "Turkey",
           "Turkmenistan",
           "Turks and Caicos Islands",
           "Tuvalu",
           "Uganda",
           "Ukraine",
           "United Arab Emirates",
           "United Kingdom",
           "United States",
           "United States Minor Outlying Islands",
           "Uruguay",
           "Uzbekistan",
           "Vanuatu",
           "Venezuela",
           "Viet Nam",
           "Virgin Islands, British",
           "Virgin Islands, U.s.",
           "Wallis and Futuna",
           "Western Sahara",
           "Yemen",
           "Zambia",
           "Zimbabwe"
      ];
      return $countries;
    }

    public function cloudinary($data){
    $uploadedFileUrl = Cloudinary::uploadFile($data->getRealPath());
    $answer = $uploadedFileUrl->getSecurePath();
    return $answer;
    }

    // public function cloudinarysec($data){
    //     $uploadedFileUrl = Cloudinary::uploadFile($data->getRealPath());
    //     $answer = $uploadedFileUrl->getSecurePath();
    //     return $answer;
    //     }

    public function poundtonaira(){
        $from= 'GBP';
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

       curl_close($curl);

       $answer = json_decode($response);
       return $answer;

    }


    public function frompoundtoother(){
        $from= 'GBP';
        $to = Self::getplace()->currency->code;
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

       curl_close($curl);

       $answer = json_decode($response);
       return $answer;

    }

    public function decrypt($encrypt_id){
        $decryption_iv = '1234567891011121';
        $decryption_key = "Tmcinstitute";
        $ciphering = "AES-128-CTR";
        $options = 0;
        $encryption = $encrypt_id;
        $decryption =openssl_decrypt ($encryption, $ciphering, $decryption_key, $options, $decryption_iv);
        return $decryption;
  }

}
