<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResponsabiliteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('responsabilites', function (Blueprint $table) {

          $table->timestamps();

          //FK
          $table->integer('procesverbaliste_id')->unsigned();;
          $table->integer('seance_id')->unsigned();;


            $table->primary(array('procesverbaliste_id', 'seance_id'));
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::drop('responsabilites');

    }
}
