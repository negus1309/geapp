<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invite extends Model
{
  protected $fillable = ['nom','prenom','titre'];

  public function assistance() {
    return $this->hasMany('App\Models\Assistance'); // this matches the Eloquent model
  }
}
