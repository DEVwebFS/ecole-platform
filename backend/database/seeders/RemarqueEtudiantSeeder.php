<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Remarque;
use App\Models\Etudiant;

class RemarqueEtudiantSeeder extends Seeder
{
    public function run(): void
    {
        $remarques = Remarque::all();

        foreach ($remarques as $remarque) {

            $etudiants = Etudiant::inRandomOrder()
                ->take(2)
                ->pluck('id');

            $remarque->etudiants()->attach($etudiants);
        }
    }
}
