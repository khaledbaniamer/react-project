<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\UserController;
use App\Models\Contact;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
Route::get('ourbookings',[BookController::class , 'getBooks']);

Route::get('users/{id}',[UserController::class , 'getInfo']);
Route::post('update/{id}',[UserController::class , 'update']);
Route::get('books/{id}',[BookController::class , 'getInfoBook']);

Route::get('apirooms',[RoomController::class , 'RoomAPI']);
Route::post('addbook',[BookController::class , 'addBook']);
Route::post('addcomment',[CommentController::class , 'addComment']);
Route::get('contact',[ContactController::class , 'ContactAPI']);

//login+register
Route::post('register', [UserController::class, 'registerAPI']);
Route::post('login', [UserController::class, 'loginAPI']);



Route::get('getuser/{id}',[UserController::class , 'getUser']);

Route::get('getsingle/{id}' ,[RoomController::class ,'single_room' ]);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('apicomment/{id}',[CommentController::class , 'CommentAPI']);
Route::post('addComment',[CommentController::class , 'addComment']);
