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

        //FK
        $table->integer('idDepute')->unsigned();;
        $table->integer('numeroSeance')->unsigned();;
        $table->time('heure_debutSeance');


          $table->primary(array('idDepute', 'numeroSeance','heure_debutSeance'));
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
