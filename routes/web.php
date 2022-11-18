<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\Frontends;
use App\Http\Controllers\MainConroller;
use App\Http\Controllers\newFrontend;
use App\Http\Controllers\ViewController;
use App\Http\Controllers\viewsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// TXT Values
// google-site-verification=Fm7_HuxCp7sueR1tqZVyMvaIxZAYbSqCOSrxxPbEW50

// v=spf1 +a +mx +ip4:162.240.222.188 +ip4:162.240.79.152 -all
// we others such as mx mail exchanger
// Route::get('/', function () {
//     return view('welcome');
// });
// https://tmcinstitute.com/question/google_login/423f372df26df2a74dd34ad31bdf66585188f18e
Route::get("/", [viewsController::class, 'newdashboardfun']);
// Route::get('/', [FrontendController::class, 'reactview'])->name('home');
// Route::get('/signup', [FrontendController::class, 'signup'])->middleware('guest');
Route::get('/signup', [FrontendController::class, 'signup'])->middleware('direction');
Route::get('/auth/google/redirect', [AuthController::class, 'googleredirect']);
Route::get('/auth/google/callback', [AuthController::class, 'googlecallback']);
Route::get('/authenticate', [AuthController::class, 'authenticate']);
Route::get('/auth/callback', [AuthController::class, 'authcallback']);
Route::get('/Logout', [AuthController::class, 'Logout'])->name('Logout');
Route::get('/lognot', [AuthController::class, 'lognot']);
Route::post('/register', [AuthController::class, 'Register']);
Route::get('/login', [FrontendController::class, 'login'])->middleware('guest');
Route::post('/loginusers', [AuthController::class, 'loginusers']);
Route::get('/activationmail',[FrontendController::class, 'activationmail']);
Route::get('/email/{data}', [ViewController::class, 'verifiedemail']);
Route::get('/company_email/{data}', [ViewController::class, 'company_email']);
Route::get('/Inputdata', [FrontendController::class, 'input']);
Route::post('/insertdata', [MainConroller::class, 'insertdata']);
Route::get("/question/{user_login}/{verification_code}", [ViewController::class, 'questfun'])->name('question');
Route::post("/oathregister", [AuthController::class,'oathregister']);
Route::get("/companyregister", [FrontendController::class, 'Adminreg']);
Route::post("/companyregister", [AuthController::class, 'companyregister']);
Route::get("/companylogin", [FrontendController::class, "companylogin"]);
Route::post("/companyloginusers", [AuthController::class,"companyloginusers"]);
Route::post("/setcook", [MainConroller::class, 'setcook']);
Route::get('/courses/{code}/{email}', [ViewController::class, 'giftedfun']);
Route::get('/privacy', [FrontendController::class, 'privacy']);
Route::post('/insertothm', [MainConroller::class, 'insertothm']);
Route::get('/insertothmcourse', [Frontends::class, 'insertothm']);
Route::webhooks('webhook-receiving-url');
//new frontend
Route::get('/studyabroad', [Frontends::class, 'studyabroad']);
Route::post('/studyabroad', [MainConroller::class, 'studyabroad']);
Route::get("/terms", [Frontends::class, 'conditions']);
Route::get('/result/admin/{code}/{coursename}', [Frontends::class, 'result']);
Route::patch('approvestatus', [MainConroller::class, 'approvestatus']);
Route::get("/adminlogin", [Frontends::class, 'adminlog'])->middleware('admin');
Route::post('/loginadmin', [AuthController::class, 'loginadmin']);
Route::get("/listcourses", [viewsController::class, 'listcoursesfun']);
Route::post('/alphabet', [MainConroller::class, 'alphabet']);
Route::post("/arrangment", [MainConroller::class, 'arrangment']);
Route::post("/coursesdata", [MainConroller::class, "coursesdata"]);
Route::post('/categories', [MainConroller::class, 'categories']);
Route::post('/searchcourse', [MainConroller::class, 'searchcourse']);
Route::get('/othmcourses', [Frontends::class, 'othmcourses']);
Route::post('/alphabetothm',[MainConroller::class, 'alphabetothm']);
Route::post('/categoriesothm', [MainConroller::class, 'categoriesothm']);
Route::post('/arrangmentothm', [MainConroller::class, 'arrangmentothm']);
Route::post('/searchcourseothm', [MainConroller::class, 'searchcourseothm']);
Route::post('/othmcheck', [MainConroller::class, 'othmcheck']);
Route::get("/courseinfo/{word}/{id}", [viewsController::class, 'courseinfofun']);


Route::get('/allcurrency', [Frontends::class, 'allcurrency']);
Route::get('/about-us', [Frontends::class, 'about']);
Route::get('/forgotten/{status}', [viewsController::class, 'forgottenfun']);
Route::post('/fogotten', [MainConroller::class, 'fogotten']);
Route::get('/reset/{code}/{status}', [Frontends::class, 'reset']);
Route::post('/reset', [MainConroller::class, 'reset']);
Route::group(['middleware' => 'auth'], function () {
// Route::get('/courses', [ViewController::class, 'dashfunction']);
// Route::get('/coursedetails/{num}', [ViewController::class, 'courseinfo']);
Route::get('/paystack_verify/{ref}', [ViewController::class, 'paystack_verify']);
Route::post('/purchasecourse', [MainConroller::class, 'userscoursepurcase']);
Route::post('/userwatch', [MainConroller::class, 'userwatch']);
Route::get('/uservideowatch/{course_id}/{video_id}', [ViewController::class, 'uservideowatch']);
Route::post("/addcart", [MainConroller::class, 'AddCart']);
// Route::get("/cart", [ViewController::class, 'cartfunction']);
Route::post("/muitplepayment", [MainConroller::class, 'muitplepayment']);
Route::delete("/deletestorage", [MainConroller::class, 'deletestorage']);
Route::get("/main", [FrontendController::class, 'Main']);
Route::get("/profile", [FrontendController::class, 'Profile']);
Route::post("/coursesdata", [MainConroller::class, "coursesdata"]);
Route::get("/contact", [FrontendController::class, "contact"]);
Route::get("/residential", [FrontendController::class, "residential"]);
Route::post("/additional_info", [MainConroller::class, "Additional_info"]);
Route::get("/invoice", [ViewController::class, "invoicefun"]);
Route::post("/sendinvoice",[MainConroller::class, "invoice"]);
Route::post("/coursecartories",[MainConroller::class, "coursecartories"]);
 Route::get("/snatika", [FrontendController::class, "snatika"]);
 Route::post("/multiuserpurchase", [MainConroller::class, "multiuserpurchase"]);
 Route::get("/mycourses", [ViewController::class, 'mycoursesfun']);
 Route::get("/aboutcourse/{id}", [FrontendController::class, 'aboutcourse']);
 Route::get("/pdftest", [FrontendController::class, "pdftest"]);
 Route::post("/usercheckcourse", [ViewController::class, "usercheckcourse"]);

 //new frontend design
 Route::get("/newdashboard", [viewsController::class, 'newdashboardfun'])->name('newdashboard');

 Route::get("/shoppingcart", [Frontends::class, 'shoppingcart']);
 Route::get("/coursevideos/{word}/{num}", [viewsController::class, 'coursevideofun']);
//  Route::get("/listcourses", [viewsController::class, 'listcoursesfun']);
//  Route::post("/arrangment", [MainConroller::class, 'arrangment']);
//  Route::post('/categories', [MainConroller::class, 'categories']);
//  Route::post('/searchcourse', [MainConroller::class, 'searchcourse']);

// Route::get('/othmcourses', [Frontends::class, 'othmcourses']);
//  usercoursesfun
 Route::post('/usercoursesinfo', [MainConroller::class, 'usercoursesinfo']);
//  Route::post('/alphabet', [MainConroller::class, 'alphabet']);
 Route::post('/percentcompleted', [MainConroller::class, 'percentcompleted']);
//  Route::post('/alphabetothm',[MainConroller::class, 'alphabetothm']);
//  Route::post('/categoriesothm', [MainConroller::class, 'categoriesothm']);
//  Route::post('/arrangmentothm', [MainConroller::class, 'arrangmentothm']);
//  Route::post('/searchcourseothm', [MainConroller::class, 'searchcourseothm']);
Route::get('/usercourses', [viewsController::class, 'usercoursesfun']);
 Route::post('/downloadcetificate', [MainConroller::class, 'downloadcetificate']);
 Route::post('/questremainer', [MainConroller::class, 'questremainer']);
 Route::get('/quiz/{course_type}/{id}/{num}', [Frontends::class, 'quiz']);
 Route::get('/downloadresult/{num}/{course_type}', [MainConroller::class, 'downloadresult']);
 Route::get('/Admin', [Frontends::class, 'adminpage']);
 Route::post('/Approved', [MainConroller::class, 'Approved']);
 Route::post('/unApproved',[MainConroller::class, 'unApproved']);
//  Route::post('/othmcheck', [MainConroller::class, 'othmcheck']);

Route::get("/adminrate", [viewsController::class, 'adminratefun']);
Route::post('/currencyaddrate', [MainConroller::class, 'currencyaddrate']);
Route::patch('/editcurrency', [MainConroller::class, 'editcurrency']);
Route::post('/deletecurency', [MainConroller::class, 'deletecurency']);

});


//new frontend design





// Route::get('/auth/google/redirectlogin', [AuthController::class, 'googleredirectlogin']);
// Route::get('/auth/google/login', [AuthController::class, 'googlelogin']);

