<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Assistance extends Model
{
  protected $fillable = ['seance_id','invite_id'];

  public function seance() {
    return $this->belongsTo('Seance'); // this matches the Eloquent model
  }

  public function invite() {
    return $this->belongsTo('App\Models\Invite'); // this matches the Eloquent model
  }
}
