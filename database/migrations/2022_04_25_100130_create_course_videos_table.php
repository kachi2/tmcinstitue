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
        Schema::create('course_videos', function (Blueprint $table) {
            $table->id();
            $table->tinyText('courseepisode')->nullable();
            $table->tinyText('courseepisodetitle')->nullable();
            $table->tinyText('courselink')->nullable();
            $table->tinyText('courseduration')->nullable();
            $table->unsignedBigInteger('course_id')->nullable();
            $table->tinytext('course_type')->nullable();
            // $table->foreign('course_id')->references('id')->on('course_infos');
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
        Schema::dropIfExists('course_videos');
    }
};
