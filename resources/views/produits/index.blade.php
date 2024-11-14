@extends('layouts.app')
@section('content')
@push('css')
    <link rel="stylesheet" type="text/css" href="{{asset("app-assets/vendors/css/tables/datatable/dataTables.bootstrap4.min.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("app-assets/vendors/css/tables/datatable/responsive.bootstrap4.min.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("app-assets/vendors/css/pickers/flatpickr/flatpickr.min.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset('app-assets/vendors/css/forms/select/select2.min.css')}}" />
@endpush

<section id="responsive-datatable">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header border-bottom">
                    <h4 class="card-title">
                        Liste des commandes
                    </h4>
                </div>
                <div class="card-datatable">
                    <form id="searchFilter">
                        <div class="row align-items-end mt-2 mx-2">
                            <div class="col-md-4">
                                <div class="form-group ml-2 mb-0">
                                    <label for="name">
                                        Nom de produit
                                    </label>
                                    <input type="text" class="form-control"  id="productname" placeholder="Nom de produit" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label>Catégorie </label>
                                <select class="select2 form-control form-control-lg" id="category">
                                    <option value="0" selected>Catégorie</option>
                                    @foreach ($categories as $category)
                                        <option value={{$category->id}}>
                                            {{$category->name}}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-success" type="submit" style="width: 100%">
                                    <i data-feather='filter'></i>
                                    Filter
                                </button>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-primary" type="reset" style="width: 100%">
                                    <i data-feather='refresh-ccw'></i>
                                    Reset
                                </button>
                            </div>
                        </div>
                    </form>
                    <table class="dt-responsive table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nom de produit</th>
                                <th>Category</th>
                                <th>Prix</th>
                                <th>Total De La Commande</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Nom de produit</th>
                                <th>Category</th>
                                <th>Prix</th>
                                <th>Total De La Commande</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="modal fade modal-danger text-left" id="danger" tabindex="-1" role="dialog" aria-labelledby="myModalLabel120" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="myModalLabel120">
            Supprimer le plat
        </h5>
        <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
        >
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
            êtes-vous sûr de supprimer cet élément
        </div>
        <div class="modal-footer">
            <button type="button" class="btn border-danger" data-dismiss="modal">
                Annuler
            </button>
            <button type="button" class="btn btn-danger" id="sendRemove">
                Supprimer
            </button>
        </div>
    </div>
    </div>
</div>
@push('js')
<script src="{{asset("app-assets/vendors/js/tables/datatable/jquery.dataTables.min.js")}}"></script>
<script src="{{asset("app-assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js")}}"></script>
<script src="{{asset("app-assets/vendors/js/tables/datatable/dataTables.responsive.min.js")}}"></script>
<script src="{{asset("app-assets/vendors/js/tables/datatable/responsive.bootstrap4.js")}}"></script>
<script src="{{asset("app-assets/vendors/js/pickers/flatpickr/flatpickr.min.js")}}"></script>
<script src="{{asset("datatables/produit.js")}}"></script>
<script src="{{asset('app-assets/vendors/js/forms/select/select2.full.min.js')}}"></script>
<script src="{{asset('app-assets/js/scripts/forms/form-select2.js')}}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.2.1/axios.min.js" integrity="sha512-zJYu9ICC+mWF3+dJ4QC34N9RA0OVS1XtPbnf6oXlvGrLGNB8egsEzu/5wgG90I61hOOKvcywoLzwNmPqGAdATA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
@endpush

@endsection
