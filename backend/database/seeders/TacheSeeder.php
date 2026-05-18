<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tache;
use App\Models\Formateur;

class TacheSeeder extends Seeder
{
    public function run(): void
    {
        $types = [
            'cours',
            'exercice',
            'video',
            'document'
        ];

        $formateurs = Formateur::all();

        foreach ($formateurs as $formateur) {

            Tache::create([

                'titre' => fake()->sentence(),

                'description' => fake()->paragraph(),

                'type' => fake()->randomElement($types),

                'fichier' => null,

                'lien' => null,

                'date_limite' => fake()->date(),

                'formateur_id' => $formateur->id,

            ]);
        }
    }
}