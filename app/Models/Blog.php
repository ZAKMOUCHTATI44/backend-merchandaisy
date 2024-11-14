<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'slug', 'picture', 'content', 'time_of_read', 'tag_id', 'is_active'];

    public function tag()
    {
        return $this->belongsTo(Tag::class);
    }
}
