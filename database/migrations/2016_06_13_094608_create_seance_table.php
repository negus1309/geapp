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
          $table->increments('id');
          $table->integer('numero');
          $table->date('date');
          $table->time('heure_debut');
          $table->time('heure_fin');
          $table->timestamps();

          //FK
          $table->integer('president_id')->unsigned(); //fk vers president
          $table->integer('commission_id')->unsigned(); // fk vers commission

            //$table->primary('id');
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
