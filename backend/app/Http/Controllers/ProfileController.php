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
            $interests = Interest::all()->where('profile_id', $profile->id);
            $tools = Tool::all()->where('profile_id', $profile->id);
            $response = [
                'fullname' => $profile->fullname,
                'email' => $profile->email,
                'location' => $profile->location,
                'phone' => $profile->phone,
                'age' => $profile->age,
                'description' => $profile->description,
                'occupation' => $profile->occupation,
                'facebook' => $profile->facebook,
                'github' => $profile->github,
                'image' => $profile->image,
                'interests' => $interests,
                'tools' => $tools
            ];
            return response()->json($response);
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}
