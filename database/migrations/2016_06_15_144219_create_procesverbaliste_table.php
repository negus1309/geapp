<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProcesverbalisteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('procesverbalistes', function (Blueprint $table) {
        $table->increments('id');
        $table->string('nom');
        $table->string('prenom');
        $table->enum('titre', array('M.','MME'));
        $table->timestamps();


      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
          Schema::drop('procesverbalistes');
    }
}
