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
                    <form action="{{route('products.store')}} " method="post" enctype="multipart/form-data" >
                    <div class="row">
                        @csrf
                        <div class="col-xl-12 col-md-12 col-12">
                            <div class="form-group">
                                <label for="name">
                                    Nom de produit
                                </label>
                                <input type="text" class="form-control" name="name" id="name" placeholder="Nom de produit" />
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-6 col-6">
                            <div class="form-group">
                                <label for="price">
                                    Prix
                                </label>
                                <input type="text" class="form-control" name="price" id="price" placeholder="Prix" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label>Catégorie </label>
                            <select class="select2 form-control form-control-lg" name="category">
                                @foreach ($categories as $category)
                                    <option value={{$category->id}}>
                                        {{$category->name}}
                                    </option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-12 mt-1">
                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea class="form-control" name="description" id="description" rows="3" placeholder="Description"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label" for="image">Image de produit </label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="image" name="image"/>
                                    <label class="custom-file-label" for="image">Choose file</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <button class="btn add-new btn-primary mt-50 btn-block" type="submit">
                                <span>
                                    Ajouter le produit
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
