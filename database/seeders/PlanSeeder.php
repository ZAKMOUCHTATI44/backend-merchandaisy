<?php

namespace Database\Seeders;

use App\Models\Plan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $plans = collect([
            [
                "label" => "Prise de masse",
                "image" => "storage/plans/plan-1.png",
                "info" => "100 KCAL-120g prot-20g fat",
                "stars" => 4,
            ],
            [
                "label" => "Perte de poids",
                "image" => "storage/plans/plan-2.png",
                "info" => "100 KCAL-120g prot-20g fat",
                "stars" => 3,
            ],
            [
                "label" => "Maintenance",
                "image" => "storage/plans/plan-3.png",
                "info" => "100 KCAL-120g prot-20g fat",
                "stars" => 5,
            ]
        ]);

        $plans->each(function ($plan) {
            Plan::create([
                "label" => $plan["label"],
                "image" => $plan['image'],
                "info" => $plan["info"],
                "stars" => $plan['stars'],
            ]);
        });
    }
}
