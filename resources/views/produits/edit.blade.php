@extends('layouts.app')

@section('content')
@push('css')
    <link rel="stylesheet" type="text/css" href="{{asset('app-assets/vendors/css/forms/select/select2.min.css')}}" />
@endpush
<section id="basic-input">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">
                        Ajouter un Produit
                    </h4>
                </div>
                <div class="card-body">
                    <form action="{{route('products.update',['product'=>$product])}} " method="post" enctype="multipart/form-data" >
                    <div class="row">
                        @csrf
                        @method("PATCH")
                        <div class="col-xl-12 col-md-12 col-12">
                            <div class="form-group">
                                <label for="name">
                                    Nom de produit
                                </label>
                                <input type="text" value="{{$product->title}}" class="form-control" name="name" id="name" />
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 col-4">
                            <div class="form-group">
                                <label for="prot">
                                    Prot
                                </label>
                                <input type="text" class="form-control" name="prot" id="prot" value="{{$product->prot}}" />
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 col-4">
                            <div class="form-group">
                                <label for="carbs">
                                    Carbs
                                </label>
                                <input type="text" class="form-control" name="carbs" id="carbs" value="{{$product->carbs}}" />
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 col-4">
                            <div class="form-group">
                                <label for="fat">
                                    Fat
                                </label>
                                <input type="text" class="form-control" name="fat" id="fat" value="{{$product->fat}}" />
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 col-4">
                            <div class="form-group">
                                <label for="fibers">
                                    Fibers
                                </label>
                                <input type="text" class="form-control" name="fibers" id="fibers" value="{{$product->fibers}}" />
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 col-4">
                            <div class="form-group">
                                <label for="kcal">
                                    Kcal
                                </label>
                                <input type="text" class="form-control" name="kcal" id="kcal" value="{{$product->kcal}}" />
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 col-4">
                            <div class="form-group">
                                <label for="price">
                                    Prix
                                </label>
                                <input type="text" class="form-control" name="price" id="price" value="{{$product->price}}" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label>Catégorie </label>
                            <select class="select2 form-control form-control-lg" name="category">
                                @foreach ($categories as $category)
                                    <option value={{$category->id}}  @selected($product->category_id == $category->id)>
                                        {{$category->name}}
                                    </option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="Tag">
                                    Tag
                                </label>
                                <input type="text" class="form-control" name="tag" id="Tag" value="{{$product->tag}}" />
                            </div>
                        </div>
                        <div class="col-12 mt-1">
                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea class="form-control" name="description" id="description" rows="3" placeholder="Description">{{$product->description}}</textarea>
                            </div>
                        </div>
                        <div class="col-12 mt-1">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="out_of_stock" name="out_of_stock" value="1" @checked($product->out_of_stock) />
                                <label class="form-check-label" for="out_of_stock">En rupture de stock</label>
                            </div>
                        </div>
                        <div class="col-md-12 mt-1">
                            <div class="form-group">
                                <label class="form-label" for="image">Image de produit </label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="image" name="image"/>
                                    <label class="custom-file-label" for="image">Choose file</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <button class="btn add-new btn-warning mt-50 btn-block" type="submit">
                                <span>
                                    Editer le produit
                                </span>
                            </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
@push('js')
    <script src="{{asset('app-assets/vendors/js/forms/select/select2.full.min.js')}}"></script>
    <script src="{{asset('app-assets/js/scripts/forms/form-select2.js')}}"></script>
@endpush

@endsection
