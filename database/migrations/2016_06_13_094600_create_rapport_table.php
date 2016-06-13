<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRapportTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('rapports', function (Blueprint $table) {
          $table->increments('id');
          $table->string('type');
          $table->timestamps();

          //FK
          $table->integer('numeroSeanceRubrique')->unsigned(); // fk vers rubrique
          $table->time('heure_debutSeanceRubrique'); //fk vers rubriques
          $table->integer('numeroRubrique'); // fk vers rubrique
          $table->integer('idRapporteur')->unsigned(); // fk vers rapporteur


      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('rapports');
    }
}
