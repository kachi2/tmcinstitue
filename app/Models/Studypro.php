<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Studypro extends Model
{
    use HasFactory;


    protected $fillable = [
    'fullname',
    'lastname',
    'email',
    'phone',
    'address',
    'educational',
    'school'
    ];
}
