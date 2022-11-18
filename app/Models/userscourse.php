<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class userscourse extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
       'course_id',
        'amount',
        'moneyname',
        'email',
        'status',
        'referencecode',
        'othm_id',
    ];
}
