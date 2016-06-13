<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invite extends Model
{
  public function assistance() {
    return $this->hasMany('Assistance'); // this matches the Eloquent model
  }
}
