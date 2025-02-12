<?php

namespace App\Http\Controllers;
use App\Models\Projects;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function create()
    {
        return view('projects.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'titre' => 'required|max:255',
            'description' => 'required',
            'image' => 'nullable|image',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('projects', 'public');
        }

        Projects::create([
            'titre' => $request->titre,
            'description' => $request->description,
            'image' => $imagePath,
        ]);

        return redirect()->route('projects.create')->with('success', 'Projet ajouté avec succès.');
    }
}