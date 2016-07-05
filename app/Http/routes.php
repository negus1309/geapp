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

Route::post('/geapp/public/api/v1/seance/save','SeanceController@createOrUpdateSeance');





// Accès à chaque commission comprenant les séances liées
Route::get('/geapp/public/api/v1/commissions/seances', 'CommissionController@getCommissionWithSeances');

// Accès à chaque commission comprenant la dernière séance en date
Route::get('/geapp/public/api/v1/commissions/seance/last', 'CommissionController@getCommissionWithLastSeance');

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

Route::get('/geapp/public/api/v1/commissions/{commission_id}/deputes', 'DeputeController@getDeputeForSeance');

// Accès aux rubriques d'une séance (pv)
Route::get('/geapp/public/api/v1/seance/{seance_id}/rubriques', 'RubriqueController@getRubriques');

// Ajout d'une rubrique
Route::post('/geapp/public/api/v1/rubrique/create', 'RubriqueController@storeRubrique');
// Suppression d'une rubrique
Route::delete('/geapp/public/api/v1/seance/{seance_id}/rubrique/{rubrique_id}/delete', 'RubriqueController@deleteRubrique');
/*
Route::any('{path?}', function()
{
    return view("index");
})->where("path", ".+");
*/

Route::post('/geapp/public/api/v1/file', 'FileUploadController@storeFile');
