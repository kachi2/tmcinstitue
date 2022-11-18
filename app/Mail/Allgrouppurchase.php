<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Allgrouppurchase extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
    //   echo json_encode($data['steve']);
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
             return $this->from(env('MAIL_FROM_ADDRESS'), 'TMC INSTITUTE')->subject('Group purchase')->view('mail.invoice', ['data'=>$this->data]);

    }
}
