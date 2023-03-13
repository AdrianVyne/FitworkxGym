<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="/img/slu.png" style="width: 30px"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/profile">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/cafeteria">Cafeteria</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/orders">My Orders</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/register">Register</a>
      </li>
      @if(Session::get('id'))
      <li class="nav-item">
        <a class="nav-link" href="/logout">Logout</a>
      </li>
      @else
      <li class="nav-item">
        <a class="nav-link" href="/login">Login</a>
      </li>
      @endif
    </div>
  </div>
</nav>
@if(Session::has('success'))
    <p id="notif" style="background-color:green; color:white">{{Session::get('success')}}</p>
@elseif(Session::has('fail'))
    <p id="notif" style="background-color:red; color:white">{{Session::get('fail')}}</p>
@endif
@foreach ($errors->all() as $error)
  <p style="background-color:red; color:white">{{$error}}</p>
@endforeach
