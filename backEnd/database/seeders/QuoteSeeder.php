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
        'image' => 'assets/img/lincon.jpg'
        ]);

        DB::table('quotes')->insert([
            'author_name' => 'Anonymous',
            'quote_text' => 'A born programmer does not cry, he say: Hello World!',
            'oustanding' => true,
            'image' => 'assets/img/hello_world.jpg'
            ]);
    }
}
