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

// Accès aux informations d'une séance en fonction de son id
Route::get('/geapp/public/api/v1/seance/{idSeance}', 'SeanceController@getSeance');

// Suppression d'une séance en fonction de son id
Route::delete('/geapp/public/api/v1/seance/{idSeance}/delete', 'SeanceController@deleteSeance');

// Ajout d'un invité
Route::post('/geapp/public/api/v1/invite/create', 'InviteController@storeInvite');

// Ajout d'un assistance
Route::post('/geapp/public/api/v1/assistance/create', 'AssistanceController@storeAssistance');

// Accès aux invite d'une séance
Route::get('/geapp/public/api/v1/seance/{seance_id}/invite', 'InviteController@getInvitePourSeance');

Route::delete('/geapp/public/api/v1/seance/{seance_id}/invite/{invite_id}/delete','AssistanceController@deleteAssistance');
