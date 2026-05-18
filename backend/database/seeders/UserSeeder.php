<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // ADMIN

        User::create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
            'phone' => '0600000000',
        ]);

        // PARENTS

        User::factory(10)->create([
            'role' => 'parent'
        ]);

        // FORMATEURS USERS

        User::factory(5)->create([
            'role' => 'formateur'
        ]);
    }
}