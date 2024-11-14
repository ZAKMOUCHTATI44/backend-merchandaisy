<!-- BEGIN: Main Menu-->
 <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
    <div class="navbar-header">
        <ul class="nav navbar-nav flex-row mt-1">
            <li class="nav-item mr-auto">
                <a href="/dashboard">
                    <img src="https://www.merchandisy.com/_next/image?url=%2Flogo.png&w=384&q=75" width="150" alt="logo pro fit">
                </a>
            </li>
            <li class="nav-item nav-toggle">
                <a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse">
                    <i class="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x"></i>
                    <i class="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary" data-feather="disc" data-ticon="disc"></i>
                </a>
            </li>
        </ul>
    </div>
    <div class="shadow-bottom"></div>
    <div class="main-menu-content">
        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">

            <li class=" navigation-header">
                <span data-i18n="Apps &amp; Pages">
                    Menu
                </span>
                <i data-feather="more-horizontal"></i>
            </li>
            <li class="nav-item">
                <a class="d-flex align-items-center" href="{{route('dashboard.index')}}">
                    <i data-feather="home"></i>
                    <span class="menu-title text-truncate">
                        Tableau de bord
                    </span>
                </a>
            </li>
            <li class=" nav-item">
                <a class="d-flex align-items-center" href="/commandes">
                    <i data-feather='shopping-bag'></i>
                    <span class="menu-title text-truncate">
                        Commandes
                    </span>
                </a>
            </li>
            <li class=" nav-item">
                <a class="d-flex align-items-center" href="#">
                    <i data-feather='shopping-cart'></i>
                    <span class="menu-title text-truncate" data-i18n="Invoice">
                        Produits
                    </span>
                </a>
                <ul class="menu-content">
                    <li>
                        <a class="d-flex align-items-center" href="{{route('products.index')}} ">
                            <i data-feather="circle"></i>
                            <span class="menu-item" data-i18n="List">
                                Liste des produits
                            </span>
                        </a>
                    </li>
                    <li>
                        <a class="d-flex align-items-center" href="{{route('products.create')}} ">
                            <i data-feather="circle"></i>
                            <span class="menu-item" data-i18n="Preview">
                                Ajouter un produit
                            </span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="d-flex align-items-center" href="#">
                    <i data-feather="users"></i>
                    <span class="menu-title text-truncate" data-i18n="User">
                        Utilisateurs
                    </span>
                </a>
                <ul class="menu-content">
                    <li>
                        <a class="d-flex align-items-center" href="{{route("users.index")}}">
                        <i data-feather="circle"></i>
                        <span class="menu-item" data-i18n="List">
                            Liste des utilisateurs
                        </span>
                        </a>
                    </li>
                    <li>
                        <a class="d-flex align-items-center" href="">
                            <i data-feather="circle"></i>
                            <span class="menu-item" data-i18n="View">
                                Ajouter un utilisateur
                            </span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="d-flex align-items-center" href="{{route('contact.index')}}">
                    <i data-feather="save"></i>
                    <span class="menu-title text-truncate" data-i18n="File Manager">
                        Contacts
                    </span>
                </a>
            </li>
            <li class="nav-item">
                <a class="d-flex align-items-center" href="#">
                    <i data-feather='command'></i>
                    <span class="menu-title text-truncate" data-i18n="Invoice">
                        Code Promo
                    </span>
                </a>
                <ul class="menu-content">
                    <li>
                        <a class="d-flex align-items-center" href="/promocode">
                            <i data-feather="circle"></i>
                            <span class="menu-item" data-i18n="List">
                                Liste des Code promo
                            </span>
                        </a>
                    </li>
                    <li>
                        <a class="d-flex align-items-center" href="/promocode/create">
                            <i data-feather="circle"></i>
                            <span class="menu-item" data-i18n="Preview">
                                Ajouter un Code Promo
                            </span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="d-flex align-items-center" href="{{ route('logout') }}" onclick="event.preventDefault();
                document.getElementById('logout-form').submit();">
                    <i data-feather='log-out'></i>
                    <span class="menu-title text-truncate">
                        Se déconnecter
                    </span>
                </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                    @csrf
                </form>
            </li>
        </ul>
    </div>
</div>
<!-- END: Main Menu-->
