<?php

namespace Database\Seeders;
use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       DB::table('users')->insert([
        'name' => 'Juan',
        'email' => 'juan@gmail.com',
        'password' => 123
       ]);

       DB::table('users')->insert([
        'name' => 'Laura',
        'email' => 'laura@gmail.com',
        'password' => 321
       ]);

       DB::table('users')->insert([
        'name' => 'Alexandra',
        'email' => 'alex@gmail.com',
        'password' => 123426
       ]);
    }
}
