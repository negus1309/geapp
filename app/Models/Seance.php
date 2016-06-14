<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Seance extends Model
{
  public function rubrique() {
    return $this->hasMany('Rubrique'); // this matches the Eloquent model
  }
  public function commission() {
    return $this->belongsTo('App\Models\Commission'); // this matches the Eloquent model
  }
  public function president() {
    return $this->belongsTo('President'); // this matches the Eloquent model
  }
  public function absence() {
    return $this->hasMany('Absence'); // this matches the Eloquent model
  }
  public function presence() {
    return $this->hasMany('Presence'); // this matches the Eloquent model
  }
  public function assistance() {
    return $this->hasMany('Assistance'); // this matches the Eloquent model
  }
}
