<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;





class TaskController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'completed' => 'boolean',
        ]);

        // Store task locally
        $task = Task::create($validated);

        // Post task to external API
        $response = Http::post('https://67911187af8442fd7378e736.mockapi.io/tasks', $validated);
        $task->external_id = $response->json('id');
        $task->save();

        return response()->json($task, 201);
    }

    public function index()
    {
        $localTasks = Task::all();
        $externalTasks = Http::get('https://67911187af8442fd7378e736.mockapi.io/tasks')->json();

        return response()->json($localTasks->concat($externalTasks));
    }
}
