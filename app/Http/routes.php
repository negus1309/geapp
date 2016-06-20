<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Route par défaut
Route::get('/', function () {
    return view('index');
});

// Accès à chaque commission comprenant les séances liées
Route::get('/geapp/public/api/v1/commissions/seances', 'CommissionController@getCommissionWithSeances');

// Création d'une séance vide
Route::post('/geapp/public/api/v1/seance/create', 'SeanceController@newSeance');

// Ajout d'information pour une séance
Route::put('/geapp/public/api/v1/seance/update', 'SeanceController@updateSeance');

// Accès à chaque commission comprenant les séances liées
Route::get('/geapp/public/api/v1/seance/{idSeance}', 'SeanceController@getSeance');
