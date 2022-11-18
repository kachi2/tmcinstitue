<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;
class othm extends Model
{
    use HasFactory;
    use SearchableTrait;

    protected $searchable = [
        'columns' => [
            // 'course_infos.MainHead' => 10,
            'othms.coursename' => 10,
        ]
        ];

    protected $fillable = [
        'coursedetails',
        'certification',
        'whothiscoursefor',
        'learning',
        'accelerated_price',
        'standard_price',
        'currency_name',
        'instructor',
        'rating',
        'duration',
        'picture',
        'lesson',
        'quizzes',
        'certificate',
        'language',
        'access',
        'MainHead',
        'coursename',
        'firstletter',
        'why_choose_tmc_institute',
        'coursetype',
    ];
}
