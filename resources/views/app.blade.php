<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <meta name="ahrefs-site-verification" content="1d34702dd14bcab8ed08f38d9a1711140a5159d512a5c962ac85bd8752728866">

        {{-- <link rel="shortcut icon" type="image/x-icon" href="{{ asset('images/favicon.svg') }}"> --}}
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <script>
            document.addEventListener('inertia:start', (event) => {
              console.log(`Starting a visit to ${event.detail.visit.url}`)
            })
            document.addEventListener('inertia:load', () => {
              console.log(`Starting a visit to`)
            })
        </script>
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
        <div id="modal-root"></div>




        <script>
            document.addEventListener("inertia:start",()=>{

                let page_name = document.querySelector("meta[name='pagename']").getAttribute('content')
                console.log(page_name)

                fetch("/visitor", {
                    method: 'POST',
                    body:JSON.stringify({"page_name" : page_name}),
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN':"{{ csrf_token() }}",
                    }
                    }).then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error(error))
            });
        </script>
    </body>
</html>
