<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseVideo extends Model
{
    use HasFactory;

    protected $fillable = [

        'courseepisode',
        'courseepisodetitle',
        'courselink',
        'courseduration',
        'course_id',
        'course_type',
    ];
}
