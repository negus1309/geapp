<?php

namespace App\Http\Controllers;

use App\Models\Seance;
use App\Models\Invite;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;


class DeputeController extends Controller {

  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  public function getDeputeForSeance(Request $request){
    $commission_id = $request->commission_id;

    $deputes = DB::table('deputes')
            ->join('attributions', 'attributions.depute_id', '=', 'deputes.id')
            ->select('deputes.*')
            ->where('attributions.commission_id', $commission_id)
            ->get();

      return $deputes;



  }









}
