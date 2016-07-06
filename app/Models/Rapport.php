<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rapport extends Model
{
  public function deputes() {
    return $this->belongsTo('Depute'); // this matches the Eloquent model
  }
  public function rubrique() {
    return $this->belongsTo('Rubrique'); // this matches the Eloquent model
  }
}
