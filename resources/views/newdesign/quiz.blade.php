<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $toptitle }}</title>
    <style type="text/css">
        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
              sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background-color:white;
          }
          * {
            font-family: "Verdana", cursive, sans-serif;
            color: #ffffff;
          }

           body {
            background-color:white;
            /* display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh; */
          }

          .app {
            /* background-color: #252d4a; */
            width:500px;
            min-height: 200px;
            height: min-content;
            border-radius: 15px;
            padding: 20px;
            /* box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75); */
            display:block;
            justify-content: space-evenly;
          }

          .score-section {
            display: flex;
            font-size: 24px;
            align-items: center;
          }

          /* QUESTION/TIMER/LEFT SECTION */
          .question-section {
            width: 100%;
            position: relative;
          }

          .question-count {
            margin-bottom: 20px;
          }

          .question-count span {
            font-size: 28px;
          }

          .question-text {
            margin-bottom: 12px;
          }

          .timer-text {
            background: rgb(230, 153, 12);
            padding: 15px;
            margin-top: 20px;
            margin-right: 20px;
            border: 5px solid rgb(255, 189, 67);
            border-radius: 15px;
            text-align: center;
          }

          /* ANSWERS/RIGHT SECTION */
          .answer-section {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .checkone{
            width: 100%;
            font-size: 16px;
            color: #ffffff;
            background-color: #37226C;
            border-radius: 15px;
            display: flex;
            padding: 5px;
            justify-content: flex-start;
            align-items: center;
            border: 1px solid #234668;
            cursor: pointer;
            margin:3px;
            transition: 0.2s ease-in-out;
          }

          .checkone:hover {
            width: 100%;
            font-size: 16px;
            color: #ffffff;
            background-color:#A32926;
            border-radius: 15px;
            display: flex;
            padding: 5px;
            justify-content: flex-start;
            align-items: center;
            /* border: 1px solid #A32926; */
            cursor: pointer;
            margin:3px;
          }


          .correct {
            background-color: #2f922f;
          }

          .incorrect {
            background-color: #ff3333;
          }

          button:hover {
            background-color: #555e7d;
          }

          button:focus {
            outline: none;
          }

          button svg {
            margin-right: 5px;
          }

          .allimg{
            /* background-repeat: no-repeat;
            background-position:cover; */
            background-image: url("https://res.cloudinary.com/the-morgans-consortium/image/upload/v1664543646/Tmc%20institute/lPoOHG39XAlV4it61H_tp7d7m.gif");
          }
          @media (max-width: 600px) {

            .app {
                /* background-color: #252d4a; */
                /* width:450px;
                min-height: 200px; */
                height: min-content;
                border-radius: 15px;
                padding: 20px;
                /* box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75); */
                /* display:block;
                justify-content: space-evenly; */

              }

          }
          @media (max-width: 450px) {
            .app {
                /* background-color: #252d4a; */
                width:380px;
                min-height: 200px;
                height: min-content;
                border-radius: 15px;
                padding: 20px;
                /* box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75); */
                display:block;
                justify-content: space-evenly;
              }
          }

          @media (max-width: 382px) {
            .app {
                /* background-color: #252d4a; */
                width:360px;
                min-height: 200px;
                height: min-content;
                border-radius: 15px;
                padding: 20px;
                /* box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75); */
                display:block;
                justify-content: space-evenly;
              }
          }

          @media (max-width: 382px) {
            .app {
                /* background-color: #252d4a; */
                width:330px;
                min-height: 200px;
                height: min-content;
                border-radius: 15px;
                padding: 20px;
                /* box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75); */
                display:block;
                justify-content: space-evenly;
              }
          }


    </style>

@viteReactRefresh
  @vite([
    'resources/css/app.css',
    'resources/css/style.css',
    'resources/css/uikit.css',
    //'resource/css/quiz.css',
    'resource/css/icons.css',
    'resources/css/tailwind.min.css',
    'resources/js/components/new/Quiz.jsx',
    //'resources/js/jquery-3.6.0.min.js',
    //'resources/js/uikit.min.js',
  ])

  {{--  <link rel="stylesheet" href="{{ asset('css/style.css') }}"/>
  <link rel="stylesheet" href="{{ asset('css/icons.css') }}"/>
  <link rel="stylesheet" href="{{ asset('css/uikit.css') }}"/>
  <link rel="stylesheet" href="{{ asset('css/tailwind.min.css') }}"/>
  <link rel="shortcut icon" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg" type="image/x-icon"/>
  <link rel="stylesheet" href="{{ asset('css/quiz.css') }}" />
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">  --}}


  <link rel="shortcut icon" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg" type="image/x-icon"/>


</head>
<body>
<div id="quiz"></div>
</body>
<script type="text/javascript">
 {{--  var image = "{{ asset('images/placeholder.png') }}"  --}}
 var reminder = {{ Js::from($reminder??"") }}
 var quest = {{ Js::from($quest??"")}}
 var course_type = {{ Js::from($course_type??"") }}
 var num     = {{ Js::from($num??"") }}
 var username = @json(session()->get('userdetail')->fullname??"");
 var coursename = {{ Js::from($coursename??"") }}
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


