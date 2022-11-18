<?php

namespace App\Listeners;

use App\Events\candidateevent;
use App\Mail\cadidatemail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
class candidatelistener
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
    public function handle(candidateevent $event)
    {
        // $this->email = $email;
        // $this->fullname = $fullname;
        // $this->coursename = $coursename;
        $data = [
          'email'=>$event->email,
          'fullname'=>$event->fullname,
          'coursename'=>$event->coursename
        ];

       Mail::to($event->email)->send(new cadidatemail($data));
    }
}
