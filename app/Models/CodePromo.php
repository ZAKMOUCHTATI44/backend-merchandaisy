<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CodePromo extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ["code", "discount", "limit", "reserved_at"];
    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
