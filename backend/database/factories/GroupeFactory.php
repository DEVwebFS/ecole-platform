<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class GroupeFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nom' => fake()->randomElement([
                'GR1',
                'GR2',
                'GR3'
            ]),

            'classe_id' => 1,
        ];
    }
}