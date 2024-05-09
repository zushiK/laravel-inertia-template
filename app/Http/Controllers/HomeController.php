<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{

    /**
     * トップページ
     * グラフとお知らせなどを載せる
     * 
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render("Home");
    }
}
