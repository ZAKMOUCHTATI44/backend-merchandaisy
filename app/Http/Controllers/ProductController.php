<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $categories = Category::all();
        return view('produits.index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();
        return view("produits.create", compact('categories'));
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
            $path = "/storage/" . Storage::putFile('image', $request->file('image'));
        }
        Product::create([
            "title" => $request->name,
            "description" => $request->description,
            "price" => intval($request->price),
            "image" => $path,
            "category_id" => $request->category,
            // "prot" => floatval($request->prot),
            // "carbs" => floatval($request->carbs),
            // "fat" => floatval($request->fat),
            // "fibers" => floatval($request->fibers),
            // "kcal" => floatval($request->kcal),
            // "tag" => $request->tag
        ]);
        return redirect()->route('products.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        $categories = Category::all();

        return view("produits.edit", compact('product', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {

        $path = $product->image;
        if ($request->hasFile('image')) {
            $path = "/storage/" . Storage::putFile('image', $request->file('image'));
        }
        $product->update([
            "title" => $request->name,
            "description" => $request->description,
            "price" => intval($request->price),
            "image" => $path,
            "category_id" => $request->category,
            "prot" => floatval($request->prot),
            "carbs" => floatval($request->carbs),
            "fat" => floatval($request->fat),
            "fibers" => floatval($request->fibers),
            "kcal" => floatval($request->kcal),
            "tag" => $request->tag,
            "out_of_stock" => $request->out_of_stock ? true : false
        ]);
        return redirect()->route('listProducts');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json([
            'status' => "Product Has benn removed"
        ]);
    }
    public function datatable(Request $request)
    {
        // dd($request->category, $request->productname);
        $products = Product::when($request->category != "0", function (Builder $query) use ($request) {
            $query->where('category_id', $request->category);
        })->when($request->productname, function (Builder $query) use ($request) {
            $query->where('title', 'like', "%{$request->productname}%");
        })
            ->with('category')
            ->withCount('cartItems')
            ->orderBy('created_at', 'desc')
            ->get();
        return datatables()
            ->of($products)
            ->addColumn('categoryName', function ($product) {
                return $product->category->name;
            })
            ->make(true);
    }
}
