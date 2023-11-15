<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Profile;
use App\Models\Interest;
use App\Models\Tool;
use TheSeer\Tokenizer\Exception;

class ProfileController extends Controller
{
    public function profile()
    {

        try {
            $profile = Profile::where('rut', "21.177.605-6")->first();
            $interests = Interest::all()->where('profile_id', 1);
            $tools = Tool::all()->where('profile_id', 1);
            return response()->json(['profile' => $profile, 'interest' => $interests, 'tools' => $tools]);
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}
