<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAssistanceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('assistances', function (Blueprint $table) {

          $table->timestamps();

          //FK
          $table->integer('idInvite')->unsigned();;
          $table->integer('numeroSeance')->unsigned();;
          $table->time('heure_debutSeance');

            $table->primary(array('idInvite', 'numeroSeance','heure_debutSeance'));
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('assistances');
    }
}
