<?php

namespace App\Providers;

use App\Events\Adminevent;
use App\Events\Approvedevent;
use App\Listeners\Approvedlistener;
use App\Events\candidateevent;
use App\Events\EmailEvent;
use App\Events\existinguserevnt;
use App\Events\forgotevent;
use App\Events\groupevent;
use App\Events\Notexiting;
use App\Events\studyevent;
use App\Listeners\Adminlistener;
use App\Listeners\candidatelistener;
use App\Listeners\EmailListener;
use App\Listeners\existinguserlistener;
use App\Listeners\forgotlistener;
use App\Listeners\grouplistener;
use App\Listeners\Notexistinglistener;
use App\Listeners\studylistener;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],

        EmailEvent::class =>[
         EmailListener::class,
        ],

        existinguserevnt::class=>[
            existinguserlistener::class,
        ],
        //Notexiting
        Notexiting::class=>[
            Notexistinglistener::class,
        ],
        groupevent::class=>[
            grouplistener::class,
        ],
        studyevent::class=>[
            studylistener::class,
        ],

        Adminevent::class=>[
            Adminlistener::class,
        ],
        candidateevent::class=>[
            candidatelistener::class,
        ],

        Approvedevent::class=>[
         Approvedlistener::class,
        ],

        forgotevent::class =>[
            forgotlistener::class,
        ]

    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     *
     * @return bool
     */
    public function shouldDiscoverEvents()
    {
        return false;
    }
}
