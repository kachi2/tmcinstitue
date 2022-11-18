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
        {{--  <link rel="stylesheet" href="../assets/css/uikit.css">
        <link rel="stylesheet" href="../assets/css/style.css">  --}}
 {{--  <link rel="stylesheet"  href="https://video-react.github.io/assets/video-react.css"/>  --}}
  <link rel="stylesheet" href="{{ asset('css/style.css') }}"/>
  {{--  <link rel="stylesheet" href="{{ asset('css/icons.css') }}"/>  --}}
  <link rel="stylesheet" href="{{ asset('css/uikit.css') }}"/>
  <link rel="stylesheet" href="{{ asset('css/tailwind.min.css') }}"/>
  {{--  <link rel="stylesheet" href="{{ asset('css/icons.css') }}}}" />  --}}
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  <link rel="shortcut icon" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg" type="image/x-icon"/>


</head>
<body>
    <article class=''>
        <div class="preloader grid place-content-center">
            <div class="w-60">
                <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" alt="preloader" class="preloader__item" />
            </div>

          </div>
    {{--  @include('partials.navbar')  --}}

    @yield('content')
    {{--  @include('partials.footer')  --}}
    </article>
    </body>
{{--  <script src="https://www.paypal.com/sdk/js?client-id=AYauehWxDIcW5N-L432YO1bcyGnqy4lzfx00pdgX5VLRlm0qQ48rKn4odTFy8J_bWdUi57eOAS8c1ato&components=buttons"></script>  --}}
<script type="text/javascript">
var status_type = {{ Js::from($status??"") }}
var code  = {{ Js::from($code??"") }}
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
<script src="{{ mix('js/app.js') }}"></script>
<script src="{{ asset('js/jquery-3.6.0.min.js') }}"></script>
<script src="{{ asset('js/uikit.min.js') }}"></script>
<script src="{{ asset('js/swap.js') }}"></script>
</html>
