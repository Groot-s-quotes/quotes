<?php

    /**
     * Execute the job.
     * 
     * @return void
     */
    
    function handle()
    {
        Mail::raw('Some Text', function ($m){
            $m->from(env('FROM'), env('COMPANY_NAME'));
            $m->sender(env('FROM_FINANCE'));
            $m->to($this->user->email);
            $m->subject('The subject goes here.');

        });
    }