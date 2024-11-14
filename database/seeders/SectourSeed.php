<?php

namespace Database\Seeders;

use App\Models\Sectour;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SectourSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sectours = collect([
            "Maârif",
            "Anfa",
            "Sidi Belyout",
            "El Fida",
            "Mers Sultan",
            "Aïn Sebaâ",
            "Hay Mohammadi",
            "Roches Noires",
            "Hay Hassani",
            "Aïn Chock",
            "Sidi Bernoussi",
            "Sidi Moumen",
            "Ben Msick",
            "Sbata",
            "Moulay Rachid",
            "Sidi Othman",
            "Bouskoura",
            "Oulfa",
            "Dar Bouazza",
        ]);
        $sectours->each(function ($sectour) {
            Sectour::create([
                'label' => $sectour
            ]);
        });
    }
}
