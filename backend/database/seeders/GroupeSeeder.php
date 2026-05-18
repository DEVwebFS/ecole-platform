<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Groupe;
use App\Models\Classe;


class GroupeSeeder extends Seeder
{
    public function run(): void
    {
        $classes = Classe::all();

        foreach ($classes as $classe) {

            Groupe::create([
                'nom' => 'GR1',
                'classe_id' => $classe->id,
            ]);

            Groupe::create([
                'nom' => 'GR2',
                'classe_id' => $classe->id,
            ]);

            Groupe::create([
                'nom' => 'GR3',
                'classe_id' => $classe->id,
            ]);
        }
    }
}