<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sectour extends Model
{
    use HasFactory;
    protected $fillable = ["label"];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
