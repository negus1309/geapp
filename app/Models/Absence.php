<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Absence extends Model
{

  public function depute() {
    return $this->belongsTo('Depute'); // this matches the Eloquent model
  }

  public function seance() {
    return $this->belongsTo('Seance'); // this matches the Eloquent model
  }


}
