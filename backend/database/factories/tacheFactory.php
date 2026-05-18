<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;


class TacheFactory extends Factory
{
    public function definition(): array
    {
        return [
            'titre' => fake()->sentence(),

            'description' => fake()->paragraph(),

            'type' => fake()->randomElement([
                'cours',
                'exercice',
                'video',
                'document'
            ]),

            'fichier' => null,

            'lien' => null,

            'date_limite' => fake()->date(),

            'formateur_id' => 1,
        ];
    }
}