<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Classe;

class ClasseSeeder extends Seeder
{
    public function run(): void
    {
        $classes = [

            ['nom' => 'Petite Section', 'niveau_id' => 1],
            ['nom' => 'Moyenne Section', 'niveau_id' => 1],
            ['nom' => 'Grande Section', 'niveau_id' => 1],

            ['nom' => 'CP', 'niveau_id' => 2],
            ['nom' => 'CE1', 'niveau_id' => 2],
            ['nom' => 'CE2', 'niveau_id' => 2],
            ['nom' => 'CM1', 'niveau_id' => 2],
            ['nom' => 'CM2', 'niveau_id' => 2],
            ['nom' => '6ème année', 'niveau_id' => 2],

            ['nom' => '1ère année', 'niveau_id' => 3],
            ['nom' => '2ème année', 'niveau_id' => 3],
            ['nom' => '3ème année', 'niveau_id' => 3],

        ];

        foreach ($classes as $classe) {
            Classe::create([
                'nom' => $classe['nom'],
                'description' => fake()->sentence(),
                'niveau_id' => $classe['niveau_id'],
            ]);
        }
    }
}