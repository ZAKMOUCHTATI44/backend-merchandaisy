<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $products->each(function ($produit) {
        //     $product = new Product();
        //     $product->title = $produit['title'];
        //     $product->description = $produit["description"];
        //     $product->price = $produit['price'];
        //     $product->image = "/storage/image/Rf3eciJZY7mmPmwDuGPZteYp3f7CtL3lvrb6iWt8.png";
        //     $product->category_id = Category::where('name', $produit['category'])->first()->id;
        //     $product->save();
        // });
    }
}
