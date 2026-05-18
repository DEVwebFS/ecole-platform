<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RemarqueFactory extends Factory
{
    public function definition(): array
    {
        return [
            'contenu' => fake()->sentence(),

            'formateur_id' => 1,
        ];
    }
}