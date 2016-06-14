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
          $table->integer('invite_id')->unsigned();;
          $table->integer('seance_id')->unsigned();;


            $table->primary(array('invite_id', 'seance_id'));
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
