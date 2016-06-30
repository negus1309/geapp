<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;


class FileUploadController extends Controller {

  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  public function storeFile(Request $request){

  //  $file = $request->input('file');
    //$file->move(base_path() . '/public/upload');
    $destinationPath = base_path() . '/public/uploads';
    //return $request->input('seance');

    $fileName = rand(1, 1000000000);

    $request->file('file')->move($destinationPath, $fileName+'.mp3');    //return $file;


  }










}
