<?php

/**
 * ルーティング例
 * Route::prefix("test")
 * ->as("test.")
 * ->controller(\App\Http\Controllers\TestController::class)->group(function () {
 *     Route::get("/", "index")->name("index");
 *     Route::get("create", "create")->name("create");
 * });
 */

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::controller(HomeController::class)->group(function () {
        Route::get('/', 'index')->name('home');
    });
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::prefix("product")
        ->as("product.")
        ->controller(\App\Http\Controllers\ProductController::class)->group(function () {
            Route::get("/", "index")->name("index");
            Route::get("create", "create")->name("create");
        });
});

require __DIR__ . '/auth.php';
