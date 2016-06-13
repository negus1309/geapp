<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rubrique extends Model
{
  public function seance() {
    return $this->belongsTo('Seance'); // this matches the Eloquent model
  }
  public function rapport() {
    return $this->hasMany('Rapport'); // this matches the Eloquent model
  }
}
