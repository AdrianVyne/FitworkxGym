<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function show($id = "")
    {
        if ($id == "") {
            return view('about');
        } else {
            return view('about_page', compact('id'));
        }

    }
}