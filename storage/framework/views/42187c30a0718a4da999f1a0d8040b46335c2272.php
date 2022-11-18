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

    <link rel="stylesheet" href="<?php echo e(asset('css/style.css')); ?>"/>
    <link rel="stylesheet" href="<?php echo e(asset('css/icons.css')); ?>"/>
    <link rel="stylesheet" href="<?php echo e(asset('css/uikit.css')); ?>"/>
      <link rel="stylesheet" href="<?php echo e(asset('css/tailwind.min.css')); ?>"/>
    <link rel="stylesheet" href="<?php echo e(asset('css/icons.css')); ?>}}" />

</head>
<body>
    <article class=''>
        <div class="preloader grid place-content-center" >
            <div class="w-60">
                <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" alt="preloader" class="preloader__item" />
            </div>

          </div>
<?php echo $__env->yieldContent('content'); ?>
    </article>
</body>
<script>
var layout = "<?php echo e(asset('image/Layer7.svg')); ?>";
var lay = "<?php echo e(asset('image/Layer12.svg')); ?>";
var image = "<?php echo e(asset('image/Images.png')); ?>";
var left = "<?php echo e(asset('image/Left.png')); ?>";
var next = "<?php echo e(asset('images/bg.png')); ?>";
var message = " <?php echo e(session()->get('message')??""); ?> ";
var  token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
var hype =    "<?php echo e(Request::url()); ?>";
var cart = <?php echo e(Js::from(json_decode($cart->usercartdetails??''))); ?>

var money = <?php echo \Illuminate\Support\Js::from($money??"")->toHtml() ?>;
var email = <?php echo \Illuminate\Support\Js::from(auth()->user()->email??"")->toHtml() ?>;
var picture = "<?php echo e(asset('image/TMC-Institute-Logo2 1 (1).png')); ?>";
var userimage = <?php echo \Illuminate\Support\Js::from(auth()->user()->picture??"")->toHtml() ?>;
var username =  <?php echo e(Js::from(auth()->user()->fullname??"")); ?>

var usersemail = <?php echo e(Js::from(auth()->user()->email??"")); ?>

var userpic = <?php echo e(Js::from(auth()->user()->picture??"")); ?>;
var Cris = "<?php echo e(asset('image/Cris 1.png')); ?>";
var Dusig = "<?php echo e(asset('image/Dusig 1.png')); ?>";
var Exra  = "<?php echo e(asset('image/Exra 1.png')); ?>";
var J0ne = "<?php echo e(asset('image/J 1.png')); ?>"
var countries = <?php echo \Illuminate\Support\Js::from($countries??"")->toHtml() ?>;
var additional = <?php echo e(Js::from(json_decode($additional??""))); ?>

var gifted_email = <?php echo e(JS::from($gifted_email??"")); ?>

var code  = <?php echo e(JS::from($code??"")); ?>

var personname = <?php echo e(JS::from($fullname??"")); ?>

var captchaimg = <?php echo e(Js::from(captcha_src())); ?>

var userinfoma = <?php echo e(Js::from($userinfoma??"")); ?>


</script>
<script src="<?php echo e(mix('js/app.js')); ?>"></script>
<script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
<script src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
<script src="<?php echo e(asset('js/swap.js')); ?>"></script>

<script src="<?php echo e(asset('js/uikit.js')); ?>"></script>
<script src="<?php echo e(asset('js/bootstrap-select.min.js')); ?>"></script>
 <script src="<?php echo e(asset('js/tippy.all.min.js')); ?>"></script>
 <script src="<?php echo e(asset('js/custom.js')); ?>"></script>
<script src="<?php echo e(asset('js/simplebar.js')); ?>"></script>
 <script src="<?php echo e(asset('js/jquery-3.6.0.min.js')); ?>"></script>
<script src="<?php echo e(asset('js/uikit.min.js')); ?>"></script>
<script src="<?php echo e(asset('js/ionicons.js')); ?>"></script>
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
<?php /**PATH C:\xampp\htdocs\dashboard\project\tmc_instutute_recent\resources\views/layout/seclanding.blade.php ENDPATH**/ ?>