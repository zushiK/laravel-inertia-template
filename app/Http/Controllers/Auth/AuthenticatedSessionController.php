<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();
        return $this->updateLoginInfo();
    }


    public function devlogin(Request $request): RedirectResponse
    {
        // ログイン成功
        if (Auth::loginUsingId(env("DEVELOP_LOGIN_USER_ID", 1))) {
            return $this->updateLoginInfo();
        }

        // ログイン失敗
        return back()->with("error", "ログインに失敗しました");
    }

    private function updateLoginInfo()
    {
        /** @var \App\Models\User */
        $user = Auth::user();
        $user->update([
            'last_login_at' => now(),
            'last_login_ip' => request()->getClientIp(),
        ]);

        if (!$user->email_verified_at) return redirect()->route('first.login.password');

        return redirect()->intended(route('home', absolute: false))->with("success", "ログインしました");
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect(route("login"))->with("success", "ログアウトしました");
    }
}
