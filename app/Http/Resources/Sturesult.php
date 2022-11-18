<?php

namespace App\Http\Resources;

use App\Models\questionremainer;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class Sturesult extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'fullname'=>$this->fullname,
            'coursename'=>$this->coursename,
            'unique_code'=>$this->unique_code,
            'date'=>$this->created_at,
            'totalpercentage'=>questionremainer::where([['user_id','=',$this->user_id], ['course_type','=',$this->course_type], ['totalpercentage', '>=', 80]])->first()->totalpercentage,
            'picture'=>User::where(['id'=>$this->user_id])->first()->picture,
            'email'=>User::where(['id'=>$this->user_id])->first()->email,
            'status'=>$this->status
        ];
    }
}
