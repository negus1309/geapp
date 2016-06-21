<?php

namespace App\Http\Controllers;

use App\Models\Seance;
use App\Models\Invite;
use App\Models\Assistance;
use App\Models\Commission;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;


class InviteController extends Controller {

  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  public function storeInvite(Request $request){

      //$monInvite = new Invite;
      $monInvite = Invite::firstOrCreate(['nom' => $request->nom, 'prenom'=>$request->prenom, 'titre'=>$request->titre]);


      return response($monInvite->toJson(), 201, array('Content-Type' => 'application/json'));



  }









}
