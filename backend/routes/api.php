<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NiveauController;
use App\Http\Controllers\ClasseController;
use App\Http\Controllers\InscriptionController;

// API Routes
Route::apiResource('niveaux', NiveauController::class);

Route::apiResource('classes', ClasseController::class);

Route::apiResource('inscriptions', InscriptionController::class);