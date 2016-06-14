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
          $table->integer('rubrique_seance_id')->unsigned(); // fk vers rubrique
          $table->integer('rubrique_id'); // fk vers rubrique
          $table->integer('rapporteur_id')->unsigned(); // fk vers rapporteur


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
