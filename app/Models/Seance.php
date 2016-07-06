<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Seance extends Model
{
  use SoftDeletes;
  protected $dates = ['deleted_at'];
  //public $incrementing = false;

  public function rubrique() {
    return $this->hasMany('Rubrique'); // this matches the Eloquent model
  }
  public function commission() {
    return $this->belongsTo('App\Models\Commission'); // this matches the Eloquent model
  }
  public function depute() {
    return $this->belongsTo('Depute'); // this matches the Eloquent modelpresident
  }
  public function absence() {
    return $this->hasMany('Absence'); // this matches the Eloquent model
  }
  public function presence() {
    return $this->hasMany('Presence'); // this matches the Eloquent model
  }
  public function assistance() {
    return $this->hasMany('App\Models\Assistance'); // this matches the Eloquent model
  }
  public function responsabilite() {
    return $this->hasMany('Responsabilite'); // this matches the Eloquent model
  }
}
