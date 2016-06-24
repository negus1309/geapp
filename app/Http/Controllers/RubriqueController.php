<?php

namespace App\Http\Controllers;

use App\Models\Seance;
use App\Models\Rubrique;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;


class RubriqueController extends Controller {

  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  public function storeRubrique(Request $request){

    $idRubrique = $request->id;

    $maRubrique = Rubrique::find($idRubrique);

    // VERSION SI PAS D'ID
    /*Rubrique::where('numero', '=', $request->numero)
                ->where('seance_id', '=', $request->seance_id)
                ->first();*/

    if(!$maRubrique){

        $maRubrique = new Rubrique;

    }

    $maRubrique->titre = $request->titre;
    $maRubrique->numero = $request->numero;
    $maRubrique->contenu = $request->contenu;
    $maRubrique->heure_debut = $request->heure_debut;
    $maRubrique->heure_fin = $request->heure_fin;
    //$maRubrique->seance_id = "GGGGGGGGGGGGG"; // a priori pas besoin

    $maRubrique->save();
    $status = 201;
    $value = "application/json";
      //return ;
      return response($maRubrique, $status)
                  ->header('Content-Type', $value);

  }







}
