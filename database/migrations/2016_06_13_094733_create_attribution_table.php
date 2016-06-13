<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAttributionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('attributions', function (Blueprint $table) {
        $table->timestamps();

        //FK
        $table->integer('idDepute')->unsigned();;
        $table->integer('idCommission')->unsigned();;



          $table->primary(array('idDepute', 'idCommission'));
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('attributions');
    }
}
