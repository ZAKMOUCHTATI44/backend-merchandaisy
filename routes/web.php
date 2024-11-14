<?php

use App\Http\Controllers\Admin\BlogController as AdminBlogController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CalculatorController;
use App\Http\Controllers\CheckOutContorller;
use App\Http\Controllers\CodePromoController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\NewletterController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShopCartController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VisitorController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
// Front Office
Route::get('/',function() {
    return redirect("/dashboard");
});
// Menu Route 
// Route::resource('/menu', MenuController::class);
// // Filter For Menu
// Route::get('/meun-filter', [MenuController::class, 'filter']);
// // À propos de nous
// Route::get('/about-us', function () {
//     return Inertia::render('About');
// });
// // For Contact Page
Route::resource('/contact', ContactController::class);
// // Faq Page
// Route::resource('faq', FaqController::class);
// // ThankYou After Checkout
// Route::get('/thankyou', function () {
//     return Inertia::render('Thankyou');
// });
// // For Blog
// Route::resource('/blog', BlogController::class)->only('show', 'index');
// // Calculator
// Route::resource('/calculator', CalculatorController::class)->only('store', 'index');
// // Check the code promo is valid
// Route::get('/checkpromocode/{pormoCode}', [CodePromoController::class, 'pormoCode']);

// // Page Checkout
// Route::get('/checkout', [CheckOutContorller::class, 'create']);
// Route::post('/checkout', [CheckOutContorller::class, 'store']);

Route::resource('/visitor', VisitorController::class);

// Route::post('/news-letter', [NewletterController::class, "store"]);

// Route::post('/shop_carts', [ShopCartController::class, 'store']);

require __DIR__ . '/auth.php';


// Admin Route
Route::middleware(['auth', 'is_admin'])->group(function () {
    // For Dashboard And Statistique
    Route::resource('/dashboard', DashboardController::class);

    // For Blog CRUD
    Route::resource("/blogs", AdminBlogController::class);
    Route::get('/blog-datatable', [AdminBlogController::class, 'datatable']);

    // For Users
    Route::resource('/users', UserController::class);
    Route::get('/users-datatable', [UserController::class, 'datatable']);

    // Product
    Route::resource('/products', ProductController::class);
    Route::get('/datatableproducts', [ProductController::class, 'datatable']);

    // For Orders
    Route::get('/commandes', [CheckOutContorller::class, 'index']);
    Route::get('/commandes/{order}', [OrderController::class, 'show']);
    Route::put('/commandes/{order}', [OrderController::class, 'update']);
    Route::get('/datatableCommandes', [CheckOutContorller::class, 'datatable']);

    // for Contact Page
    Route::get('/contactDatatable', [ContactController::class, 'datatable']);

    // for Code Promo
    Route::resource("/promocode", CodePromoController::class)->except('show');

    Route::get('/codepromodatatable', [CodePromoController::class, 'datatable']);
});
