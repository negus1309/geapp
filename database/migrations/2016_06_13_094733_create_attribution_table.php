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
        $table->integer('depute_id')->unsigned();;
        $table->integer('commission_id')->unsigned();;



          $table->primary(array('depute_id', 'commission_id'));
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
