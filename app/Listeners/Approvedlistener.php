<?php

namespace App\Listeners;

use App\Events\Approvedevent;
use App\Mail\Approvedemail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class Approvedlistener
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
    public function handle(Approvedevent $event)
    {
       $data = [
        'fullname'=>$event->fullname,
        'unique_code'=>$event->unique_code,
       ];

       Mail::to($event->email)->send(new Approvedemail($data));
    }
}
