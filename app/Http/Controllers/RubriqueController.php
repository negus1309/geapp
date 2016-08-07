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
   * Création d'une Rubrique pour une Seance
   *
   * @return Response
   */
  public function storeRubrique(Request $request){


    $maRubrique = new Rubrique;
    $maRubrique->seance_id = $request->seance_id;
    $maRubrique->titre = $request->titre;
    $maRubrique->numero = $request->numero;
    $maRubrique->contenu = $request->contenu;
    $maRubrique->heure_debut = $request->heure_debut;
    $maRubrique->heure_fin = $request->heure_fin;

    $maRubrique->save();
    $status = 201;
    $value = "application/json";

      return response($maRubrique, $status)
                  ->header('Content-Type', $value);

  }


  /**
   * Suppression de toutes les Rubriques pour une Seance
   *
   * @return Response
   */
  public function deleteRubriquesFromThisSeance(Request $request){

    $idSeance = $request->seance_id;

    $mesRubriques = Rubrique::where('seance_id', $idSeance)->delete();

    return "Rubriques supprimées";


  }


  /** UNUSED: **/

  /**
   * Accès à toutes les Rubriques (point d'ODJ) pour une Seance par ordre de numerotation
   *
   * @return Response
   */
  public function getRubriques(Request $request){

    $idSeance = $request->seance_id;

    $mesRubriques = Rubrique::where('seance_id', $idSeance)
               ->orderBy('numero', 'asc')
               ->get();


    $status = 200;
    $value = "application/json";

      return response($mesRubriques, $status)
                  ->header('Content-Type', $value);

  }

  /**
   * Suppression d'un Rubrique
   *
   * @return Response
   */
  public function deleteRubrique(Request $request){
    $idRubrique = $request->rubrique_id;

    $rubrique = Rubrique::find($idRubrique);
    $rubrique->delete();


  }



}
