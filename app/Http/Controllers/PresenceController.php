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
   * Display a listing of the resource.
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
      //return ;
      return response($maPresence, $status)
                  ->header('Content-Type', $value);




  }






}
