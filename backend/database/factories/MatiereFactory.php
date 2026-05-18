<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class MatiereFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nom' => fake()->randomElement([
                'Mathématiques',
                'Français',
                'Arabe',
                'Anglais',
                'SVT',
                'Physique',
                'Informatique'
            ]),

            'description' => fake()->sentence(),
        ];
    }
}