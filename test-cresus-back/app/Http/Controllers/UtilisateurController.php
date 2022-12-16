<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use Illuminate\Http\Request;

class UtilisateurController extends Controller
{
    public function index()
    {
        $utilisateurs = Utilisateur::all();

        return response()->json($utilisateurs);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'nom' => 'required|max:12',
            'prenom' => 'required|max:12',
            'email' => 'required|email|unique:utilisateurs',
            'motdepasse' => 'required|min:8'
        ]);

        $utilisateur = Utilisateur::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'email' => $request->email,
            'motdepasse' => $request->motdepasse
        ]);

        return response()->json($utilisateur, 201);
    }

    public function show(Utilisateur $utilisateur)
    {
        return response()->json($utilisateur);
    }

    public function delete($id)
    {
        $utilisateur = Utilisateur::findOrFail($id);
        $result = $utilisateur->delete();
        if ($result) {
            return response()->json('deleteted succefully');
        }
    }

    public function login(Request $request)
    {
        $utilisateur = Utilisateur::where('email', $request->email)->first();
        if ($utilisateur && $utilisateur->motdepasse == $request->motdepasse) {
            $utilisateur->motdepasse = "";
            return response()->json($utilisateur);
        }
    }

    public function update(Request $request)
    {
        $utilisateur = Utilisateur::findOrFail($request->id);
        // La validation de données
        $this->validate($request, [
            'nom' => 'required|max:12',
            'prenom' => 'required|max:12',
            'email' => 'required|email',
        ]);

        // On modifie les informations de l'utilisateur
        $utilisateur->update([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'email' => $request->email,
        ]);

        // On retourne la réponse JSON
        return response()->json($utilisateur);
    }

    public function detail($id){
        $utilisateur = Utilisateur::findOrFail($id);
        
        if ($utilisateur) {
            return response()->json($utilisateur);
        }
    }
}
