<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EtudiantFactory extends Factory
{
    public function definition(): array
    {
        return [

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

            'parent_id' => 1,

            'niveau_id' => 1,

            'classe_id' => 1,

            'groupe_id' => 1,
        ];
    }
}