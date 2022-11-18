<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class forgotevent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
     public $verification_code;
     public $fullname;
     public $status_type;
     public $email;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($status_type, $verification_code, $fullname, $email)
    {
        $this->status_type = $status_type;
        $this->verification_code = $verification_code;
        $this->fullname = $fullname;
        $this->email = $email;
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
