<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePresenceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('presences', function (Blueprint $table) {

          $table->timestamps();

          $table->integer('heure');


          //FK
          $table->integer('depute_id')->unsigned();
          $table->integer('seance_id')->unsigned();


            $table->primary(array('depute_id', 'seance_id','heure'));

      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('presences');
    }
}
