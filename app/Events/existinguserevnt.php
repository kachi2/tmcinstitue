<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class existinguserevnt
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $email;
    public $code;
    public $nameofpurchaser;
    public $name;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($email, $code, $nameofpurchaser, $name)
    {
      $this->email = $email;
      $this->code = $code;
      $this->nameofpurchaser = $nameofpurchaser;
      $this->name = $name;
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
