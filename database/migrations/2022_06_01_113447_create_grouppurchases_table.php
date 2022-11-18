<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('grouppurchases', function (Blueprint $table) {
            $table->id();
            $table->tinyText('email')->nullable();
            $table->tinyText('price')->nullable();
            $table->tinyText('coursename')->nullable();
            $table->unsignedBigInteger('course_id')->nullable();
            $table->foreign('course_id')->references('id')->on('course_infos');
            $table->unsignedBigInteger('purchaser_id')->nullable();
            $table->foreign('purchaser_id')->references('id')->on('users');
            $table->tinyText('status')->nullable();
            $table->tinyText('code')->nullable();
             $table->tinyText('moneyname')->nullable();
            $table->tinyText('course')->nullable();
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
        Schema::dropIfExists('grouppurchases');
    }
};
