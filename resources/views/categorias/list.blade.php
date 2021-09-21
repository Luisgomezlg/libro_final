@extends('layouts.app')
@section('content')


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Categorias</title>
    <link href="{{ asset('css/libro.css') }}" rel="stylesheet">
    <!-- CSS only -->
</head>

<body>
    <style>
        .shadow {
            padding: 1.5rem;
        }

        html,
        body,
        div,
        span,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        a,
        li,
        fieldset,
        form,
        label,
        table,
        tbody,
        thead,
        tr,
        th,
        td {

            font-size: 100%;
            vertical-align: baseline;
        }

        .cont {
            display: inline-block;
            width: 300px;
        }
    </style>
   <a class="btn btn-brand text-white back" onclick="history.go(-1)">
        <span stroke-width="1.5" data-feather="arrow-left"></span> Regresar
    </a>
    <div class="mt-5">
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                Lista de categorias
            </h3>
        </div>
        <div class="border-t border-gray-200">
        <form action="{{ action('categoriaController@search')}}" method="get">
                    <label for="">
                        Buscar:
                        <input type="search" name="search" id="search" class="form-control form-control-sm" placeholder="Buscar metodo" aria-controls="example">
                    </label>
                </form>
            <dl>
                @foreach($list as $li)
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                    <a class="text-uppercase" href="" onclick="window.location='{{ action('categoriaController@show', $li->id)}}'">{{$li->title}}</a>
                    </dt>
                </div>
                @endforeach
            </dl>
        </div>
        </div>
    </div>
</body>
<script>

</script>
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>

@endsection