<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/Groupe.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Groupe extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'classe_id',
    ];

    // Groupe -> Classe
    public function classe()
    {
        return $this->belongsTo(Classe::class);
    }

    // Groupe -> Etudiants
    public function etudiants()
    {
        return $this->hasMany(Etudiant::class);
    }

    // Groupe <-> Formateurs
    public function formateurs()
    {
        return $this->belongsToMany(
            Formateur::class,
            'formateur_groupe'
        );
    }

    // Groupe <-> Taches
    public function taches()
    {
        return $this->belongsToMany(
            Tache::class,
            'tache_groupe'
        );
    }
}
