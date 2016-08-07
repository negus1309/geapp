<?php

namespace App\Http\Controllers;

use App\Models\Seance;
use App\Models\Commission;
use App\Models\Assistance;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;


class AssistanceController extends Controller {

  /**
   * Création d'une Assistance pour une Seance
   *
   * @return Response
   */
  public function storeAssistance(Request $request){

    $monAssistance = Assistance::firstOrCreate(['seance_id' => $request->seance_id, 'invite_id'=>$request->invite_id]);

    return response($monAssistance->toJson(), 201, array('Content-Type' => 'application/json'));

  }


  /**
   * Suppression d'une Assistance pour une Seance
   *
   * @return Response
   */
  public function deleteAssistance(Request $request){

    $idSeance = $request->seance_id;
    $idInvite = $request->invite_id;

    $test = DB::table('assistances')
      ->where('seance_id','=',$idSeance)
      ->where('invite_id','=',$idInvite)
      ->get();

      if($test){
        DB::table('assistances')
          ->where('seance_id','=',$idSeance)
          ->where('invite_id','=',$idInvite)
          ->delete();
          return $test;
      }
  }

}
