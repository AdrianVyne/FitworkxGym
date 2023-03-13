<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Session;

class AdminController extends Controller
{
    public function adminDashboard()
    {
        if (Session::get("role") == "admin") {
            return view('admin');
        } else {
            return view("errors/401");
        }
    }

    public function showAdminRegister()
    {
        if (Session::get("role") == "admin") {
            return view('admin_register');
        } else {
            return view("errors/401");
        }
    }

    public function adminRegister(Request $request)
    {
        if (Session::get("role") == "admin") {
            $user = new User;
            $user->user_name = $request->input("user_name");
            $user->login_name = $request->input("login_name");
            $user->password = Hash::make($request->input("password"));
            $user->role = "admin";
            $user->student_id = 0;
            $user->save();

            return redirect("/admin");
        } else {
            return view("errors/401");
        }
    }

}