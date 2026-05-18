<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FormateurFactory extends Factory
{
    public function definition(): array
    {
        return [
            'user_id' => \App\Models\User::where('role', 'formateur')
    ->inRandomOrder()
    ->first()
    ->id,

'matiere_id' => \App\Models\Matiere::inRandomOrder()
    ->first()
    ->id,

            'specialite' => fake()->sentence(),
        ];
    }
}