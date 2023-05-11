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
    'resources/js/components/new/Contact.jsx',
    'resources/js/jquery-3.6.0.min.js',
    'resources/js/uikit.min.js',
  ]); ?>
  <link rel="shortcut icon" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg" type="image/x-icon"/>


</head>
<body>
<div id='contacttmc'></div>
</body>
</html>

<?php /**PATH C:\xampp\htdocs\dashboard\project\tmc_instutute_recent\resources\views/newdesign/contact.blade.php ENDPATH**/ ?>