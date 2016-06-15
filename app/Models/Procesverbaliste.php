<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Procesverbaliste extends Model
{
  public function resposabilite() {
    return $this->hasMany('Responsabilite'); // this matches the Eloquent model
  }
}
