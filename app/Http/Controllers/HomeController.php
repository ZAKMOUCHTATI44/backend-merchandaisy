<?php

namespace App\Http\Controllers;

use App\Models\Athlete;
use App\Models\Blog;
use App\Models\Plan;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $athletes = Athlete::select('name', 'image', 'id')->get();

        $blogs = Blog::whereHas('tag', function (Builder $query) {
            $query->where('name', 'Basics');
        })->limit(3)->orderBy('created_at', 'desc')->get();

        $plans = Plan::all();

        return Inertia::render('Home', compact('athletes', 'blogs', 'plans'));
    }
}
