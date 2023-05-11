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
        <link rel="stylesheet"  href="https://video-react.github.io/assets/video-react.css"/>
  @viteReactRefresh
  @vite([
    'resources/css/app.css',
    'resources/css/style.css',
    'resources/css/uikit.css',
    'resources/css/tailwind.min.css',
    'resources/js/components/new/Coursewatch.jsx',
    'resources/js/jquery-3.6.0.min.js',
    'resources/js/uikit.min.js',
  ])
  <link rel="shortcut icon" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg" type="image/x-icon"/>


</head>
<body>
<section id="watch">
</section>
</body>
<script type="text/javascript">
    var userpic = {{ Js::from(auth()->user()->picture??"") }};
    var usersemail = {{ Js::from(auth()->user()->email??"") }}
    var username = @json(session()->get('userdetail')->fullname??"");

  var fetchdata   = {{ Js::from($fetchdata??"") }}
  var coursepurshase = {{ Js::from($coursepurshase??"") }}
  var coursecomplete = {{ Js::from($coursecomplete??"") }}
   var question  = {{ Js::from($question??"")}}
   var num = {{ Js::from($num??"") }}
   var word = {{ Js::from($word??"") }}
   var downresult = {{ Js::from($downresult??"") }}
   var greatereight = {{ Js::from($greatereight??"") }}

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

