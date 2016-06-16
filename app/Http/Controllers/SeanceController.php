<?php

namespace App\Http\Controllers;

use App\Models\Seance;
use App\Models\Commission;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;


class SeanceController extends Controller {



    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function newSeance(Request $request){

        $nouveauPv = new Seance;

        $nouveauPv->commission_id = $request->input('commission_id');
        $nouveauPv->date = '2017-10-06';
        $nouveauPv->save();

        return response($nouveauPv->toJson(), 201, array('Content-Type' => 'application/json'));



    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function updateSeance(Request $request){

      $idPv = $request->id;

      $majPv = Seance::find($idPv);
      $majPv->numero = $request->numero;
      $majPv->date = $request->date;
      $majPv->heure_debut = $request->heure_debut;
      $majPv->heure_fin = $request->heure_fin;
      $majPv->president_id = $request->president_id;
      $majPv->commission_id = $request->commission_id;


      $majPv->save();
      return response($majPv->toJson(), 201, array('Content-Type' => 'application/json'));



    }









}
