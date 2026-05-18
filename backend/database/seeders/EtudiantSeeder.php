<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Etudiant;
use App\Models\User;
use App\Models\Classe;
use App\Models\Groupe;

class EtudiantSeeder extends Seeder
{
    public function run(): void
    {
        $parents = User::where('role', 'parent')->get();

        foreach ($parents as $parent) {

            $classe = Classe::inRandomOrder()->first();

            $groupe = Groupe::where(
                'classe_id',
                $classe->id
            )->inRandomOrder()->first();

            Etudiant::create([

                'first_name' => fake()->firstName(),

                'last_name' => fake()->lastName(),

                'date_naissance' => fake()->date(),

                'lieu_naissance' => fake()->city(),

                'gender' => fake()->randomElement([
                    'male',
                    'female'
                ]),

                'photo' => null,

                'address' => fake()->address(),

                'nationalite' => 'Marocaine',


                'status' => 'accepted',

                'parent_id' => $parent->id,

                'niveau_id' => $classe->niveau_id,

                'classe_id' => $classe->id,

                'groupe_id' => $groupe->id,

            ]);
        }
    }
}