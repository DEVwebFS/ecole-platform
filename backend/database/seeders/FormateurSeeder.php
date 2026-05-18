<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Formateur;
use App\Models\User;
use App\Models\Matiere;

class FormateurSeeder extends Seeder
{
    public function run(): void
    {
        $users = User::where('role', 'formateur')->get();

        foreach ($users as $user) {

            Formateur::create([

                'user_id' => $user->id,

                'matiere_id' => Matiere::inRandomOrder()->first()->id,

                'specialite' => fake()->sentence(),

            ]);
        }
    }
}
