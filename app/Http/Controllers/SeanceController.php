<?php

namespace App\Http\Controllers;

use App\Models\Seance;
use App\Models\Commission;
use Illuminate\Http\Request;
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










}
