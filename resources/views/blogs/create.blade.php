@extends('layouts.app')

@section('content')

    @push('css')
        <link rel="stylesheet" type="text/css" href="{{asset('app-assets/vendors/css/forms/select/select2.min.css')}}" />
        <link rel="stylesheet" type="text/css" href="{{asset("app-assets/vendors/css/editors/quill/katex.min.css")}}">
        <link rel="stylesheet" type="text/css" href="{{asset("app-assets/vendors/css/editors/quill/monokai-sublime.min.css")}}">
        <link rel="stylesheet" type="text/css" href="{{asset("app-assets/vendors/css/editors/quill/quill.snow.css")}}">
        <link rel="stylesheet" type="text/css" href="{{asset("app-assets/vendors/css/editors/quill/quill.bubble.css")}}">
    @endpush

    <section id="basic-input">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">
                            Créer un Post
                        </h4>
                    </div>
                    <div class="card-body">
                        <form action="{{route('blogs.store')}} " method="post" enctype="multipart/form-data" >
                        <div class="row">
                            @csrf
                            <div class="col-xl-12 col-md-12 col-12">
                                <div class="form-group">
                                    <label for="name">
                                        Titre de post
                                    </label>
                                    <input type="text" class="form-control" name="titre" id="name" placeholder="Titre de post" />
                                    <label>
                                        Pour Retourner a la ligne tapez &lt;br /&gt;
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label>Catégorie </label>
                                <select class="select2 form-control form-control-lg" name="category">
                                    @foreach ($tags as $tag)
                                        <option value={{$tag->id}}>
                                            {{$tag->name}}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-xl-6">
                                <div class="form-group">
                                    <label for="time_of_read">
                                        Temps de lecture
                                    </label>
                                    <input type="text" class="form-control" name="time_of_read" id="time_of_read" placeholder="Temps de lecture" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="form-label" for="image">Miniature </label>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="image" name="image"/>
                                        <label class="custom-file-label" for="image">Choose file</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div id="snow-wrapper">
                                    <input type="hidden" name="content" id="output-html">
                                    <div id="snow-container">
                                        <div class="quill-toolbar">
                                            <span class="ql-formats">
                                                <select class="ql-header">
                                                    <option value="1">Heading</option>
                                                    <option value="2">Subheading</option>
                                                    <option selected>Normal</option>
                                                </select>
                                                <select class="ql-font">
                                                    <option selected>Sailec Light</option>
                                                    <option value="sofia">Sofia Pro</option>
                                                    <option value="slabo">Slabo 27px</option>
                                                    <option value="roboto">Roboto Slab</option>
                                                    <option value="inconsolata">Inconsolata</option>
                                                    <option value="ubuntu">Ubuntu Mono</option>
                                                </select>
                                            </span>
                                            <span class="ql-formats">
                                                <button class="ql-bold"></button>
                                                <button class="ql-italic"></button>
                                                <button class="ql-underline"></button>
                                            </span>
                                            <span class="ql-formats">
                                                <button class="ql-list" value="ordered"></button>
                                                <button class="ql-list" value="bullet"></button>
                                            </span>
                                            <span class="ql-formats">
                                                <button class="ql-link"></button>
                                                <button class="ql-image"></button>
                                                <button class="ql-video"></button>
                                            </span>
                                            <span class="ql-formats">
                                                <button class="ql-formula"></button>
                                                <button class="ql-code-block"></button>
                                            </span>
                                            <span class="ql-formats">
                                                <button class="ql-clean"></button>
                                            </span>
                                        </div>
                                        <div class="editor"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <button class="btn add-new btn-success mt-50 btn-block" type="submit">
                                    <span>
                                        Créer un Post
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
        <script src="{{asset("app-assets/vendors/js/editors/quill/katex.min.js")}}"></script>
        <script src="{{asset("app-assets/vendors/js/editors/quill/highlight.min.js")}}"></script>
        <script src="{{asset("app-assets/vendors/js/editors/quill/quill.min.js")}}"></script>
        <script src="{{asset("app-assets/js/scripts/forms/form-quill-editor.js")}}"></script>

    @endpush

@endsection
