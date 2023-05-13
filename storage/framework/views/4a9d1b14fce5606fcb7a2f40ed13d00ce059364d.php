<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo e($toptitle); ?></title>
    <!-- icons
        ================================================== -->
        

        <!-- CSS
        ================================================== -->
  <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
  <?php echo app('Illuminate\Foundation\Vite')([
    'resources/css/app.css',
    'resources/css/style.css',
    'resources/css/uikit.css',
    'resources/css/tailwind.min.css',
    'resources/js/components/new/Course-info.jsx',
    'resources/js/jquery-3.6.0.min.js',
    'resources/js/uikit.min.js',
  ]); ?>
  <link rel="shortcut icon" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg" type="image/x-icon"/>


</head>
<body>
<div id="courseinfo">

</div>
</body>
<script type="text/javascript">
    var userpic = <?php echo e(Js::from(auth()->user()->picture??"")); ?>;
    var usersemail = <?php echo e(Js::from(auth()->user()->email??"")); ?>

    var username = <?php echo json_encode(session()->get('userdetail')->fullname??"", 15, 512) ?>;

    var single =  <?php echo \Illuminate\Support\Js::from($single??"")->toHtml() ?>;
    var video = <?php echo e(Js::from($video??"")); ?>

    var word = <?php echo e(Js::from($word??"")); ?>

    var usercourse = <?php echo e(Js::from($usercourse??"")); ?>

    var allcourse = <?php echo e(Js::from($allcourse??"")); ?>

    var currencysymbol = <?php echo e(Js::from($currencysymbol??"")); ?>

    var currencyex = <?php echo e(Js::from($currencyex??"")); ?>

    var poundton  = <?php echo e(Js::from($poundton??"")); ?>

    var othersmoneys = <?php echo e(Js::from($othermoney??"")); ?>;
    var additional    = <?php echo e(Js::from( $additional??"")); ?>;
    var additionalpic = <?php echo e(JS::from($additionalpic??"")); ?>;
    var cart = <?php echo e(Js::from(json_decode($cart->usercartdetails??''))); ?>;

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
<?php /**PATH C:\xampp\htdocs\dashboard\project\tmc_instutute_recent\resources\views/newdesign/courseinfo.blade.php ENDPATH**/ ?>