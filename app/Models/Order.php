<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory, HasUlids;
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function cartItems()
    {
        return $this->hasMany(CartItem::class);
    }
    public function codePromo()
    {
        return $this->belongsTo(CodePromo::class);
    }
    public function getPrice()
    {
        $count = 15;
        foreach ($this->cartItems as $item) {
            $count += $item->price * $item->quantity;
        }
        return $count;
    }
    public function calculateCodePromo()
    {
        $count = 15;
        foreach ($this->cartItems as $item) {
            $count += $item->price * $item->quantity;
        }
        if ($this->codePromo) {
            return floor(($count / 100) * $this->codePromo->discount);
        }
        return 0;
    }

    public function sectour()
    {
        return $this->belongsTo(Sectour::class);
    }
}
