<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class User
 * 
 * @property int $user_id
 * @property string $user_name
 * @property string $login_name
 * @property string $password
 * @property string $role
 * @property int $student_id
 *
 * @package App\Models
 */
class User extends Model
{
	protected $table = 'users';
	protected $primaryKey = 'user_id';
	public $timestamps = false;

	protected $casts = [
		'student_id' => 'int'
	];

	protected $hidden = [
		'password'
	];

	protected $fillable = [
		'user_name',
		'login_name',
		'password',
		'role',
		'student_id'
	];
}
