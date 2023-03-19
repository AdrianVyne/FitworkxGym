<!DOCTYPE html>
<html lang="en">
<head>
    @include("layouts/head")
 
    <title>Error | Fitworx Gym</title>
    <style>
        .error-template {padding: 20% 15px;text-align: center; color:rgb(255, 238, 0); }
        .error-actions {margin-top:15px;margin-bottom:15px;}
        .error-actions .btn { margin-right:10px;}
        body {background: url("{{ asset('img/8.jpg') }}")};
    </style>
</head>
<body>
    @include("layouts/navbar")
 
    {{-- set a text to be at the center of a text like in a 50 top and left --}}
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="error-template">
                    <img class="pb-4" src="{{asset('img/error.png')}}" alt="" width="10%">
                    <h1>
                        Oops!</h1>
                    <h2>
                        404 Not Found</h2>
                    <h3 class="error-details">
                        Sorry, an error has occured, Requested page not found!
                    </h3>
                   
                </div>
            </div>
        </div>
    </div>
    @include("layouts/footer")
    @include("layouts/scripts")
</body>
</html>