<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Depute extends Model
{
  public function presence() {
    return $this->hasMany('Presence'); // this matches the Eloquent model
  }
  public function absence() {
    return $this->hasMany('Absence'); // this matches the Eloquent model
  }
  public function attribution() {
    return $this->hasMany('Attribution'); // this matches the Eloquent model
  }
}
