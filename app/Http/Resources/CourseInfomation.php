<?php

namespace App\Http\Resources;

use App\Helper\Help;
use App\Models\userscourse;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class CourseInfomation extends JsonResource
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
         //   'dhhjd'=>result,
            "id"=>$this->id,
            "coursename"=>$this->coursename,
            // 'price'=>$this->price,
            "price"=>$this->currency_name == 'naira'?$this->price :( new Help )->constant()->result->NGN * $this->price,
            "converted"=>$this->currency_name == 'naira'?false :true,
            "rating"=>$this->rating,
            "MainHead"=>$this->MainHead,
            "picture"=>$this->picture,
            'purchased'=> (Auth::check()?userscourse::where('user_id', auth()->user()->id)->where('course', 'TMC')->where('course_id',$this->id)->Where(['status'=>'Verification successful'])->exists():false) || (Auth::check()?userscourse::where('user_id', auth()->user()->id)->where('course', 'TMC')->where('course_id',$this->id)->Where(['status'=>'COMPLETED'])->exists():false)?true:false,
            'coursetype'=>'TMC'
        ];
    }
}
