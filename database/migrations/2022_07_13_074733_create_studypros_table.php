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

        Schema::create('studypros', function (Blueprint $table) {
            $table->id();
            $table->tinyText('fullname')->nullable();
            $table->tinyText('lastname')->nullable();
            $table->tinyText('email')->nullable();
            $table->tinyText('phone')->nullable();
            $table->tinyText('address')->nullable();
            $table->tinyText('educational')->nullable();
            $table->tinyText('school')->nullable();
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
        Schema::dropIfExists('studypros');
    }
};
