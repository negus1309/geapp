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
   * Display a listing of the resource.
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
      //return ;
      return response($monAbsence, $status)
                  ->header('Content-Type', $value);




  }

  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  public function deleteAbsenceFromThisSeance(Request $request){
    //$maPresence = new Presence;
    $idSeance = $request->seance_id;

    $mesAbsences = Absence::where('seance_id', $idSeance)->delete();


    return "ok dele";


  }





}
