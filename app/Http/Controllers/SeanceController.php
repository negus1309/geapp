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


class SeanceController extends Controller {


    /**
     * Création ou mise à jour d'une Seance
     *
     * @return Response
     */
    public function createOrUpdateSeance(Request $request){


      $seanceToken = $request->token;

      $maSeance = Seance::where('token', $seanceToken)->first();

      if($maSeance){

        $maSeance->numero = $request->numero;
        $maSeance->date = $request->date;
        $maSeance->heure_debut = $request->heure_debut;
        $maSeance->heure_fin = $request->heure_fin;
        $maSeance->commission_id = $request->commission_id;
        $maSeance->depute_id = $request->depute_id;
        $maSeance->save();
        $maSeanceToSend = $maSeance;

      }else{
        $maNouvelleSeance = new Seance;
        $maNouvelleSeance->token = $request->token;
        $maNouvelleSeance->numero = $request->numero;
        $maNouvelleSeance->date = $request->date;
        $maNouvelleSeance->heure_debut = $request->heure_debut;
        $maNouvelleSeance->heure_fin = $request->heure_fin;
        $maNouvelleSeance->commission_id = $request->commission_id;
        $maNouvelleSeance->depute_id = $request->depute_id;
        $maNouvelleSeance->save();
        $maSeanceToSend = $maNouvelleSeance;

      }
      $status = 201;
      $value = "application/json";
      return response($maSeanceToSend, $status)
                  ->header('Content-Type', $value);


    }





}
