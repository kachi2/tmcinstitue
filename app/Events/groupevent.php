<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class groupevent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
     public $data;
     public $totalcost;
     public $subcost;
     public $today;
     public $email;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    // $users, $request->totalcost,  $request->subcost,  $request->today email
    public function __construct($data, $totalcost, $subcost, $today, $email )
    {
     $this->data = $data;
     $this->totalcost = $totalcost;
     $this->subcost = $subcost;
     $this->today = $today;
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
