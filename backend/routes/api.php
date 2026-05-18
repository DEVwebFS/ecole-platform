<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/me', [AuthController::class, 'me']);

    Route::post('/logout', [AuthController::class, 'logout']);

});
Route::middleware(['auth:sanctum', 'role:admin'])

    ->prefix('admin')

    ->group(function () {

        Route::get('/dashboard', function () {

            return response()->json([

                'message' => 'Bienvenue Admin'

            ]);

        });

});
Route::middleware(['auth:sanctum', 'role:formateur'])

    ->prefix('formateur')

    ->group(function () {

        Route::get('/dashboard', function () {

            return response()->json([

                'message' => 'Bienvenue Formateur'

            ]);

        });

});
Route::middleware(['auth:sanctum', 'role:parent'])

    ->prefix('parent')

    ->group(function () {

        Route::get('/dashboard', function () {

            return response()->json([

                'message' => 'Bienvenue Parent'

            ]);

        });

});