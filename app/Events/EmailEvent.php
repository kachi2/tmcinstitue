<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class EmailEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $fullname;
    public $verification_code;
    public $email;
    public $company;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($fullname, $verification_code, $email, $company)
    {
      $this->fullname = $fullname;
      $this->verification_code = $verification_code;
      $this->email = $email;
      $this->company = $company;
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
