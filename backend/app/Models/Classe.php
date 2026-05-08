<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Classe extends Model
{
    protected $fillable = [
        'nom',
        'niveau_id'
    ];

    public function niveau()
    {
        return $this->belongsTo(Niveau::class);
    }

    public function inscriptions()
    {
        return $this->hasMany(Inscription::class, 'classes_id');
    }
}
