<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('user', function (Request $request) {
        return $request->user();
    });

    Route::prefix('post')->group(function () {
        Route::get('/', 'Post\IndexController');
        Route::post('/', 'Post\StoreController');
        Route::get('/{id}/edit', 'Post\EditController');
        Route::patch('/{id}', 'Post\UpdateController');
        Route::delete('/{id}', 'Post\DeleteController');
    });
});

Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');
Route::post('register', 'Auth\RegisterController@register');
Route::post('password/forgot', 'Auth\ForgotPasswordController@sendResetLinkEmail');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');
