<?php

namespace App\Http\Controllers;

use App\Models\Seance;
use App\Models\Commission;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;


class CommissionController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(){

      return Commission::all();
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getCommissionWithSeances(){
      $comWithSeance = Commission::with('seance')->get();



      return $comWithSeance;

    }


    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getCommissionWithLastSeance(){
      $comWithSeance = Commission::with('seance_lastpv')->get();



      return $comWithSeance;

    }


}
