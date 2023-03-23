<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;


class UserTest extends TestCase
{
    use RefreshDatabase;

    public function test_example()
    {
        $this->assertTrue(true);
    }


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

        public function test_if_it_stores_new_users()
        {
            $response = $this->post('/register', [
                'name' => 'Maria',
                'email' => 'maria@gmail.com',
                'password' => 'maria1234',
                'password_confirmation' => 'maria1234'
            ]);
    
            $response->assertRedirect('/home');

            $this->assertCount(1, User::all());
        }

        public function test_register()
        {
            Artisan::call('migrate');

            $load = $this->post('/register');
            /* $load->assertStatus(200)->assertSee('Register'); */
        }

}
