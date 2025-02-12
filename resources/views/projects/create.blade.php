<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite(['resources/css/app.css'])
    <title>Create Project</title>
</head>
<body class="bg-gray-900">

<div class="container mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold mb-6">Ajouter un Projet</h1>
    <h2 class=" text-xl font-bold mb-6">Ajouter un Projet</h2>


    @if ($errors->any())
        <div class="bg-red-500 p-4 rounded mb-4">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('projects.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        
        <div class="mb-4">
            <label for="titre" class="block text-sm font-medium">Titre</label>
            <input type="text" name="titre" id="titre" class="w-full p-2 rounded bg-gray-800 border border-gray-700">
        </div>

        <div class="mb-4">
            <label for="description" class="block text-sm font-medium">Description</label>
            <textarea name="description" id="description" class="w-full p-2 rounded bg-gray-800 border border-gray-700"></textarea>
        </div>

        <div class="mb-4">
            <label for="image" class="block text-sm font-medium">Image</label>
            <input type="file" name="image" id="image" class="w-full p-2 rounded bg-gray-800 border border-gray-700">
        </div>

        <button type="submit" class="bg-pink-400 hover:bg-pink-600 text-purple-100 px-4 py-2 rounded">
            Ajouter Projet
        </button>
    </form>
</div>


</body>
</html>