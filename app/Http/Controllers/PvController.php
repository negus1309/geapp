<?php

namespace App\Http\Controllers;

use App\Models\Pv;
use App\Models\Commission;
use App\Models\Assistance;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;


class PvController extends Controller {

    // v2
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function createOrUpdatePv(Request $request){


      $seanceToken = $request->token;
      $pvToStore = $request->pv;

      $monPv = Pv::where('token', $seanceToken)->first();

      if($monPv){

        $monPv->pv = $request->pv;
        $monPv->save();
        $monPvToSend = $monPv;

      }else{
        $monNouveauPv = new Pv;
        $monNouveauPv->token = $request->token;
        $monNouveauPv->pv = $request->pv;
        $monNouveauPv->save();
        $monPvToSend = $monNouveauPv;


      }
      $status = 201;
      $value = "application/json";
      return response($monPvToSend, $status)
                  ->header('Content-Type', $value);







    }























}
