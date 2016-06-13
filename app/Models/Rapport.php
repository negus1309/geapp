<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rapport extends Model
{
  public function rapporteur() {
    return $this->belongsTo('Rapporteur'); // this matches the Eloquent model
  }
  public function rubrique() {
    return $this->belongsTo('Rubrique'); // this matches the Eloquent model
  }
}
