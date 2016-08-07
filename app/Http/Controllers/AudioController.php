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

    /**
     * Upload d'un fichier audio et stockage dans /storage/uploads/username
     *
     * @return Response
     */
    public function audioUpload(Request $request){

      $file = $request->file('audio'); // récupération du fichier audio
      $token = $request->input('token'); // récupération du token
      $user = "qschwitzguebel"; // nom d'utilisateur à prendre dans le header

      $destinationPath = '../storage/uploads/'.$user; // destination

      $fileName = $token.'.mp3'; // renommer le fichier

      $file->move($destinationPath, $fileName); // sauvegarde dans storage


      echo 'Fichier sauvegardé';

    }

    /**
     * Accès au fichier audio de la Seance en fonction du token
     *
     * @return Response Fichier audio binaire
     */
    public function getAudio(Request $request){

        $user = 'qschwitzguebel';
        $token = $request->token;
        $path = storage_path() . '/uploads/' .$user.'/'.$token.'.mp3';

        if(!File::exists($path)) abort(404);

        $file = File::get($path);
        $value = File::mimeType($path);
        $status = 200;

          return response($file, $status)
                      ->header('Content-Type', $value);


    }


}
