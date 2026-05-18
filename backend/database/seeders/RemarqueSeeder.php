<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Remarque;
use App\Models\Formateur;


class RemarqueSeeder extends Seeder
{
    public function run(): void
    {
        $formateurs = Formateur::all();

        foreach ($formateurs as $formateur) {

            Remarque::create([

                'contenu' => fake()->sentence(),

                'formateur_id' => $formateur->id,

            ]);
        }
    }
}
