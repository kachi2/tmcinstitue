

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo e($toptitle); ?></title>


  <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
  <?php echo app('Illuminate\Foundation\Vite')([
    'resources/css/app.css',
    'resources/css/style.css',
    'resources/css/uikit.css',
    'resources/css/tailwind.min.css',
    'resources/js/components/new/Forgotten.jsx',
    'resources/js/jquery-3.6.0.min.js',
    'resources/js/uikit.min.js',
    //'resource/js/swap.js'
  ]); ?>
  <link rel="shortcut icon" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg" type="image/x-icon"/>


</head>
<body>
    <article class=''>
        <div class="preloader grid place-content-center">
            <div class="w-60">
                <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" alt="preloader" class="preloader__item" />
            </div>

          </div>
<div id="forgot">
</div>
    </article>
</body>
<script type="text/javascript">
    const preloader = document.querySelector(".preloader");
    window.addEventListener("load", function () {
        preloader.classList.add("hide-preloader");
      });

    var status_type = <?php echo e(Js::from($status??"")); ?>

      var code  = <?php echo e(Js::from($code??"")); ?>

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

<?php /**PATH C:\xampp\htdocs\dashboard\project\tmc_instutute_recent\resources\views/newdesign/forgotten.blade.php ENDPATH**/ ?>