<?php

namespace App\Listeners;

use App\Events\existinguserevnt;
use App\Mail\Exitinguser;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class existinguserlistener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(existinguserevnt $event)
    {
        // $event->email;
        // $event->code;
        // $event->nameofpurchaser;
        // $event->name;
        $data = [
            'code'=>  $event->code,
            'nameofpurchaser'=> $event->nameofpurchaser,
            'name'=>$event->name,
            'email'=>$event->email
           ];
        Mail::to($event->email)->send(new Exitinguser($data));
    }
}
