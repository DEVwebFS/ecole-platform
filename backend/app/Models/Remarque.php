<?php

namespace App\Models;

// app/Models/Remarque.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Remarque extends Model
{
    use HasFactory;

    protected $fillable = [
        'contenu',
        'formateur_id',
    ];

    // Remarque -> Formateur
    public function formateur()
    {
        return $this->belongsTo(Formateur::class);
    }

    // Remarque <-> Etudiants
    public function etudiants()
    {
        return $this->belongsToMany(
            Etudiant::class,
            'remarque_etudiant'
        );
    }
}