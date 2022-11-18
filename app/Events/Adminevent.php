<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class Adminevent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
     public $Adminemail;
     public $fullname;
     public $coursename;
     public $unique_code;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($Adminemail, $fullname, $coursename,  $unique_code)
    {
        $this->Adminemail = $Adminemail;
        $this->fullname = $fullname;
        $this->coursename = $coursename;
        $this->unique_code = $unique_code;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
