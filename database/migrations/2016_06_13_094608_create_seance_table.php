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
          $table->text('token')->nullable();
          $table->integer('numero')->nullable();
          $table->date('date')->nullable();
          $table->time('heure_debut')->nullable();
          $table->time('heure_fin')->nullable();
          $table->timestamps();
          $table->softDeletes();

          //FK
          $table->integer('depute_id')->nullable()->unsigned(); //fk vers president
          $table->integer('commission_id')->nullable()->unsigned(); // fk vers commission

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
