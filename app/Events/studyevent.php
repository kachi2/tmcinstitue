<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class studyevent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
     public $fullname;
     public $email;
     public $lastname;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($fullname, $email, $lastname)
    {
        $this->fullname = $fullname;
        $this->email = $email;
        $this->lastname = $lastname;
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
