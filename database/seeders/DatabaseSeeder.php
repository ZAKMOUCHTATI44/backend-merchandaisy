<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'firstname' => "Admin",
            'lastname' => "Merchandisy",
            'email' => "admin@merchandisy.com",
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            'is_admin' => true
        ]);



        $this->call([
            CategorySeed::class,
            ProductSeed::class,
            TagSeeder::class,
            BlogSeeder::class,
            SectourSeed::class,
            AthelesSeed::class,
            PlanSeeder::class
        ]);
    }
}
