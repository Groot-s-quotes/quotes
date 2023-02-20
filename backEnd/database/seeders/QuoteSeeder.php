<?php

namespace Database\Seeders;
use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QuoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('quotes')->insert([
        'author_name' => 'Abraham Lincoln',
        'quote_text' => 'Give me six hours to chop down a tree and I will spend the first four sharpening the axe.',
        'oustanding' => true,
        'image' => 'lincon.jpg'
        ]);

        DB::table('quotes')->insert([
            'author_name' => 'Anonymous',
            'quote_text' => 'A born programmer does not cry, he say: Hello World!',
            'oustanding' => true,
            'image' => 'hello_world.jpg'
            ]);

            DB::table('quotes')->insert([
                'author_name' => 'Arthur Balfour',
                'quote_text' => 'Enthusiasm moves the world',
                'oustanding' => false,
                'image' => 'hello_world.jpg'
                ]);

                DB::table('quotes')->insert([
                    'author_name' => 'Albert Einstein',
                    'quote_text' => 'If you can\'t explain it simply, you don\'t understand it well enough',
                    'oustanding' => false,
                    'image' => 'lincon.jpg'
                    ]);
            
                    DB::table('quotes')->insert([
                        'author_name' => 'Winston Churchill',
                        'quote_text' => 'Success is not final, failure is not fatal: it is the courage to continue that counts',
                        'oustanding' => true,
                        'image' => 'hello_world.jpg'
                        ]);
                        DB::table('quotes')->insert([
                            'author_name' => 'Vince Lombardi',
                            'quote_text' => 'The measure of who we are is what we do with what we have',
                            'oustanding' => false,
                            'image' => 'lincon.jpg'
                            ]);
                    
                            DB::table('quotes')->insert([
                                'author_name' => 'John Lubbock',
                                'quote_text' => 'A day of worry is more exhausting than a week of work',
                                'oustanding' => true,
                                'image' => 'hello_world.jpg'
                                ]);

                                    DB::table('quotes')->insert([
                                        'author_name' => 'Henry Ford',
                                        'quote_text' => 'Whether you think you can or you think you can\’t, you\’re right',
                                        'oustanding' => true,
                                        'image' => 'hello_world.jpg'
                                        ]);

                                    DB::table('quotes')->insert([
                                        'author_name' => 'Joyce Meyer',
                                        'quote_text' => 'You cannot have a positive life and a negative mind',
                                        'oustanding' => true,
                                        'image' => 'hello_world.jpg'
                                        ]);
                       
    }
}
