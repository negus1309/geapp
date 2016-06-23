<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Commission extends Model
{
    protected $fillable = array('nom');


    public function seance() {
      return $this->hasMany('App\Models\Seance')->orderBy('date','desc'); // this matches the Eloquent model
    }
    public function attribution() {
      return $this->hasMany('Attribution'); // this matches the Eloquent model
    }


}
