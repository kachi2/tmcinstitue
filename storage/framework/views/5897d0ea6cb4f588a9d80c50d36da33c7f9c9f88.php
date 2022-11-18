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
        
 
  <link rel="stylesheet" href="<?php echo e(asset('css/style.css')); ?>"/>
  
  <link rel="stylesheet" href="<?php echo e(asset('css/uikit.css')); ?>"/>
  <link rel="stylesheet" href="<?php echo e(asset('css/tailwind.min.css')); ?>"/>
  
  <link href="<?php echo e(asset('css/app.css')); ?>" rel="stylesheet">
  <link rel="shortcut icon" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg" type="image/x-icon"/>


</head>
<body>

<?php echo $__env->yieldContent('content'); ?>


</body>

<script type="text/javascript">
 var image = "<?php echo e(asset('images/placeholder.png')); ?>"
 var userpic = <?php echo e(Js::from(auth()->user()->picture??"")); ?>;

 var usersemail = <?php echo e(Js::from(auth()->user()->email??"")); ?>

 var username = <?php echo json_encode(session()->get('userdetail')->fullname??"", 15, 512) ?>;
 var featured  = <?php echo e(Js::from($featured??"")); ?>;
 var popular = <?php echo e(Js::from($popular??"")); ?>

 var recent = <?php echo e(Js::from($recent??"")); ?>

 var cart = <?php echo e(Js::from(json_decode($cart->usercartdetails??''))); ?>;
var allcourse = <?php echo e(Js::from($allcourse??"")); ?>

var single =  <?php echo \Illuminate\Support\Js::from($single??"")->toHtml() ?>;
var video = <?php echo e(Js::from($video??"")); ?>

var usercourse = <?php echo e(Js::from($usercourse??"")); ?>

var fetchdata   = <?php echo e(Js::from($fetchdata??"")); ?>

var coursepurshase = <?php echo e(Js::from($coursepurshase??"")); ?>

var unique  = <?php echo e(Js::from($unihead??"")); ?>;
var coursesdata = <?php echo e(Js::from($coursesdata??"")); ?>

var purchasedcourse = <?php echo e(Js::from($purchasedcourse??"")); ?>

var currencyex = <?php echo e(Js::from($currencyex??"")); ?>

var currencysymbol = <?php echo e(Js::from($currencysymbol??"")); ?>


var word = <?php echo e(Js::from($word??"")); ?>

var todollar = <?php echo e(Js::from($poundtodollar??"")); ?>

var poundton  = <?php echo e(Js::from($poundton??"")); ?>

var othersmoneys = <?php echo e(Js::from($othermoney??"")); ?>;
var additional    = <?php echo e(Js::from( $additional??"")); ?>

var admin = <?php echo e(Js::from($admin??"")); ?>

 var captchaimg = <?php echo e(Js::from(captcha_src())); ?>

var nextpage = <?php echo e(JS::from($nextpage??"")); ?>

var additionalpic = <?php echo e(JS::from($additionalpic??"")); ?>

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
<script src="<?php echo e(mix('js/app.js')); ?>"></script>
<script src="<?php echo e(asset('js/jquery-3.6.0.min.js')); ?>"></script>
<script src="<?php echo e(asset('js/uikit.min.js')); ?>"></script>
</html>
<?php /**PATH C:\xampp\htdocs\dashboard\project\tmc_instutute_recent\resources\views/newdesign/layout/first.blade.php ENDPATH**/ ?>