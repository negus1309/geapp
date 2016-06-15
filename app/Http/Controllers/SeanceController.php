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
    public function index() {
      return Seance::all();
    }

    public function getCommission(){

      return Commission::all();

    }




    public function getCommissionNom(){
      $commissionNom = DB::table('seances')
                        ->join('commissions','seances.idCommission', '=','commissions.id')
                        ->lists('commissions.nom');
                        //->get();

      return $commissionNom;


      //->lists('title');

    }

    public function getSeanceParCommission($idCommission){
      $seancesParCommission = DB::table('seances')->where('idCommission', $idCommission)->get();
      return $seancesParCommission;

    }

    public function postSeance(Request $request){



        $nouveauPv = new Seance;

        $nouveauPv->commission_id = $request->input('commission_id');
        $nouveauPv->date = '2017-10-06';
        //$nouveauPv->commission_id = 1;
        //$nouveauPv->id = 20;
        //$nouveauPv->numero = 177345;



        $nouveauPv->save();
            //return Response::json(array('success' => true), 200);
        //return response()->json(['message' => 'Le pv a été sauvegardé','objet' => $nouveauPv]);
        return response($nouveauPv->toJson(), 201, array('Content-Type' => 'application/json'));


      /*DB::table('seances')->insert(
          ['id' => 5]
      );*/
    }










}
