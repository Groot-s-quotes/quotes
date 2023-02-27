<?php

namespace Tests\Unit;

use App\Models\Quote;
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

}


