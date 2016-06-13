<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSeanceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('seances', function (Blueprint $table) {
          $table->integer('numero');
          $table->time('heure_debut');
          $table->time('heure_fin');
          $table->timestamps();

          //FK
          $table->integer('idPresident')->unsigned(); //fk vers president
          $table->integer('idCommission')->unsigned(); // fk vers commission

            $table->primary(array('numero', 'heure_debut'));
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('seances');
    }
}
