<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tags = Tag::all();
        $blogs_nutritions = Blog::whereHas('tag', function (Builder $query) {
            $query->where('name', 'Nutrition');
        })->where('is_active', true)->limit(6)->orderBy('created_at', 'desc')->get();

        $blogs_entrainements = Blog::whereHas('tag', function (Builder $query) {
            $query->where('name', 'Entrainements');
        })->where('is_active', true)->orderBy('created_at', 'desc')->first();

        $blogs_lifestyle = Blog::whereHas('tag', function (Builder $query) {
            $query->where('name', 'Lifestyle');
        })->where('is_active', true)->limit(1)->orderBy('created_at', 'desc')->get();

        return Inertia::render('Blog', compact('tags', 'blogs_nutritions', 'blogs_entrainements', 'blogs_lifestyle'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $blog = Blog::where('slug', $slug)->firstOrFail();

        return Inertia::render('Blog/Show', compact('blog'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Blog $blog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blog $blog)
    {
        //
    }
}
