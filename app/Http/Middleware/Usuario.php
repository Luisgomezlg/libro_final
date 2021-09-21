<?php

namespace App\Http\Middleware;

use Closure;

class Operativo
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function handle($request, Closure $next)
    {
        if (auth()->check() || $request->user()->esUsuario()) {
            return redirect()->route('unauthorized');
        }

        return $next($request);
    }
}
