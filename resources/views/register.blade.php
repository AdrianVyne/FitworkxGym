<!DOCTYPE html>
<html lang="en">

<head>
    @include("layouts/head")
    <title>Document</title>
</head>

<body>
@include("layouts/navbar-user")
<h1>Register</h1>
<form action="/register" method="POST">
    @csrf
    <label>User Name:</label>
    <input type="text" name="user_name"></input><br>
    <label>Login Name:</label>
    <input type="text" name="login_name"></input><br>
    <label>Password:</label>
    <input type="password" name="password"></input><br>
    <label>Confirm password:</label>
    <input type="password" name="con_password"></input><br>
    <label>Student ID:</label>
    <input type="text" name="student_id"></input><br>
    <button type="submit">Submit</button>
</form>
</body>

</html>