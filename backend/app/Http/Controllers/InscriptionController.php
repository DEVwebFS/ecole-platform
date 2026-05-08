<?php

namespace App\Http\Controllers;

use App\Models\Inscription;
use Illuminate\Http\Request;

class InscriptionController extends Controller
{
    // GET جميع inscriptions
    public function index()
    {
        return Inscription::with('classe')->get();
    }

    // POST إضافة inscription
   public function store(Request $request)
{
    $inscription = Inscription::create([
        'nom_eleve' => $request->nom_eleve,
        'prenom_eleve' => $request->prenom_eleve,
        'email' => $request->email,
        'classe_id' => $request->classe_id,
        'niveau_id' => $request->niveau_id,
    ]);

    return response()->json($inscription);
}

    // GET inscription وحدة
    public function show($id)
    {
        return Inscription::with('classe')->findOrFail($id);
    }

    // UPDATE
    public function update(Request $request, $id)
    {
        $inscription = Inscription::findOrFail($id);

        $inscription->update($request->all());

        return response()->json($inscription);
    }

    // DELETE
    public function destroy($id)
    {
        Inscription::destroy($id);

        return response()->json([
            'message' => 'Inscription deleted successfully'
        ]);
    }
}