<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'user_id' => 2,
                'user_name' => 'Daiben',
                'email' => 'practice@gmail.com',
                'password' => '$2y$10$6J8GuEvAnc/tRbt9cNQwuOa91CQiQFA3uRrcv37l17P7SKqDA23AG',
                'role' => 'user',
            ),
            1 => 
            array (
                'user_id' => 4,
                'user_name' => 'Daiben',
                'email' => 'daibenangelosanchez@gmail.com',
                'password' => '$2y$10$NNt7G.hUnJhXzi/1WzoLX.sSE6Ev3zTCkhETdAsr2sEuKEkHMT8xm',
                'role' => 'user',
            ),
            2 => 
            array (
                'user_id' => 5,
                'user_name' => 'Patricia',
                'email' => '13e1221@gmail.com',
                'password' => '$2y$10$TYRGz3dn6zw285Gtf6hODuyGV.2TVLXIboKeZFrqll.cwGyVF8rii',
                'role' => 'user',
            ),
            3 => 
            array (
                'user_id' => 6,
                'user_name' => 'Daiben',
                'email' => 'admin@iscp.com',
                'password' => '$2y$10$X2RR6m0J2hOZ1/F8Y5gt6uo3GJutrVaDd6wKDyTNcn75vi8MWVjdW',
                'role' => 'admin',
            ),
        ));
        
        
    }
}