<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        if (!User::where('email', 'user@email.com')->exists()) {
            $user = new User;
            $user->name = "hakim";
            $user->email = "user@email.com";
            $user->password = bcrypt("password");
            $user->save();
        }

        User::factory()
            ->count(5)
            ->create();
    }
}
