<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calculator extends Model
{
    use HasFactory;
    protected $fillable = [
        "objectif", "activite", "gender", "sectour_id", "brithday", "taille", "poids", "objectifPoids", "user_id"
    ];
}
