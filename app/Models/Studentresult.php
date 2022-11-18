<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Studentresult extends Model
{
    use HasFactory;


protected $fillable =[
    'user_id',
    'fullname',
    'coursename',
    'course_id',
    'unique_code',
    'course_type',
    'status'
];
}
