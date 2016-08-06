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
use File;

class AudioController extends Controller {

    // v2
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function audioUpload(Request $request){

      //dd($request->input('token'));

      $file = $request->file('audio');

      $token = $request->input('token');
      $user = "qschwitzguebel";

      $destinationPath = '../storage/uploads/'.$user; // upload path

      $fileName = $token.'.mp3'; // renameing image

      $file->move($destinationPath, $fileName);


    echo 'vabien';



    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getAudio(Request $request){

        $user = 'qschwitzguebel';
        //$numero = $request->input('numero');
        $token = $request->token;
        $path = storage_path() . '/uploads/' .$user.'/'.$token.'.mp3';

        if(!File::exists($path)) abort(404);



        $file = File::get($path);
        $value = File::mimeType($path);
        $status = 200;
          //return ;
          return response($file, $status)
                      ->header('Content-Type', $value);




    }




}
