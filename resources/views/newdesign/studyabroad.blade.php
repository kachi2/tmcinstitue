<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $toptitle }}</title>
    <!-- icons
        ================================================== -->
        {{--  <link rel="stylesheet" href="../assets/css/icons.css">  --}}

        <!-- CSS
        ================================================== -->
        {{--  <link rel="stylesheet"  href="https://video-react.github.io/assets/video-react.css"/>  --}}
  @viteReactRefresh
  @vite([
    'resources/css/app.css',
    'resources/css/style.css',
    'resources/css/uikit.css',
    'resources/css/tailwind.min.css',
    'resources/js/components/new/Study.jsx',
    'resources/js/jquery-3.6.0.min.js',
    'resources/js/uikit.min.js',
  ])


  <link rel="shortcut icon" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg" type="image/x-icon"/>


</head>
<body>
<div id="study"></div>
</body>
<script type="text/javascript">
    var userpic = {{ Js::from(auth()->user()->picture??"") }};
    var usersemail = {{ Js::from(auth()->user()->email??"") }}
    var username = @json(session()->get('userdetail')->fullname??"");
    var currencysymbol = {{ Js::from($currencysymbol??"") }}
    var currencyex = {{ Js::from($currencyex??"") }}
    var poundton  = {{ Js::from($poundton??"")}}
    var othersmoneys = {{ Js::from($othermoney??"") }};
    var additionalpic = {{ JS::from($additionalpic??"") }}
    var captchaimg = {{ Js::from(captcha_src()) }}
    var cart = {{ Js::from(json_decode($cart->usercartdetails??'')) }};


      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/6311da2337898912e966ce56/1gburo81e';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();
  </script>
  </html>

