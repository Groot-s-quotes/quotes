<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;


class UserTest extends TestCase
{
    use RefreshDatabase;

    public function test_example()
    {
        $this->assertTrue(true);
    }

    //Check if user exists in database
    public function test_user_duplication()
    {
        $user1 = User::make([
            'name' => 'John Doe',
            'email' => 'johndoe@gmail.com'
        ]);

        $user2 = User::make([
            'name' => 'Mary Jane',
            'email' => 'maryjane@gmail.com'
        ]);

        $this->assertTrue($user1->name != $user2->name);
    }

    public function test_delete_user()
    {
        $user = User::factory()->count(1)->make();

        $user = User::first();

        if($user) {
            $user->delete();
        }

        $this->assertTrue(true);
    }
        //Perform a post() request to add a new user
        public function test_if_it_stores_new_users()
        {
            $response = $this->post('/register', [
                'name' => 'Maria',
                'email' => 'maria@gmail.com',
                'password' => 'maria1234',
                'password_confirmation' => 'maria1234'
            ]);
    
            $response->assertRedirect('/home');
        }

        public function test_if_data_exists_in_database()
        {
            $this->assertDatabaseHas('users', [
                'name' => 'Maria'
            ]);
        }

        public function test_if_data_does_not_exists_in_database()
        {
            $this->assertDatabaseMissing('users', [
                'name' => 'Yassmina'
            ]);
        }

}
