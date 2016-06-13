<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Assistance extends Model
{
  public function seance() {
    return $this->belongsTo('Seance'); // this matches the Eloquent model
  }

  public function invite() {
    return $this->belongsTo('Invite'); // this matches the Eloquent model
  }
}
