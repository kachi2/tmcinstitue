<?php

namespace App\Models;

// use Nicolaslopezj\Searchable\SearchableTrait;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;
class CourseInfo extends Model
{
    use HasFactory;
    use SearchableTrait;

    protected $searchable = [
        'columns' => [
            // 'course_infos.MainHead' => 10,
            'course_infos.coursename' => 10,
        ]
        ];


    protected $fillable =[
        'coursedetails',
        'certification',
        'whothiscoursefor',
        'learning',
        'price',
        'currency_name',
        'instructor',
        'rating',
        'duration',
        'lesson',
        'quizzes',
        'certificate',
        'language',
        'access',
        'MainHead',
        'coursename',
        'picture',
        'firstletter',
        'coursetype',
    ];




}

