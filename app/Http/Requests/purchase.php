<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class purchase extends FormRequest
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
            'referencecode'=>'required|regex:/^[a-zA-Z0-9 ]*$/',
            'email'=>'required|email',
            "status"=>'required|alpha_dash',
            'amount'=>'required|alpha_dash',
            'course_id'=>'required|alpha_dash',
        ];
    }
}
