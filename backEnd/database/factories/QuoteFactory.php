<?php

namespace Database\Factories;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Quote>
 */
class QuoteFactory extends Factory
{
    public function definition()
    {
       
        return [
            'quote_text'=>fake()->sentence(),
            'author_name'=>fake()->name(),
            'image'=> Str::random(10),
        ];
    }
}
