<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = collect(["Entrainements", "Nutrition", "Astuces", "Lifestyle", "Basics"]);

        $tags->each(function ($tag) {
            $newtag = new Tag();
            $newtag->name = $tag;
            $newtag->save();
        });
    }
}
