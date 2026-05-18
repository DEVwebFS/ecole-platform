<?php

namespace App\Models;


namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Matiere extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'description',
    ];

    public function formateurs()
    {
        return $this->hasMany(Formateur::class);
    }
}