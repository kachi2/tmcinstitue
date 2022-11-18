<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class grouppurchase extends Model
{
    use HasFactory;

    protected $fillable = [
    'email',
    'price',
    'coursename',
    'course_id',
    'purchaser_id',
    'status',
    'code',
    'moneyname',
    'course',
    'true_status',
    'fullname',
    ];
}
