<?php

use App\Http\Controllers\UtilisateurController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/utilisateurs',[UtilisateurController::class, 'index']);
Route::post('/utilisateur/signUp',[UtilisateurController::class, 'store']);
Route::post('/utilisateur/login',[UtilisateurController::class, 'login']);
Route::delete('/utilisateur/delete/{id}',[UtilisateurController::class, 'delete']);
Route::put('/utilisateur/update/{id}',[UtilisateurController::class, 'update']);
Route::get('/utilisateur/detail/{id}',[UtilisateurController::class, 'detail']);