<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class additional_info extends FormRequest
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
            'country_of_birth'=>'required|regex:/^[a-zA-Z0-9 ]*$/',
            'country_of_residence'=>'required|regex:/^[a-zA-Z0-9 ]*$/',
            "current_address"=>'required|regex:/^[a-zA-Z0-9, ]*$/',
            "fullname"=>'required|regex:/^[a-zA-Z0-9- ]*$/',
            'gender'=>'required|alpha_dash',
            // "image"=>'required',
            'nameprint'=>'required|regex:/^[a-zA-Z0-9 ]*$/',
            "nationality"=>'required|alpha',
            'phone_number'=>'required|alpha_num',
            "dateofbirth"=>'required',
        ];
    }
}
