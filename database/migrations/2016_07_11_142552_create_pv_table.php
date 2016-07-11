<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePvTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('pvs', function (Blueprint $table) {

          $table->increments('id');
          $table->text('token')->nullable();
          $table->timestamps();

          $table->mediumText('pv');
          //$table->softDeletes();


      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::drop('pvs');

    }
}
