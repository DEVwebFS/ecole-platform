<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tache;
use App\Models\Groupe;

class TacheGroupeSeeder extends Seeder
{
    public function run(): void
    {
        $taches = Tache::all();

        foreach ($taches as $tache) {

            $groupes = Groupe::inRandomOrder()
                ->take(2)
                ->pluck('id');

            $tache->groupes()->attach($groupes);
        }
    }
}