<?php

namespace App\Models;

// app/Models/Classe.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Classe extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'description',
        'niveau_id',
    ];

    // Classe -> Niveau
    public function niveau()
    {
        return $this->belongsTo(Niveau::class);
    }

    // Classe -> Groupes
    public function groupes()
    {
        return $this->hasMany(Groupe::class);
    }

    // Classe -> Etudiants
    public function etudiants()
    {
        return $this->hasMany(Etudiant::class);
    }
}
