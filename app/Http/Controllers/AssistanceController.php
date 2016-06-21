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
   * Display a listing of the resource.
   *
   * @return Response
   */
  public function storeAssistance(Request $request){

    $monAssistance = Assistance::firstOrCreate(['seance_id' => $request->seance_id, 'invite_id'=>$request->invite_id]);


    return response($monAssistance->toJson(), 201, array('Content-Type' => 'application/json'));



  }








}
