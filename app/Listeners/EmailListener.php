<?php

namespace App\Listeners;
use App\Mail\SendEmails;
use App\Events\EmailEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class EmailListener
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
    public function handle(EmailEvent $event)
    {
        // $this->fullname = $fullname;
        // $this->verification_code = $verification_code;
        // $this->email = $email;

           $data = [
            'fullname'=>$event->fullname,
            'verification_code'=>$event->verification_code,
            'company'=>$event->company
           ];
           Mail::to($event->email)->send(new SendEmails($data));
    }
}
