<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use Symfony\Component\HttpFoundation\Response;
use App\User;


class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['signup']]);
    }

   

    public function signup(SignUpRequest $request)
    {
        User::create($request->all());
         return response()->json(['data'=>'Signup Successfully Completed'],Response::HTTP_CREATED);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }


}