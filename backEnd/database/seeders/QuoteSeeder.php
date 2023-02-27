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
        'image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/220px-Abraham_Lincoln_O-77_matte_collodion_print.jpg',
    ]);

        DB::table('quotes')->insert([
            'author_name' => 'Anonymous',
            'quote_text' => 'A newborn programmer does\'t cry, say \'Hello World!\'',
            'oustanding' => true,
            'image' => 'https://mir-s3-cdn-cf.behance.net/projects/404/c54f65151226205.Y3JvcCwzNTAwLDI3MzcsMCw2OTM.jpg',
            ]);

            DB::table('quotes')->insert([
                'author_name' => 'Arthur Balfour',
                'quote_text' => 'Enthusiasm moves the world',
                'oustanding' => false,
                'image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/A.J._Balfour_LCCN2014682753_%28cropped%29.jpg/220px-A.J._Balfour_LCCN2014682753_%28cropped%29.jpg',
                ]);

                DB::table('quotes')->insert([
                    'author_name' => 'Albert Einstein',
                    'quote_text' => 'If you can\'t explain it simply, you don\'t understand it well enough',
                    'oustanding' => false,
                    'image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg',
                    ]);
            
                    DB::table('quotes')->insert([
                        'author_name' => 'Winston Churchill',
                        'quote_text' => 'Success is not final, failure is not fatal: it is the courage to continue that counts',
                        'oustanding' => true,
                        'image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/220px-Sir_Winston_Churchill_-_19086236948.jpg',
                        ]);
                        DB::table('quotes')->insert([
                            'author_name' => 'Vince Lombardi',
                            'quote_text' => 'The measure of who we are is what we do with what we have',
                            'oustanding' => false,
                            'image' => 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Vince_Lombardi.jpg',
                            ]);
                    
                            DB::table('quotes')->insert([
                                'author_name' => 'John Lubbock',
                                'quote_text' => 'A day of worry is more exhausting than a week of work',
                                'oustanding' => true,
                                'image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/John_Lubbock72.jpg/200px-John_Lubbock72.jpg',
                                ]);

                                    DB::table('quotes')->insert([
                                        'author_name' => 'Henry Ford',
                                        'quote_text' => 'Whether you think you can or you think you can\’t, you\’re right',
                                        'oustanding' => true,
                                        'image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Henry_ford_1919.jpg/250px-Henry_ford_1919.jpg',
                                        ]);

                                    DB::table('quotes')->insert([
                                        'author_name' => 'Joyce Meyer',
                                        'quote_text' => 'You cannot have a positive life and a negative mind',
                                        'oustanding' => true,
                                        'image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Joyce_Meyer_in_2015_%285Cnll1B0h2Y%29.jpg/320px-Joyce_Meyer_in_2015_%285Cnll1B0h2Y%29.jpg',
                                        ]);
                       
    }
}
