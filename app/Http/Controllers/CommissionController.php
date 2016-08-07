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
     * Accès à toutes les Commissions (collection)
     *
     * @return Response
     */
    public function index(){

      return Commission::all();
    }

    /**
     * Accès aux Commissions et aux Seances liées
     *
     * @return Response
     */
    public function getCommissionWithSeances(){

      $comWithSeance = Commission::with('seance')->get();

      return $comWithSeance;

    }


    /**
     * Accès à la aux Commissions et à la dernière Seance liée
     *
     * @return Response
     */
    public function getCommissionWithLastSeance(){

      $comWithSeance = Commission::with('seance_lastpv')->get();

      return $comWithSeance;

    }


}
