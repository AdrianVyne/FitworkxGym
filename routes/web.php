<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/testdb', function () {
    try {
        $results = DB::select('SHOW TABLES');
        print_r($results);
    } catch (\Exception $e) {
        die("Could not connect to the database. " . $e->getMessage());
    }
});