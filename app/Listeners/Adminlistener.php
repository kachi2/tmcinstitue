<?php

namespace App\Listeners;

use App\Events\Adminevent;
use App\Mail\AdminMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class Adminlistener
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
    public function handle(Adminevent $event)
    {

          $data = [
            'fullname'=>$event->fullname,
            'coursename'=>$event->coursename,
            'unique_code'=>$event->unique_code
          ];
        Mail::to($event->Adminemail)->send(new AdminMail($data));
    }
}
