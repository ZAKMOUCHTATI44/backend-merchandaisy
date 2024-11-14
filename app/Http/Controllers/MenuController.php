<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Database\Eloquent\Builder;


class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $categories = Category::all();
        $products = Product::all();
        
        return response()->json([
            "categories" => $categories
        ]);
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
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function filter(Request $request)
    {
        $params = $request->query();
        $products = Product::where('title', 'like', "%{$request->name}%")->orderBy('created_at', 'desc')
            ->when($request->price && $request->price !== "undefined", function (Builder $query) use ($request) {
                $prices = explode(',', $request->price);
                $query->whereBetween('price', [$prices[0], $prices[1]]);
            })
            ->when($request->categories !== null, function (Builder $query) use ($request) {
                $categories = explode(',', $request->categories);
                $query->whereIn('category_id', $categories);
            })
            ->get();
        $categories = $request->categories;
        $products->transform(function ($product) {
            // Assuming the image field contains a relative path and we want to add the full URL
            $product->picture = url($product->image); // Generates the full URL with base
            return $product;
        });

        return response()->json(compact('products', 'categories'));
    }
}
