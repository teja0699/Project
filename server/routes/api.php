<?php
Route::group([
    'middleware' => 'api',
], function () {

    Route::post('signup', 'AuthController@signup');
    Route::get('getusers', 'AuthController@fnGetUsers');
    Route::post('entries', 'UserEntriesController@SaveEntries');
    Route::get('getentries', 'UserEntriesController@fnGetEntries');
    Route::get('names',function(){
        return array(1=>"srihari",2=>"Teja");
    });
});

