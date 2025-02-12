<?php
use App\Http\Controllers\ProjectsController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
    Route::get('/dashboard/projects/edit', function () {
        return view('projects.edit');
    })->name('projects.edit');
    Route::get('/dashboard/projects/create', [ProjectsController::class, 'create'])->name('projects.create');
    Route::post('/dashboard/projects', [ProjectsController::class, 'store'])->name('projects.store');
});
