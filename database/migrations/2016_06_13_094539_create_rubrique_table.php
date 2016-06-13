<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRubriqueTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('rubriques', function (Blueprint $table) {
          $table->integer('numero');
          $table->string('titre');
          $table->string('contenu');
          $table->string('heure_debut');
          $table->string('heure_fin');
          $table->timestamps();

          //FK
          $table->integer('numeroSeance')->unsigned(); // fk vers seances
          $table->time('heure_debutSeance'); // fk vers séance

            $table->primary(array('numero', 'numeroSeance', 'heure_debutSeance'));

      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('rubriques');

    }
}
