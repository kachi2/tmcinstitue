<?php

namespace App\Handler;
use Spatie\WebhookClient\Jobs\ProcessWebhookJob;
class Webhooks extends ProcessWebhookJob
{


    public function webcheck(){

      logger($this->webhookCall);

    }


}
