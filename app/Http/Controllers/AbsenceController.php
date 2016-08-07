<?php

namespace App\Http\Controllers;

use App\Models\Seance;
use App\Models\Absence;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;


class AbsenceController extends Controller {


  /**
   * Sauvegarde d'une Absence pour l'heure d'une Seance
   *
   * @return Response
   */
  public function storeAbsence(Request $request){
    $monAbsence = new Absence;
    $monAbsence->seance_id = $request->seance_id;
    $monAbsence->depute_id = $request->depute_id;
    $monAbsence->heure = $request->heure;

    $monAbsence->save();
    $status = 201;
    $value = "application/json";
      return response($monAbsence, $status)
                  ->header('Content-Type', $value);

  }

  /**
   * Suppression toutes les Absences pour une Seance
   *
   * @return Response
   */
  public function deleteAbsencesFromThisSeance(Request $request){

    $idSeance = $request->seance_id;

    $mesAbsences = Absence::where('seance_id', $idSeance)->delete();

    return "Absences supprimées";


  }


}
