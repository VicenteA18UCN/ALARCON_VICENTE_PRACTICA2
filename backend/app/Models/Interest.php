<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Interest extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'profile_id'
    ];


    public function profiles()
    {
        return $this->belongsTo(Profile::class);
    }
}