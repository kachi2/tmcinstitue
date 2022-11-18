<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Additional extends Model
{
    use HasFactory;

    protected $fillable = [
        'country_of_birth',
        'country_of_residence',
        "current_address",
        'email',
        "fullname",
        'gender',
        "image",
        'user_id',
        'nameprint',
        "nationality",
        'phone_number',
        'dob'
    ];
}
