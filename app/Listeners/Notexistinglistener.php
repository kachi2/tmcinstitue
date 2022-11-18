<?php

namespace App\Listeners;

use App\Events\Notexiting;
use App\Mail\NotexistEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class Notexistinglistener
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
    public function handle(Notexiting $event)
    {
        $data = [
            'code'=>  $event->code,
            'name'=>$event->name,
            'email'=>$event->email
           ];
      Mail::to($event->email)->send(new NotexistEmail($data));


    }
}
