<?php

namespace Database\Seeders;

use App\Models\Athlete;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AthelesSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $athletes = collect([
            [
                "name" => "hamza berrada",
                "image" => "/storage/atheles/grid-2.webp"
            ],
            [
                "name" => "karim benchekroun",
                "image" => "/storage/atheles/grid-3.webp"
            ],
            [
                "name" => "reda mardi",
                "image" => "/storage/atheles/grid-4.webp"
            ],
            [
                "name" => "hasna lachgar",
                "image" => "/storage/atheles/grid-5.webp"
            ],
            [
                "name" => "aslam nicolin",
                "image" => "/storage/atheles/grid-6.webp"
            ],
            [
                "name" => "marwane bellagouit",
                "image" => "/storage/atheles/grid-7.webp"
            ],
        ]);
        $athletes->each(function ($athlete) {
            Athlete::create([
                'name' => $athlete['name'],
                'image' => $athlete['image'],
            ]);
        });
    }
}
