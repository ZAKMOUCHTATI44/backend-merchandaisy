<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categroies = collect([
            [
                "Packaging",
                "/storage/menus/dessert.png"
            ],
            [
                "Apparel",
                "/storage/menus/meal.png"
            ],
            [
                "Office",
                "/storage/menus/eco-food.png"
            ],
            [
                "Drinkware",
                "/storage/menus/soda.png"
            ],
            [
                "Bags",
                "/storage/menus/tray.png"
            ],
            [
                "Tech",
                "/storage/menus/tray.png"
            ],
            [
                "Basic",
                "/storage/menus/tray.png"
            ],
            [
                "Home",
                "/storage/menus/tray.png"
            ],
            [
                "Wellnes",
                "/storage/menus/tray.png"
            ],
            [
                "Other",
                "/storage/menus/tray.png"
            ],
            [
                "Chritmas",
                "/storage/menus/tray.png"
            ],
            [
                "Workwear",
                "/storage/menus/tray.png"
            ]
        ]);
        $categroies->each(function ($tag) {
            $category = new Category();
            $category->name = $tag[0];
            $category->image = $tag[1];
            $category->save();
        });
    }
}
