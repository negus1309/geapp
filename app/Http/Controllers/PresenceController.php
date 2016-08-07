<?php

namespace App\Http\Controllers;

use App\Models\Seance;
use App\Models\Presence;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;


class PresenceController extends Controller {



  /**
   * Création d'une Presence
   *
   * @return Response
   */
  public function storePresence(Request $request){
    $maPresence = new Presence;
    $maPresence->seance_id = $request->seance_id;
    $maPresence->depute_id = $request->depute_id;
    $maPresence->heure = $request->heure;

    $maPresence->save();
    $status = 201;
    $value = "application/json";

      return response($maPresence, $status)
                  ->header('Content-Type', $value);


  }

  /**
   * Suppression de toutes les Presence pour une Seance
   *
   * @return Response
   */
  public function deletePresencesFromThisSeance(Request $request){

    $idSeance = $request->seance_id;

    $mesPresences = Presence::where('seance_id', $idSeance)->delete();

    return "Presences supprimées";


  }


}
