<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Matiere;

class MatiereSeeder extends Seeder
{
    public function run(): void
    {
        $matieres = [
            'Mathématiques',
            'Français',
            'Arabe',
            'Anglais',
            'SVT',
            'Physique',
            'Informatique',
        ];

        foreach ($matieres as $matiere) {
            Matiere::create([
                'nom' => $matiere
            ]);
        }
    }
}