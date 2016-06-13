<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class President extends Model
{
  public function seance() {
    return $this->hasMany('seance'); // this matches the Eloquent model
  }
}
