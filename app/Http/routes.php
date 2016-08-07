<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
*/

  // Route par défaut (accueil)
  Route::get('/', function () {
      return view('index');
  });

  /*
  | 01 ) Seance Controller routes (relationnel)
  |--------------------------------------------------------------------------
  */

    // Sauvegarde et met à jour les informations générales d'une Seance
    Route::post('/geapp/public/api/v1/seance/save','SeanceController@createOrUpdateSeance');

  /*
  | 02 ) Pv Controller routes (JSON object store)
  |--------------------------------------------------------------------------
  */

    // Sauvegarde et met à jour le PV sous forme d'objet JSON
    Route::post('/geapp/public/api/v1/pv/save','PvController@createOrUpdatePv');

    // Récupération d'un PV sous forme d'objet JSON
    Route::get('/geapp/public/api/v1/pv','PvController@getAllPv');

  /*
  | 03 ) Invite Controller routes
  |--------------------------------------------------------------------------
  */
    // Ajout d'un Invité
    Route::post('/geapp/public/api/v1/invite/create', 'InviteController@storeInvite');

  /*
  | 04 ) Assistance Controller routes
  |--------------------------------------------------------------------------
  */
    // Ajout d'un assistance
    Route::post('/geapp/public/api/v1/assistance/create', 'AssistanceController@storeAssistance');

  /*
  | 05 ) Rubrique Controller routes
  |--------------------------------------------------------------------------
  */
    // Suppression de toutes les Rubriques pour une Seance
    Route::delete('/geapp/public/api/v1/rubriques/delete', 'RubriqueController@deleteRubriquesFromThisSeance');

    // Ajout d'une rubrique pour une Séance
    Route::post('/geapp/public/api/v1/rubrique/create', 'RubriqueController@storeRubrique');

  /*
  | 06 ) Presence Controller routes
  |--------------------------------------------------------------------------
  */
    // Ajout d'une présence pour l'heure d'une Seance
    Route::post('/geapp/public/api/v1/presence/create','PresenceController@storePresence');

    // Suppression de toutes les absence pour une Seance
    Route::delete('/geapp/public/api/v1/presences/delete','PresenceController@deletePresencesFromThisSeance');

  /*
  | 07 ) Absence Controller routes
  |--------------------------------------------------------------------------
  */
    //Ajout absence
    Route::post('/geapp/public/api/v1/absence/create','AbsenceController@storeAbsence');

    //Supprimer toutes absence pour seance
    Route::delete('/geapp/public/api/v1/absences/delete','AbsenceController@deleteAbsencesFromThisSeance');


  /*
  | 08 ) Audio Controller routes
  |--------------------------------------------------------------------------
  */
    // Sauvegarde d'un fichier audio pour une Seance
    Route::post('geapp/public/api/v1/audio/upload','AudioController@audioUpload');

    // Accès au fichier audio d'une Seance
    Route::get('geapp/public/api/v1/audio/file/{token}', 'AudioController@getAudio');
