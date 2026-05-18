<?php

namespace App\Models;

// app/Models/Etudiant.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Etudiant extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'date_naissance',
        'lieu_naissance',
        'gender',
        'photo',
        'address',
        'nationalite',
        'status',
        'parent_id',
        'niveau_id',
        'classe_id',
        'groupe_id',
    ];

    // Etudiant -> Parent(User)
    public function parent()
    {
        return $this->belongsTo(User::class, 'parent_id');
    }

    // Etudiant -> Niveau
    public function niveau()
    {
        return $this->belongsTo(Niveau::class);
    }

    // Etudiant -> Classe
    public function classe()
    {
        return $this->belongsTo(Classe::class);
    }

    // Etudiant -> Groupe
    public function groupe()
    {
        return $this->belongsTo(Groupe::class);
    }

    // Etudiant <-> Remarques
    public function remarques()
    {
        return $this->belongsToMany(
            Remarque::class,
            'remarque_etudiant'
        );
    }
}
