<?php

namespace App\Models;

// app/Models/Formateur.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Formateur extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'matiere_id',
        'specialite',
    ];

    // Formateur -> User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Formateur -> Matiere
    public function matiere()
    {
        return $this->belongsTo(Matiere::class);
    }

    // Formateur <-> Groupes
    public function groupes()
    {
        return $this->belongsToMany(
            Groupe::class,
            'formateur_groupe'
        );
    }

    // Formateur -> Remarques
    public function remarques()
    {
        return $this->hasMany(Remarque::class);
    }

    // Formateur -> Taches
    public function taches()
    {
        return $this->hasMany(Tache::class);
    }
}
