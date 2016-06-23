<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePresidentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('presidents', function (Blueprint $table) {
        $table->increments('id');
        $table->string('nom');
        $table->string('prenom');
        $table->enum('titre', array('m','mme'));
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
        Schema::drop('presidents');
    }
}
