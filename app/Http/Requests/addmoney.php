<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class addmoney extends FormRequest
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
        'currencyname'=>'required|regex:/^[a-zA-Z  ]*$/',
        "foreignrate"=>'required|alpha_num',
        'nairarate'=>'required|alpha_num',
        ];
    }
}
