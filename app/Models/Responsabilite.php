<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Responsabilite extends Model
{
  public function procesverbaliste() {
    return $this->belongsTo('Procesverbaliste'); // this matches the Eloquent model
  }
  public function seance() {
    return $this->belongsTo('Seance'); // this matches the Eloquent model
  }
}
