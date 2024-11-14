@extends('layouts.app')
@section('content')
@push('css')
    <link rel="stylesheet" type="text/css" href="{{asset("app-assets/vendors/css/tables/datatable/dataTables.bootstrap4.min.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("app-assets/vendors/css/tables/datatable/responsive.bootstrap4.min.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("app-assets/vendors/css/pickers/flatpickr/flatpickr.min.css")}}">
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
                <form id="searchFilter">
                    <div class="row align-items-end mt-2 mx-2">
                        <div class="col-md-4">
                            <label>Status de la commande </label>
                            <select class="select2 form-control" id="category">
                                <option value="-1" selected>Status de la commande</option>
                                <option value="0">nouveau</option>
                                <option value="1">en préparation</option>
                                <option value="2">en route</option>
                                <option value="3">livrée</option>
                                <option value="4">annulée</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label for="OrderDate">Range</label>
                            <input type="text" id="OrderDate" class="form-control" placeholder="YYYY-MM-DD to YYYY-MM-DD" />
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
                <div class="card-datatable">
                    <table class="dt-responsive table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Utilisateur</th>
                                <th>Télephone</th>
                                <th>Total De La Commande</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Utilisateur</th>
                                <th>Télephone</th>
                                <th>Total De La Commande</th>
                                <th>Date</th>
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
@push('js')
    <script src="{{asset("app-assets/vendors/js/tables/datatable/jquery.dataTables.min.js")}}"></script>
    <script src="{{asset("app-assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js")}}"></script>
    <script src="{{asset("app-assets/vendors/js/tables/datatable/dataTables.responsive.min.js")}}"></script>
    <script src="{{asset("app-assets/vendors/js/tables/datatable/responsive.bootstrap4.js")}}"></script>
    <script src="{{asset("app-assets/vendors/js/pickers/flatpickr/flatpickr.min.js")}}"></script>
    <script src="{{asset("datatables/commandes.js")}}"></script>
@endpush

@endsection
