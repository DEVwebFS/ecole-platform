<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([

    NiveauSeeder::class,

    MatiereSeeder::class,

    ClasseSeeder::class,

    GroupeSeeder::class,

    UserSeeder::class,

    FormateurSeeder::class,

    EtudiantSeeder::class,

    RemarqueSeeder::class,

    TacheSeeder::class,

    FormateurGroupeSeeder::class,

    RemarqueEtudiantSeeder::class,

    TacheGroupeSeeder::class,

]);
    }
}
