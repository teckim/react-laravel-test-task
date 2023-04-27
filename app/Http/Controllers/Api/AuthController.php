<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->safe()->only(['email', 'password']);
        $remember = (bool) $request->get('remember');

        if (auth()->attempt($credentials, $remember)) {
            return response()->json(['user' => auth()->user()]);
        }

        return response()->json(['message' => 'invalid username or password'], 401);
    }

    public function logout(Request $request)
    {
        auth('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'logged out']);
    }

    public function me()
    {
        return response()->json(['user' => auth()->user()]);
    }
}
