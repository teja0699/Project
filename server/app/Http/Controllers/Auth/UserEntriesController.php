<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Auth\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserEntriesRequest;
use Symfony\Component\HttpFoundation\Response;
use App\UsersEntries;


class UserEntriesController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

   // use Users;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }
    public function fnGetEntries(){
        $users = \DB::select("SELECT E.user_id,U.name,E.comment FROM users_entries E INNER JOIN USERS U ON U.id=E.user_id");
        return $users;
    }


    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function SaveEntries(UserEntriesRequest $request)
    {
        UsersEntries::create([
            'user_id' => $request['user_id'],
            'comment' => $request['comment'],
        ]);
        return response()->json(['data'=>'User Entry Saved Successfully'],Response::HTTP_CREATED);
    }
}
