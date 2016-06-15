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

Route::get('/', function () {
    return view('index');
});
/*
Route::get('/geapp/public/api/v1/employees/{id?}', 'Employees@index');
Route::post('/geapp/public/api/v1/employees', 'Employees@store');
Route::post('/geapp/public/api/v1/employees/{id}', 'Employees@update');
Route::delete('/geapp/public/api/v1/employees/{id}', 'Employees@destroy');
*/

/*Route::get('/geapp/public/api/v1/seances', 'SeanceController@index');
Route::get('/geapp/public/api/v1/seances/commissions', 'SeanceController@getCommissionNom');*/


Route::get('/geapp/public/api/v1/commissions', 'CommissionController@index');
Route::get('/geapp/public/api/v1/commissions/{idCommission}/seances', 'SeanceController@getSeanceParCommission');

Route::get('/geapp/public/api/v1/commissions/seances', 'CommissionController@getCommissionWithSeances');

Route::post('/geapp/public/api/v1/seance/create', 'SeanceController@postSeance');
