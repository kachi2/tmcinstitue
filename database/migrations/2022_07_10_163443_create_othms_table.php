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
        Schema::create('othms', function (Blueprint $table) {
            $table->id();
            $table->tinyText('coursename')->nullable();
            $table->tinyText('firstletter')->nullable();
            $table->longText('coursedetails')->nullable();
            $table->mediumText('certification')->nullable();
            $table->longText('whothiscoursefor')->nullable();
            $table->longText('learning')->nullable();
            $table->decimal('accelerated_price')->nullable();
            $table->decimal('standard_price')->nullable();
            $table->tinyText('currency_name')->nullable();
            $table->tinyText('instructor')->nullable();
            $table->integer('rating')->nullable();
            $table->tinyText('duration')->nullable();
            $table->tinyText('picture')->nullable();
            $table->tinyText('lesson')->nullable();
            $table->integer('quizzes')->nullable();
            $table->boolean('certificate')->default(false)->nullable();
            $table->tinyText('language')->nullable();
            $table->tinyText('access')->nullable();
            $table->longText('why_choose_tmc_institute')->nullable();
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
        Schema::dropIfExists('othms');
    }
};
