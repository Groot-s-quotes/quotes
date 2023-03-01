<?php

namespace Tests\Unit\Job;

use Tests\TestCase;

class SendEmailToClientTest extends TestCase
{
    use DatabaseMigrations;
    /** You write this to remember that you are refering to this class and this handle
    * @see SendMailToClient::handle()
    */
    public function testEmailShouldBeSentToSpecificUser()
    {

        //1ºcreate a user
        $user = factory(class:User::class)->create();

        //3ºuse the "mail" to sort and, then, use the "shouldReceive"
        Mail::shouldReceive('raw')->with('Some Text', Mockety::on(function(\Closure $closure) use($user)
        {
            //2ºcall the SendEmailToClient job and pass the user to it
            $mockMessage = \Mockery::mock(Message::class);
            // SPY---->     $mockMessage = \Mockery::spy(Message::class);
            $mockMessage->shouldReceive('to')->once->with($user->email);

            $closure($mockMessage);
            //return true;
        }));
    }
}


//run this to check the test: vendor/bin/phpunit 