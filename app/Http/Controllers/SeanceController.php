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

    // v2
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function createOrUpdateSeance(Request $request){


      $seanceToken = $request->token;

      $maSeance = Seance::where('token', $seanceToken)->first();

      if($maSeance){
        return "ok il existe";
      }

      //$maSeance

/*
      $maSeance->save();
      $status = 201;
      $value = "application/json";
        //return ;
        return response($maSeance, $status)
                    ->header('Content-Type', $value);*/



    }











  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  public function getSeance(Request $request){

      $idPv = $request->idSeance;

      //$editPv = Seance::find($idPv)->with('assistance')->with('invite')->get();
      $editPv = Seance::where('seances.id',$idPv)->with( array( 'assistance', 'assistance.invite' ) )->first();
      return $editPv;
      //eturn $editPv;
      //return response($editPv->toJson(), 200, array('Content-Type' => 'application/json'));



  }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function newSeance(Request $request){

        $nouveauPv = new Seance;

        //$humanDate = $request->date;
        //$mysql_date = date('YYYY-mm-dd', strtodate($humanDate));

        //$nouveauPv->date = $mysql_date;

        $nouveauPv->commission_id = $request->input('commission_id');

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


    public function deleteSeance(Request $request){

      //return $request->idSeance;
      $idPv = $request->idSeance;

      $deletePv = Seance::find($idPv);

      if($deletePv){

        $deletePv->delete();
      }

      //return response($deletePv->toJson(), 200, array('Content-Type' => 'application/json'));



    }






}
