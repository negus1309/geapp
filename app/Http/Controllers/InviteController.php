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
   * Création d'un Invite
   *
   * @return Response
   */
  public function storeInvite(Request $request){

      $monInvite = Invite::firstOrCreate(['nom' => $request->nom, 'prenom'=>$request->prenom, 'titre'=>$request->titre]);

      return response($monInvite->toJson(), 201, array('Content-Type' => 'application/json'));

  }

  /**
   * Suppression d'un Invite
   *
   * @return Response
   */
  public function deleteInvite(Request $request){
    $idInvite = $request->idInvite;
    $invite = Invite::find($idInvite);
    $invite->assistance()->delete();


  }


}
