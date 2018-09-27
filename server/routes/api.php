<?php
Route::group([
    'middleware' => 'api',
], function () {

    Route::post('signup', 'AuthController@signup');
    Route::get('names',function(){
        return array(1=>"srihari",2=>"Teja");
    });
});

