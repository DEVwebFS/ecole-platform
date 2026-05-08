<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inscription extends Model
{
    protected $fillable = [
        'nom_eleve',
        'prenom_eleve',
        'email',
        'classe_id',
        'niveau_id'
    ];
}