<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rapporteur extends Model
{
  public function rapport() {
    return $this->hasMany('Rapport'); // this matches the Eloquent model
  }
}
