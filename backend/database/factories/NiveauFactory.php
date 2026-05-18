<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class NiveauFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nom' => fake()->randomElement([
                'Maternelle',
                'Primaire',
                'Collège'
            ]),
        ];
    }
}