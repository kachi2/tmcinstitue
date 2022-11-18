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
        Schema::create('course_infos', function (Blueprint $table) {
            $table->id();
            $table->tinyText('coursename')->nullable();
            $table->tinyText('firstletter')->nullable();
            $table->longText('coursedetails')->nullable();
            $table->tinyText('certification')->nullable();
            $table->tinyText('whothiscoursefor')->nullable();
            $table->longText('learning')->nullable();
            $table->decimal('price')->nullable();
            $table->tinyText('currency_name')->nullable();
            $table->tinyText('instructor')->nullable();
            $table->integer('rating')->nullable();
            $table->tinyText('duration')->nullable();
            $table->tinyText('lesson')->nullable();
            $table->integer('quizzes')->nullable();
            $table->boolean('certificate')->default(false)->nullable();
            $table->tinyText('language')->nullable();
            $table->tinyText('access')->nullable();
            $table->tinyText('coursetype')->nullable();
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
        Schema::dropIfExists('course_infos');
    }
};
