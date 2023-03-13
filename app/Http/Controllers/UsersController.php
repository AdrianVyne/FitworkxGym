<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Student;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Session;
use DB;

class UsersController extends Controller
{
    public function editProfile(Request $request)
    {
        if (Session::get("id")) {
            $student = Student::where("student_id", "=", Session::get("student_id"))->update([
                'mobile_number' => $request->input("mobile_number"),
                'email_address' => $request->input("email_address")
            ]);

            return redirect('/profile');
        }
    }
    public function showProfileEdit()
    {
        if (Session::get("id")) {
            $student = Student::where("student_id", "=", Session::get("student_id"))->first();
            return view('profile_edit', compact('student'));
        }
    }

    public function logout()
    {
        if (Session::has('id')) {
            Session::pull('id');
            Session::pull('login_name');
            Session::pull('role');
            Session::pull('user_name');
            return redirect('/');
        }
    }

    public function showProfile()
    {
        if (Session::get("id")) {
            $student = Student::where("student_id", "=", Session::get("student_id"))->first();
            $classes = DB::select("SELECT name, schedule, room FROM students_classes AS sc INNER JOIN classes AS c ON sc.class_id = c.class_id INNER JOIN subjects AS s ON c.subject_id = s.subject_id WHERE student_id = " . Session::get("student_id"));
            return view('profile', compact('student', 'classes'));
        } else {
            return view('errors/401');
        }
    }

    public function showLogin()
    {
        return view('login');
    }

    public function login(Request $request)
    {
        $user = User::where("login_name", "=", $request->login_name)->first();
        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $request->session()->put('id', $user->user_id);
                $request->session()->put('login_name', $user->login_name);
                $request->session()->put('role', $user->role);
                $request->session()->put('user_name', $user->user_name);
                $request->session()->put('student_id', $user->student_id);
                if (Session::get('role') == 'admin') {
                    return redirect('/admin')->with('success', "Logged in as admin!");
                }
                return redirect('/profile')->with('success', 'Logged in as student!');
            } else {
                return redirect('/login')->with('fail', 'Incorrect password!');
            }
        } else {
            return redirect('/login')->with('fail', 'An account with that login_name does not exist!');
        }
    }

    public function showRegister()
    {
        return view('register');
    }

    public function register(Request $request)
    {
        $this->validate($request, [
            'user_name' => 'required|string',
            'login_name' => 'required|unique:users,login_name',
            'password' => 'required|min:6|max:50',
            'con_password' => 'required|same:password',
            'student_id' => 'required|unique:users,student_id'
        ], [], [
            'con_password' => 'password confirmation',
            'student_id' => 'student ID'
        ]);

        $user = new User;
        $user->user_name = $request->input("user_name");
        $user->login_name = $request->input("login_name");
        $user->password = Hash::make($request->input("password"));
        $user->role = "user";
        $user->student_id = $request->input("student_id");
        $user->save();

        return redirect("/")->with('success', 'User successfully registered!');
    }
}