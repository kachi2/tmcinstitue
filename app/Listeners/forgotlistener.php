<?php

namespace App\Listeners;

use App\Events\forgotevent;
use App\Mail\forgetmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class forgotlistener
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
    public function handle(forgotevent $event)
    {
       $data = [
        'status'=>$event->status_type,
        'verification_code'=>$event->verification_code,
         'fullname'=>$event->fullname,
         'email'=>$event->email,
       ];
      Mail::to($event->email)->send(new forgetmail($data));
    }
}
