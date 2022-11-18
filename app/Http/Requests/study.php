<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class study extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {

        return [
            'fullname'=>'required|regex:/^[a-zA-Z0-9 ]*$/',
            'lastname'=>'required|regex:/^[a-zA-Z0-9 ]*$/',
            'email'=>'required|email|unique:studypros',
            'captcha' => 'required|captcha',
            'phone'=>'required|regex:/^[0-9+ ]*$/',
            'address'=>'required|regex:/^[a-zA-Z0-9, ]*$/',
            'educational'=>'required|alpha',
            'school'=>'required|regex:/^[a-zA-Z0-9 ]*$/'

        ];
    }
}
