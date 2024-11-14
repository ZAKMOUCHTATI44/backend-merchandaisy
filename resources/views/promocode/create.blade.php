@extends('layouts.app')

@section('content')
@push('css')
    <link rel="stylesheet" type="text/css" href="{{asset('app-assets/vendors/css/forms/select/select2.min.css')}}" />
    <link rel="stylesheet" type="text/css" href="{{asset('app-assets/vendors/css/pickers/pickadate/pickadate.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('app-assets/vendors/css/pickers/flatpickr/flatpickr.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset("app-assets/css/plugins/forms/pickers/form-flat-pickr.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("app-assets/css/plugins/forms/pickers/form-pickadate.css")}}">
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
                    <form action="{{route('promocode.store')}}" method="post">
                        @csrf
                        <div class="row justify-content-center">
                            <div class="col-5">
                                <div class="form-group">
                                    <label for="codepromo">
                                        Code Promo
                                    </label>
                                    <input type="text" class="form-control" name="codepromo" id="codepromo" placeholder="Code Promo" />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="form-group">
                                    <label for="valeur">
                                        Valeur
                                    </label>
                                    <input type="text" class="form-control" name="valeur" id="valeur" placeholder="Valeur" />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="form-group">
                                    <label for="limit">
                                        Nombre d'utilisation
                                    </label>
                                    <input type="text" class="form-control" name="limit" id="limit" placeholder="d'utilisation" />
                                </div>
                            </div>
                            <div class="col-md-5 form-group">
                                <label for="fp-default">Date de fin</label>
                                <input type="text" id="fp-default" name="reserved_at" class="form-control flatpickr-basic" placeholder="YYYY-MM-DD" />
                            </div>
                            <div class="col-md-10">
                                <button class="btn add-new btn-success mt-50 btn-block" type="submit">
                                    <span>
                                        Ajouter le code promo
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
    <script src="{{asset("app-assets/vendors/js/pickers/pickadate/picker.js")}}"></script>
    <script src="{{asset("app-assets/vendors/js/pickers/pickadate/picker.date.js")}}"></script>
    <script src="{{asset("app-assets/vendors/js/pickers/pickadate/picker.time.js")}}"></script>
    <script src="{{asset("app-assets/vendors/js/pickers/pickadate/legacy.js")}}"></script>
    <script src="{{asset("app-assets/vendors/js/pickers/flatpickr/flatpickr.min.js")}}"></script>
    <script src="{{asset("app-assets/js/scripts/forms/pickers/form-pickers.js")}}"></script>

@endpush
@endsection
