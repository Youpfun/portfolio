<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).










# Tutoriel : Ajouter un Projet dans une Base de Données avec Laravel

Ce guide vous explique comment ajouter un projet dans une base de données en utilisant Laravel, de la configuration à l'affichage des messages de succès.

---

## 1. Configurer la Base de Données

Vérifiez que votre fichier `.env` contient les bonnes informations de connexion :

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nom_de_votre_base
DB_USERNAME=votre_utilisateur
DB_PASSWORD=votre_mot_de_passe
```

Exécutez ensuite la commande suivante pour appliquer les changements :

```bash
php artisan config:cache
```

---

## 2. Créer une Migration

Générez une migration pour la table `projects` :

```bash
php artisan make:migration create_projects_table
```

Dans le fichier de migration généré (`database/migrations/XXXX_XX_XX_create_projects_table.php`), ajoutez les champs suivants :

```php
public function up()
{
    Schema::create('projects', function (Blueprint $table) {
        $table->id();
        $table->string('titre');
        $table->text('description');
        $table->string('image')->nullable();
        $table->timestamps();
    });
}
```

Appliquez ensuite la migration :

```bash
php artisan migrate
```

---

## 3. Créer un Modèle

Créez le modèle `Project` pour interagir avec la base de données :

```bash
php artisan make:model Project
```

Dans `app/Models/Project.php`, définissez les champs remplissables :

```php
class Project extends Model
{
    use HasFactory;
    protected $fillable = ['titre', 'description', 'image'];
}
```

---

## 4. Créer un Contrôleur

Générez un contrôleur pour gérer les projets :

```bash
php artisan make:controller ProjectsController
```

Ajoutez les méthodes suivantes dans `app/Http/Controllers/ProjectsController.php` :

```php
use Illuminate\Http\Request;
use App\Models\Project;

class ProjectsController extends Controller
{
    public function create()
    {
        return view('projects.create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'titre' => 'required|max:255',
            'description' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('projects', 'public');
        }

        Project::create([
            'titre' => $validatedData['titre'],
            'description' => $validatedData['description'],
            'image' => $imagePath,
        ]);

        return redirect()->route('projects.create')->with('success', 'Projet ajouté avec succès.');
    }
}
```

---

## 5. Définir les Routes

Ajoutez les routes dans `routes/web.php` :

```php
use App\Http\Controllers\ProjectsController;

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard/projects/create', [ProjectsController::class, 'create'])->name('projects.create');
    Route::post('/dashboard/projects', [ProjectsController::class, 'store'])->name('projects.store');
});
```

---

## 6. Créer le Formulaire de Création

Créez le fichier `resources/views/projects/create.blade.php` :

```php
@extends('layouts.app')

@section('content')
<div class="container mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold mb-6">Ajouter un Projet</h1>

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

        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Ajouter Projet
        </button>
    </form>
</div>
@endsection
```

---

## 7. Rendre les Images Accessibles

Exécutez la commande suivante pour créer un lien symbolique permettant d'afficher les images uploadées :

```bash
php artisan storage:link
```

Vous pourrez ensuite afficher une image dans Blade avec :

```php
<img src="{{ asset('storage/' . $project->image) }}" alt="Image du projet">
```

---

## 🎥 Tutoriel Vidéo

Vous pouvez suivre ce tutoriel vidéo pour plus de détails :
[LaraGuide 012 - Insertions en base de données avec Laravel Eloquent](https://www.youtube.com/watch?v=lPSg8LBFzZQ)

---

🚀 Vous êtes maintenant prêt à ajouter et afficher des projets dans votre base de données Laravel !

