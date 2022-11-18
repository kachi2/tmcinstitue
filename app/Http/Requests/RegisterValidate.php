<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;
class RegisterValidate extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'fullname'=>'required|regex:/^[a-zA-Z0-9- ]*$/',
            'email'=>'required|email|unique:users',
            "term"=>'required|in:true',
            // 'required|confirmed'
            // ['required', 'confirmed', 'string', Password::min(8)->letters()->numbers()->symbols()],
            'password'=> ['required', 'confirmed', 'string', Password::min(8)->letters()->numbers()->symbols()],
            'company'=>'required|regex:/^[a-zA-Z0-9 ]*$/',
            'captcha' => 'required|captcha',
        ];
    }
}
