<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, HasUuids, SoftDeletes;

    protected $fillable = [
        "title",
        "description",
        "price",
        "image",
        "prot",
        "carbs",
        "fat",
        "fibers",
        "kcal",
        "category_id",
        "tag",
        "out_of_stock"
    ];
    public function cartItems()
    {
        return $this->hasMany(CartItem::class);
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
