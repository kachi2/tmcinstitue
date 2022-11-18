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

        Schema::create('additionals', function (Blueprint $table) {
            $table->id();
            $table->tinyText('country_of_birth')->nullable();
            $table->tinyText('country_of_residence')->nullable();
            $table->tinyText('current_address')->nullable();
            $table->tinyText('email')->nullable();
            $table->tinyText('fullname')->nullable();
            $table->tinyText('gender')->nullable();
            $table->tinyText('image')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->tinyText('nameprint')->nullable();
            $table->tinyText('nationality')->nullable();
            $table->tinyText('phone_number')->nullable();
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
        Schema::dropIfExists('additionals');
    }
};
