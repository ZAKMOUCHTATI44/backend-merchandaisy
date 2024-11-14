@extends('layouts.app')

@push('css')
    <link rel="stylesheet" type="text/css" href="{{asset("app-assets/css/core/menu/menu-types/vertical-menu.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("app-assets/css/plugins/forms/pickers/form-flat-pickr.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("app-assets/css/pages/app-invoice.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("app-assets/css/core/menu/menu-types/vertical-menu.css") }}">
    <link rel="stylesheet" type="text/css" href="{{asset("app-assets/css/plugins/forms/form-wizard.css") }}">
    <link rel="stylesheet" type="text/css" href="{{asset("app-assets/css/plugins/forms/form-validation.css") }}">
@endpush

@section('content')
<div class="content-body">
    <section class="invoice-preview-wrapper">
        <div class="row invoice-preview">
            <!-- Invoice -->
            <div class="col-xl-9 col-md-8 col-12">
                <div class="card invoice-preview-card">
                    <div class="card-body invoice-padding pb-0">
                        <!-- Header starts -->
                        <div class="d-flex justify-content-between  invoice-spacing mt-0">
                            <div>
                                <p class="text-bold mb-25">
                                    Adresse :
                                </p>
                                <p class="card-text mb-25 pr-5">
                                    {{$order->user->adresse }}
                                </p>
                            </div>
                            <div class="mt-md-0 mt-2">
                                <div class="invoice-date-wrapper">
                                    <p class="invoice-date-title" style="width: auto !important">Date de Commande:</p>
                                    <p class="invoice-date">
                                        {{ $order->created_at }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- Header ends -->
                    </div>

                    <hr class="invoice-spacing" />

                    <!-- Address and Contact starts -->
                    <div class="card-body invoice-padding pt-0">
                        <div class="row invoice-spacing">
                            <div class="col-xl-8 p-0">
                                <h6 class="mb-2">Utilisateur :</h6>
                                <h6 class="mb-25">
                                    Nom :
                                    {{$order->user->fullName() }}
                                </h6>
                                <p class="mb-25 pr-5">
                                    Adresse :
                                    {{$order->user->adresse}}
                                </p>
                                <p class="card-text mb-25">
                                    Téléphone :
                                    {{$order->user->phone}}
                                </p>
                                <p class="card-text mb-0">
                                    Email :
                                    {{$order->user->email}}
                                </p>
                            </div>
                            <div class="col-xl-4 p-0 mt-xl-0 mt-2">
                                <h6 class="mb-2"> Détails de paiement : </h6>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="pr-1">Total De la commande :</td>
                                            <td>
                                                <span class="font-weight-bold">
                                                    {{ $order->getPrice() }} MAD
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- Address and Contact ends -->

                    <!-- Invoice Description starts -->
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="py-1"> Produit </th>
                                    <th class="py-1"> Prix </th>
                                    <th class="py-1"> Quantité </th>
                                    <th class="py-1">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($order->cartItems as $item)
                                    <tr>
                                        <td class="py-1">
                                            <p class="card-text text-nowrap">
                                                {{$item->product->title}}
                                            </p>
                                        </td>
                                        <td class="py-1">
                                            <span class="font-weight-bold">
                                                {{$item->price}} MAD
                                            </span>
                                        </td>
                                        <td class="py-1">
                                            <span class="font-weight-bold">
                                                {{$item->quantity}}
                                            </span>
                                        </td>
                                        <td class="py-1">
                                            <span class="font-weight-bold">
                                                {{ $item->price * $item->quantity }} MAD
                                            </span>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>

                    <div class="card-body invoice-padding pb-0">
                        <div class="row invoice-sales-total-wrapper">
                            <div class="col-md-6 order-md-1 order-2 mt-md-0 mt-3">
                                <p class="invoice-total-title">
                                    Notes de commande (facultatif) :
                                </p>
                                {{ $order->comment }}
                            </div>
                            <div class="col-md-6 d-flex justify-content-end order-md-2 order-1">
                                <div class="invoice-total-wrapper" style="max-width: max-content !important">
                                    <div class="invoice-total-item">
                                        <p class="invoice-total-title pr-2">Subtotal:</p>
                                        <p class="invoice-total-amount">
                                            {{ $order->getPrice() }} MAD
                                        </p>
                                    </div>
                                    @if ($order->codePromo)
                                        <div class="invoice-total-item">
                                            <p class="invoice-total-title pr-2">Code Promo :</p>
                                            <p class="invoice-total-amount">
                                                {{ $order->codePromo->discount }} %
                                            </p>
                                        </div>
                                        <div class="invoice-total-item">
                                            <p class="invoice-total-title pr-2">Total de code promo :</p>
                                            <p class="invoice-total-amount">
                                                {{ $order->calculateCodePromo() }} MAD
                                            </p>
                                        </div>
                                    @endif
                                    <hr class="my-50" />
                                    <div class="invoice-total-item">
                                        <p class="invoice-total-title pr-2">Total:</p>
                                        <p class="invoice-total-amount">
                                            {{ $order->getPrice() - $order->calculateCodePromo()}} MAD
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Invoice Description ends -->
                    <hr class="invoice-spacing" />
                </div>
            </div>
            <!-- /Invoice -->

            <!-- Invoice Actions -->
            <div class="col-xl-3 col-md-4 col-12 invoice-actions mt-md-0 mt-2">
                <div class="card">
                    <div class="card-body">
                        <div id="orderState" productState="{{$order->state}}">
                        </div>
                            {{-- @switch($order->state)
                                @case(0)
                                    <span class="badge badge-pill badge-light-danger d-block p-1 my-1">
                                        Nouveau
                                    </span>
                                    @break
                                @case(1)
                                    <span class="badge badge-pill badge-light-primary d-block p-1 my-1">
                                        en préparation
                                    </span>
                                    @break
                                @case(2)
                                    <span class="badge badge-pill badge-light-info d-block p-1 my-1">
                                        en route
                                    </span>
                                    @break
                                @case(3)
                                    <span class="badge badge-pill badge-light-success d-block p-1 my-1">
                                        livrée
                                    </span>
                                    @break
                                @case(4)
                                    <span class="badge badge-pill badge-light-warning d-block p-1 my-1">
                                        annulée
                                    </span>
                                    @break
                                @default
                            @endswitch --}}
                        <button class="btn btn-success btn-block" data-toggle="modal" data-target="#changeState">
                            Status de la commande
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="changeState" tabindex="-1" role="dialog" aria-labelledby="changeState" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="changeStateTitle">
                                            Status de la commande
                                        </h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-12 col-12">
                                              <div class="card">
                                                <div class="card-body">
                                                  <div class="form-group">
                                                    <label for="customSelect">
                                                        Status de la commande
                                                    </label>
                                                    <select class="custom-select" id="state">
                                                      <option selected>Status de la commande</option>
                                                      <option value="0" @selected(0 == $order->state ) >nouveau</option>
                                                      <option value="1" @selected(1 == $order->state ) >en préparation</option>
                                                      <option value="2" @selected(2 == $order->state ) >en route</option>
                                                      <option value="3" @selected(3 == $order->state ) >livrée</option>
                                                      <option value="4" @selected(4 == $order->state ) >annulée</option>
                                                    </select>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                    </div>
                                    <div class="modal-footer justify-content-center">
                                        <button type="button" class="btn btn-primary" id="changerStatus" orderId="{{$order->id}}" >
                                            Changer le status
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Invoice Actions -->
        </div>
    </section>
</div>
@push('js')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.2.1/axios.min.js"
    integrity="sha512-zJYu9ICC+mWF3+dJ4QC34N9RA0OVS1XtPbnf6oXlvGrLGNB8egsEzu/5wgG90I61hOOKvcywoLzwNmPqGAdATA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"></script>
<script>

        const getTheBadge=(e)=>{
            var $status_number = e;
            var $status = {
            0: { title: 'nouveau', class: 'badge-light-danger' },
            1: { title: 'en préparation', class: 'badge-light-primary' },
            2: { title: 'en route', class: 'badge-light-info' },
            3: { title: 'livrée', class: 'badge-light-success' },
            4: { title: 'annulée', class: 'badge-light-warning' }
            };
            if (typeof $status[$status_number] === 'undefined') {
                return data;
            }
            return (
                `<span class="badge badge-pill ${$status[$status_number].class} d-block p-1 my-1">
                    ${$status[$status_number].title}
                </span>`
            );
        }

        document.getElementById('orderState').innerHTML = getTheBadge(document.getElementById('orderState').getAttribute('productState'))

    document.getElementById('changerStatus').onclick=(e)=>{
        axios.put(`/commandes/${e.target.getAttribute('orderId')}`,{state:document.getElementById('state').value})
        .then(res => {
            $('#changeState').modal('hide');
            document.getElementById('orderState').innerHTML = getTheBadge(document.getElementById('state').value)
        })
        .catch(err=>console.log(err))
    }

</script>

@endpush
@endsection
