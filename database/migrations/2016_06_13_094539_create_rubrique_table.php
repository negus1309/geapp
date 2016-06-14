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
          $table->integer('id');
          $table->string('titre');
          $table->string('contenu');
          $table->string('heure_debut');
          $table->string('heure_fin');
          $table->timestamps();

          //FK
          $table->integer('seance_id')->unsigned(); // fk vers seances

            $table->primary(array('id', 'seance_id'));

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
