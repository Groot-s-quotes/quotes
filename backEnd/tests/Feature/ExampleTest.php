<?php

namespace Tests\Feature;

use App\Models\Quote;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    public function test_the_application_returns_a_successful_response()
    {   //scene
        $this->withoutExceptionHandling();
        $quote = Quote::factory(10)->create();

        //when
        $this->assertCount(10, $quote);

        // given
        $response = $this->get('/');

        $response->assertStatus(200);
/*         ->assertViewIs('quotes') */ //investigar como hacer el assersion para api REST
/*         ->assertViewHas('quotes', $quote); */

    }
}
