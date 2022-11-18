<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class percentage extends Model
{
    use HasFactory;

    protected $fillable = [
     "videoid",
     "course_id",
     "user_id",
     "course_type",
     "percentage",
     "page",
     "status",
    ];
}
