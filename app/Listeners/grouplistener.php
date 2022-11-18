<?php

namespace App\Listeners;

use App\Events\groupevent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use App\Mail\Allgrouppurchase;
class grouplistener
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
    public function handle(groupevent $event)
    {

        $data = [
         'steve'=>$event->data,
         'totalcost'=>$event->totalcost,
         'subcost'=>$event->subcost,
         'today'=>$event->today,
         'email'=>$event->email,
        ];


        // Mail::to($event->email)->send(new group($data));
         Mail::to($event->email)->send(new Allgrouppurchase($data));
    }
}
