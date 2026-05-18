<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ClasseFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nom' => fake()->randomElement([
                'CP',
                'CE1',
                'CE2',
                'CM1',
                'CM2',
                '6ème'
            ]),

            'description' => fake()->sentence(),

            'niveau_id' => \App\Models\Niveau::inRandomOrder()->first()->id,
        ];
    }
}