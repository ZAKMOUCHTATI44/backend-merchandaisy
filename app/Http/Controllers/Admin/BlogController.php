<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Tag;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

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
        return view('blogs.index', compact('tags'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $tags = Tag::all();
        return view('blogs.create', compact('tags'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $path = null;
        if ($request->hasFile('image')) {
            $path = "/storage/" . Storage::putFile('blogs', $request->file('image'));
        }
        Blog::create([
            'title' => $request->titre,
            'slug' => Str::slug($request->titre),
            'picture' => $path,
            'content' => $request->content,
            'time_of_read' => $request->time_of_read,
            'tag_id' => $request->category
        ]);
        return redirect()->route('blogs.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Blog $blog)
    {
        $tags = Tag::all();
        return view('blogs.edit', compact('blog', 'tags'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Blog $blog)
    {
        $path = $blog->picture;
        $content = $blog->content;
        if ($request->hasFile('image')) {
            $path = "/storage/" . Storage::putFile('blogs', $request->file('image'));
        }
        if ($request->content) {
            $content = $request->content;
        }
        $blog->update([
            'title' => $request->titre,
            'slug' => Str::slug($request->titre),
            'picture' => $path,
            'content' => $content,
            'time_of_read' => $request->time_of_read,
            'tag_id' => $request->category,
            "is_active" => $request->is_active ?? true
        ]);
        return redirect()->route('blogs.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blog $blog)
    {
        $blog->delete();
        return response()->json([
            'msg' => "Blog Has Been Deleted"
        ]);
    }
    public function datatable(Request $request)
    {
        $blogs = Blog::when($request->category != "0", function (Builder $query) use ($request) {
            $query->where('tag_id', $request->category);
        })->when($request->title, function (Builder $query) use ($request) {
            $query->where('title', 'like', "%{$request->title}%");
        })
            ->with('tag')
            ->orderBy('created_at', 'desc')
            ->get();
        return datatables()
            ->of($blogs)
            ->addColumn('categoryName', function ($blog) {
                return $blog->tag->name;
            })
            ->addColumn('date', function ($blog) {
                return Carbon::parse($blog->created_at)->format('d-m-Y');
            })
            ->make(true);
    }
}
