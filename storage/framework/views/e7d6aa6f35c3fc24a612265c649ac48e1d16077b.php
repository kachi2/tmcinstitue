<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo e($toptitle?$toptitle:'Document'); ?></title>
    <link href="<?php echo e(asset('css/app.css')); ?>" rel="stylesheet">
    <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css"/>
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css">
    

    <link rel="shortcut icon" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg" type="image/x-icon"/>


    <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
    <?php echo app('Illuminate\Foundation\Vite')([
      'resources/css/style.css',
      'resources/css/icons.css',
      'resources/css/tailwind.min.css',
      'resources/js/components/Profile.jsx',
      'resources/js/jquery-3.6.0.min.js',
      'resources/js/uikit.min.js',
      'resources/js/swap.js',
    ]); ?>

</head>
<body>
    <article class=''>
        <div class="preloader grid place-content-center" >
            <div class="w-60">
                <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" alt="preloader" class="preloader__item" />
            </div>

          </div>
<article id="profile" class="bg-white"></article>
</article>
</body>
<script>
    var userpic = <?php echo e(Js::from(auth()->user()->picture??"")); ?>;
    var usersemail = <?php echo e(Js::from(auth()->user()->email??"")); ?>

    var username = <?php echo json_encode(session()->get('userdetail')->fullname??"", 15, 512) ?>;
    var additional = <?php echo e(Js::from(json_decode($additional??""))); ?>

    var email = <?php echo \Illuminate\Support\Js::from(auth()->user()->email??"")->toHtml() ?>;

</script>
<script type="text/javascript">
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



<?php /**PATH C:\xampp\htdocs\tmc_instutute_recent\resources\views/profile.blade.php ENDPATH**/ ?>