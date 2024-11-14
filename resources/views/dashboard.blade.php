@extends('layouts.app')

@section('content')

    @push('css')
        <link rel="stylesheet" type="text/css" href="{{asset("app-assets/css/plugins/charts/chart-apex.css")}}">
        <link rel="stylesheet" type="text/css" href="{{asset("app-assets/vendors/css/pickers/flatpickr/flatpickr.min.css")}}">
        <link rel="stylesheet" type="text/css" href="{{asset("app-assets/css/plugins/forms/pickers/form-flat-pickr.css")}}">
    @endpush

    <section id="dashboard-ecommerce">
        <div class="row match-height">
            <div class="col-xl-12 col-md-12 col-12">
                <div class="card card-statistics">
                    <div class="card-header">
                        <h4 class="card-title">Statistiques</h4>
                    </div>
                    <div class="card-body statistics-body">
                        <div class="row">
                            <div class="col-xl-3 col-sm-6 col-12">
                                <div class="media">
                                    <div class="avatar bg-light-primary mr-2">
                                        <div class="avatar-content">
                                            <i data-feather="trending-up" class="avatar-icon"></i>
                                        </div>
                                    </div>
                                    <div class="media-body my-auto">
                                        <h4 class="font-weight-bolder mb-0">{{$count_year}}</h4>
                                        <p class="card-text font-small-3 mb-0">
                                            Cette année
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 col-12">
                                <div class="media">
                                    <div class="avatar bg-light-info mr-2">
                                        <div class="avatar-content">
                                            <i data-feather="user" class="avatar-icon"></i>
                                        </div>
                                    </div>
                                    <div class="media-body my-auto">
                                        <h4 class="font-weight-bolder mb-0">{{$count_month}}</h4>
                                        <p class="card-text font-small-3 mb-0">
                                            Ce mois-ci
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 col-12">
                                <div class="media">
                                    <div class="avatar bg-light-danger mr-2">
                                        <div class="avatar-content">
                                            <i data-feather="box" class="avatar-icon"></i>
                                        </div>
                                    </div>
                                    <div class="media-body my-auto">
                                        <h4 class="font-weight-bolder mb-0">{{$count_week}}</h4>
                                        <p class="card-text font-small-3 mb-0">
                                            Cette semaine
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 col-12">
                                <div class="media">
                                    <div class="avatar bg-light-success mr-2">
                                        <div class="avatar-content">
                                            <i data-feather="dollar-sign" class="avatar-icon"></i>
                                        </div>
                                    </div>
                                    <div class="media-body my-auto">
                                        <h4 class="font-weight-bolder mb-0">
                                            {{$count_today}}
                                        </h4>
                                        <p class="card-text font-small-3 mb-0">
                                            Aujourd'hui
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-sm-6 col-12">
                <div class="card">
                    <div class="card-header flex-column align-items-start pb-0">
                        <div class="avatar bg-light-primary p-50 m-0">
                            <div class="avatar-content">
                                <i data-feather="users" class="font-medium-5"></i>
                            </div>
                        </div>
                        <h2 class="font-weight-bolder mt-1">
                            {{number_format((float)$ticket_moyen_week, 2, '.', '') }} MAD
                        </h2>
                        <p class="card-text">Ticket Moyen de cette semaine</p>
                    </div>
                    <div id="gained-chart"></div>
                </div>
            </div>
            <div class="col-lg-6 col-sm-6 col-12">
                <div class="card">
                    <div class="card-header flex-column align-items-start pb-0">
                        <div class="avatar bg-light-warning p-50 m-0">
                            <div class="avatar-content">
                                <i data-feather="package" class="font-medium-5"></i>
                            </div>
                        </div>
                        <h2 class="font-weight-bolder mt-1">
                            {{number_format((float)$ticket_moyen_month, 2, '.', '') }} MAD
                        </h2>
                        <p class="card-text">Ticket Moyen de Ce mois-ci</p>
                    </div>
                    <div id="order-chart"></div>
                </div>
            </div>
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start">
                        <div>
                            <h4 class="card-title mb-25">
                                Vente par Heure
                            </h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <div id="line-chart" data="{{ $ventes_with_hours }}"></div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="card card-browser-states">
                    <div class="card-header">
                        <div>
                            <h4 class="card-title">
                                Statistiques de conversion
                            </h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="browser-states">
                            <div class="media">
                                <h6 class="align-self-center mb-0">
                                    Taux d’ajout au panier
                                </h6>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="font-weight-bold text-body-heading mr-1">
                                   {{ $taux_panier }} %
                                </div>
                                <div id="browser-state-chart-primary"></div>
                            </div>
                        </div>
                        <div class="browser-states">
                            <div class="media">
                                <h6 class="align-self-center mb-0">
                                    Taux de conversion
                                </h6>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="font-weight-bold text-body-heading mr-1">
                                    {{$taux_de_conversion}} %
                                </div>
                                <div id="browser-state-chart-warning" data="{{$taux_de_conversion}}"></div>
                            </div>
                        </div>
                        <div class="browser-states">
                            <div class="media">
                                <h6 class="align-self-center mb-0">
                                    Chiffre d’affaire / Visiteur
                                </h6>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="font-weight-bold text-body-heading mr-1">
                                    {{$chiffers_affaire_visiteur}} %
                                </div>
                                <div id="browser-state-chart-secondary" data="{{$chiffers_affaire_visiteur}}"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12" style="display:none">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
                        <div class="header-left">
                            <h4 class="card-title">
                                Vente par quartier
                            </h4>
                        </div>
                    </div>
                    {{-- {{ $sectours }} --}}
                    <div class="card-body">
                        <input type="hidden" id="vente_par_quartier" value="{{$ventes_par_quartier}}" >
                        <canvas class="bar-chart-ex chartjs" data-height="400"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </section>

    @push('js')
        <script src="{{asset("app-assets/vendors/js/charts/apexcharts.min.js")}}"></script>
        <script src="{{asset("app-assets/js/scripts/charts/chart-apex.js")}}"></script>
        <script src="{{asset("app-assets/vendors/js/charts/chart.min.js")}}"></script>
        <script src="{{asset("app-assets/js/scripts/charts/chart-chartjs.js")}}"></script>
        <script src="{{asset('app-assets/vendors/js/pickers/flatpickr/flatpickr.min.js')}}"></script>
        <script src="{{asset("app-assets/js/scripts/pages/dashboard-ecommerce.js")}}"></script>
        <script src="{{asset("app-assets/js/scripts/pages/dashboard-analytics.js")}}"></script>
        <script src="{{asset('scripts/dashborad.js')}}"></script>
    @endpush
@endsection
