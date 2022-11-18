<?php

namespace App\Listeners;

use App\Events\studyevent;
use App\Mail\Studyemail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class studylistener
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
    public function handle(studyevent $event)
    {
        $data = [
            'fullname'=>$event->fullname,
            'email'=>$event->email,
            'lastname'=>$event->lastname,
        ];

        Mail::to($event->email)->send(new Studyemail($data));
    }
}
