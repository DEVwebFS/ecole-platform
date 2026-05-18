<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Formateur;
use App\Models\Groupe;


class FormateurGroupeSeeder extends Seeder
{
    public function run(): void
    {
        $formateurs = Formateur::all();

        foreach ($formateurs as $formateur) {

            $groupes = Groupe::inRandomOrder()
                ->take(3)
                ->pluck('id');

            $formateur->groupes()->attach($groupes);
        }
    }
}