<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $toptitle }}</title>

    <!-- icons
        ================================================== -->
        {{--  <link rel="stylesheet" href="../assets/css/icons.css">  --}}

        <!-- CSS
        ================================================== -->
  @viteReactRefresh
  @vite([
    'resources/css/app.css',
    'resources/css/style.css',
    'resources/css/uikit.css',
    'resources/css/tailwind.min.css',
    'resources/js/components/new/AdminDashboard.jsx',
    'resources/js/jquery-3.6.0.min.js',
   'resources/js/uikit.min.js',
   // 'resource/css/rate.css',
  ])
  <link rel="shortcut icon" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg" type="image/x-icon"/>


</head>
<body>
<div id="admindash">
</div>
</body>
<script type="text/javascript">
 {{--  var image = "{{ asset('images/placeholder.png') }}"  --}}
 var userpic = {{ Js::from(auth()->user()->picture??"") }};
 var usersemail = {{ Js::from(auth()->user()->email??"") }}
 var username = @json(session()->get('userdetail')->fullname??"");

 var  token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
 var todollar = {{ Js::from($poundtodollar??"") }}
 var poundton  = {{ Js::from($poundton??"")}}
 var currencyex = {{ Js::from($currencyex??"") }}
var currencysymbol = {{ Js::from($currencysymbol??"") }}
var othersmoneys = {{ Js::from($othermoney??"") }};
var admin = {{ Js::from($admin??"") }}
var dataApproved = {{ Js::from($dataApproved??"") }}
var dataunApproved = {{ Js::from($dataunApproved??"") }}
{{--  console.log(dataunApproved.last_page)
console.log(dataApproved)  --}}
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



