<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Profile;
use App\Models\Interest;
use App\Models\Tool;

class ProfileController extends Controller
{
    public function index()
    {
        $profile = Profile::get();
        $interests = Interest::get();
        $tools = Tool::get();
        return response()->json(['profile' => $profile, 'interests' => $interests, 'tools' => $tools]);
    }
}
