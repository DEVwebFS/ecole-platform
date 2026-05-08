<?php

namespace App\Http\Controllers;

use App\Models\Niveau;
use Illuminate\Http\Request;

class NiveauController extends Controller
{
    // GET: /api/niveaux
    public function index()
    {
        return response()->json(Niveau::all());
    }

    // POST: /api/niveaux
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string'
        ]);

        $niveau = Niveau::create([
            'nom' => $request->nom
        ]);

        return response()->json($niveau);
    }

    // GET: /api/niveaux/{id}
    public function show($id)
    {
        return response()->json(Niveau::findOrFail($id));
    }

    // PUT: /api/niveaux/{id}
    public function update(Request $request, $id)
    {
        $niveau = Niveau::findOrFail($id);

        $niveau->update([
            'nom' => $request->nom
        ]);

        return response()->json($niveau);
    }

    // DELETE: /api/niveaux/{id}
    public function destroy($id)
    {
        Niveau::destroy($id);

        return response()->json([
            'message' => 'Niveau deleted successfully'
        ]);
    }
}