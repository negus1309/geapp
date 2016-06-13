<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attribution extends Model
{
  public function depute() {
    return $this->belongsTo('Depute'); // this matches the Eloquent model
  }
  public function commission() {
    return $this->belongsTo('Commission'); // this matches the Eloquent model
  }
}
