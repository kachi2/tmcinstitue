<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class contactusreq extends FormRequest
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
                 // 'firstname',
            // 'lastname',
            // 'email',
            // 'phone',
            // 'message',

//    'referencecode'=>'required|regex:/^[a-zA-Z0-9 ]*$/',
//             'email'=>'required|email',
//             "status"=>'required|alpha_dash',

        'firstname'=>'required|regex:/^[a-zA-Z0-9 ]*$/',
        'lastname'=>'required|regex:/^[a-zA-Z0-9 ]*$/',
        'email'=>'required|email',
        'phone'=>'required|regex:/^[0-9 ]*$/|size:11',
        'message'=>'required|regex:/^[a-zA-Z0-9 ]*$/',
        ];
    }
}
