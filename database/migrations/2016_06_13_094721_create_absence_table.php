<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAbsenceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('absences', function (Blueprint $table) {
        $table->timestamps();

        $table->time('heure_debut');
        $table->time('heure_fin');
        //FK
        $table->integer('depute_id')->unsigned();;
        $table->integer('seance_id')->unsigned();;


          $table->primary(array('depute_id', 'seance_id', 'heure_debut'));
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('absences');
    }
}
