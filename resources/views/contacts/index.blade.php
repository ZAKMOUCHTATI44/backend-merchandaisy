@extends('layouts.app')

@section('content')

@push('css')
    <link rel="stylesheet" type="text/css" href="{{asset("app-assets/vendors/css/tables/datatable/dataTables.bootstrap4.min.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("app-assets/vendors/css/tables/datatable/responsive.bootstrap4.min.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("app-assets/vendors/css/pickers/flatpickr/flatpickr.min.css")}}">
@endpush

 <!-- Responsive Datatable -->
 <section id="responsive-datatable">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header border-bottom">
                    <h4 class="card-title">
                        Liste des contacts
                    </h4>
                </div>
                <div class="card-datatable">
                    <table class="dt-responsive table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Object</th>
                                <th>Profile</th>
                                <th>Message</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
<!--/ Responsive Datatable -->

@push('js')
<script src="{{asset("app-assets/vendors/js/tables/datatable/jquery.dataTables.min.js")}}"></script>
<script src="{{asset("app-assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js")}}"></script>
<script src="{{asset("app-assets/vendors/js/tables/datatable/dataTables.responsive.min.js")}}"></script>
<script src="{{asset("app-assets/vendors/js/tables/datatable/responsive.bootstrap4.js")}}"></script>
<script src="{{asset("app-assets/vendors/js/pickers/flatpickr/flatpickr.min.js")}}"></script>
<script src="{{asset("datatables/contacts.js")}}"></script>

@endpush


@endsection

