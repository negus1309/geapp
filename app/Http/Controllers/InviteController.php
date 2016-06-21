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

  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  public function getInvitePourSeance(Request $request){


      //$invite = Invite::all()->assistance;

      //Commission

      //$inviteS = $invite->assistance()->where('seance_id', $request->seance_id)->get();

      //return $invite;

/*
    DB::table('invites')
                ->join('assistances', 'assistances.invite_id', '=', 'invites.id')
                ->select('invites.id', 'invites.nom', 'invites.prenom','invites.titre')
                //->where('assistances.seance_id', '=', $request->seance_id)
                ->get();*/


//$request->seance_id

  }







}
