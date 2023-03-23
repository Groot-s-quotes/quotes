<?php

namespace Tests\Unit;

use App\Models\Quote;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class QuoteTest extends TestCase
{

      use RefreshDatabase;
    public function test_example()
    {
        $this->assertTrue(true);
    }

    public function test_quote_duplication()
    {
        $quote1 = Quote::make([
            'author_name' => 'John Doe',
            'quote_text' => 'my best quote ever',
            'outasnding' => false,
            'image' => 'https://myimage.jpg'
        ]);

        $quote2 = Quote::make([
            'author_name' => 'Juan Ferrer',
            'quote_text' => 'our worst quote ever',
            'outasnding' => false,
            'image' => 'https://ourimage.png'
        ]);

        $this->assertTrue($quote1->author_name != $quote2->author_name);
    }

    public function test_its_store_a_new_quote()
    {
        $this->withoutExceptionHandling();
        //scene
         $quote = Quote::factory(2)->create(); 
        $response = $this->post('/quote');
/*          $response = $this->post('/quote', [
            'author_name' => 'Maria DB',
            'quote_text' => 'maria db is a type of database.',
            'oustanding' => true,
            'image' => 'maria1234.jpg'
        ]); 
 */
        //when
        $response->assertStatus(201);
        dd($response); //Trae información del response
        $this->assertCount(2, $quote);

        // given
    }

    public function test_phrase_can_be_stored_by_auth_user(){

        $user = User::factory()->create([
            'name' => 'Maria',
            'email' => 'maria@gmail.com',
            'password' => 'maria1234',
            'password_confirmation' => 'maria1234'
        ]);

        $this->actingAs($user);

/*         $quote = Quote::factory()->create([
            'author_name' => 'Maria DB',
            'quote_text' => 'maria db is a type of database.',
            'oustanding' => true,
            'image' => 'maria1234.jpg'
        ]); */

        $response = $this->post(route('quote'),[
            'author_name' => 'Maria DB',
            'quote_text' => 'maria db is a type of database.',
            'oustanding' => true,
            'image' => 'maria1234.jpg'
        ]);

    }


}


