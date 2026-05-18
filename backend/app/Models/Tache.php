<?php

namespace App\Models;

// app/Models/Tache.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tache extends Model
{
    use HasFactory;

    protected $fillable = [
        'titre',
        'description',
        'type',
        'fichier',
        'lien',
        'date_limite',
        'formateur_id',
    ];

    // Tache -> Formateur
    public function formateur()
    {
        return $this->belongsTo(Formateur::class);
    }

    // Tache <-> Groupes
    public function groupes()
    {
        return $this->belongsToMany(
            Groupe::class,
            'tache_groupe'
        );
    }
}
