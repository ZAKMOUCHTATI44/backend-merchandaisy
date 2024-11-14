@extends('layouts.app')

@section('content')

@push('css')


@endpush

<div class="content-wrapper">
    <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
            <div class="row breadcrumbs-top">
                <div class="col-12">
                    <h2 class="content-header-title float-left mb-0">Paramètres du compte</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="content-body">
        <!-- account setting page -->
        <section id="page-account-settings">
            <div class="row">
                <!-- left menu section -->
                <div class="col-md-3 mb-2 mb-md-0">
                    <ul class="nav nav-pills flex-column nav-left">
                        <!-- general -->
                        <li class="nav-item">
                            <a class="nav-link active" id="account-pill-general" data-toggle="pill" href="#account-vertical-general" aria-expanded="true">
                                <i data-feather="user" class="font-medium-3 mr-1"></i>
                                <span class="font-weight-bold">
                                    General
                                </span>
                            </a>
                        </li>
                        <!-- change password -->
                        <li class="nav-item">
                            <a class="nav-link" id="account-pill-password" data-toggle="pill" href="#account-vertical-password" aria-expanded="false">
                                <i data-feather="lock" class="font-medium-3 mr-1"></i>
                                <span class="font-weight-bold">
                                    Changer le mot de passe
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!--/ left menu section -->

                <!-- right content section -->
                <div class="col-md-9">
                    <div class="card">
                        <div class="card-body">
                            <div class="tab-content">
                                <!-- general tab -->
                                <div role="tabpanel" class="tab-pane active" id="account-vertical-general" aria-labelledby="account-pill-general" aria-expanded="true">
                                    <!-- form -->
                                    <form action="{{route('users.update',['user'=>Auth::user()->id])}}" method="POST" class="validate-form mt-2">
                                        @csrf
                                        @method("PATCH")
                                        <div class="row">
                                            <div class="col-12 col-sm-6">
                                                <div class="form-group">
                                                    <label for="account-username">Nom</label>
                                                    <input type="text" class="form-control" id="account-username" name="firstname" placeholder="Nom" value="{{Auth::user()->firstname}}" />
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-6">
                                                <div class="form-group">
                                                    <label for="account-name">Prénom</label>
                                                    <input type="text" class="form-control" id="account-name" name="lastname" placeholder="Prénom" value="{{Auth::user()->lastname}}" />
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-6">
                                                <div class="form-group">
                                                    <label for="account-e-mail">E-mail</label>
                                                    <input type="email" class="form-control" id="account-e-mail" name="email" placeholder="E-mail" value="{{Auth::user()->email}}" />
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-6">
                                                <div class="form-group">
                                                    <label for="account-company">Téléphone</label>
                                                    <input type="text" class="form-control" id="account-company" name="phone" placeholder="Téléphone" value="{{Auth::user()->phone}}" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <button type="submit" class="btn btn-success mt-2 mr-1">
                                                    Sauvegarder les modifications
                                                </button>
                                                <button type="reset" class="btn btn-outline-secondary mt-2">
                                                    Annuler
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <!--/ form -->
                                </div>
                                <!--/ general tab -->

                                <!-- change password -->
                                <div class="tab-pane fade" id="account-vertical-password" role="tabpanel" aria-labelledby="account-pill-password" aria-expanded="false">
                                    <!-- form -->
                                    <form class="validate-form">
                                        <div class="row">
                                            <div class="col-12 col-sm-6">
                                                <div class="form-group">
                                                    <label for="account-old-password">
                                                        Ancien mot de passe
                                                    </label>
                                                    <div class="input-group form-password-toggle input-group-merge">
                                                        <input type="password" class="form-control" id="account-old-password" name="password" placeholder="Old Password" />
                                                        <div class="input-group-append">
                                                            <div class="input-group-text cursor-pointer">
                                                                <i data-feather="eye"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12 col-sm-6">
                                                <div class="form-group">
                                                    <label for="account-new-password">
                                                        Nouveau mot de passe
                                                    </label>
                                                    <div class="input-group form-password-toggle input-group-merge">
                                                        <input type="password" id="account-new-password" name="new-password" class="form-control" placeholder="New Password" />
                                                        <div class="input-group-append">
                                                            <div class="input-group-text cursor-pointer">
                                                                <i data-feather="eye"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-6">
                                                <div class="form-group">
                                                    <label for="account-retype-new-password">
                                                        Re-taper le nouveau mot de passe
                                                    </label>
                                                    <div class="input-group form-password-toggle input-group-merge">
                                                        <input type="password" class="form-control" id="account-retype-new-password" name="confirm-new-password" placeholder="New Password" />
                                                        <div class="input-group-append">
                                                            <div class="input-group-text cursor-pointer"><i data-feather="eye"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <button type="submit" class="btn btn-success mr-1 mt-1">
                                                    Sauvegarder les modifications
                                                </button>
                                                <button type="reset" class="btn btn-outline-secondary mt-1">Cancel</button>
                                            </div>
                                        </div>
                                    </form>
                                    <!--/ form -->
                                </div>
                                <!--/ change password -->
                            </div>
                        </div>
                    </div>
                </div>
                <!--/ right content section -->
            </div>
        </section>
        <!-- / account setting page -->

    </div>
</div>

@endsection
