<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use App\Models\User;

class AuthController extends Controller
{
    // LOGIN

    public function login(Request $request)
    {
        $request->validate([

            'email' => 'required|email',

            'password' => 'required',

        ]);

        $user = User::where('email', $request->email)->first();

        // CHECK USER

        if (!$user) {

            return response()->json([

                'message' => 'Email incorrect'

            ], 401);
        }

        // CHECK PASSWORD

        if (!Hash::check($request->password, $user->password)) {

            return response()->json([

                'message' => 'Mot de passe incorrect'

            ], 401);
        }

        // CREATE TOKEN

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([

            'message' => 'Connexion réussie',

            'token' => $token,

            'user' => $user,

        ]);
    }

    // LOGOUT

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([

            'message' => 'Déconnexion réussie'

        ]);
    }

    // CURRENT USER

    public function me(Request $request)
    {
        return response()->json($request->user());
    }
}