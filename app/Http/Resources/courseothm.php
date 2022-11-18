<?php

namespace App\Http\Resources;
use App\Models\userscourse;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class courseothm extends JsonResource
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
            'id'=>$this->id,
            // 'accelerated_price'=>$this->accelerated_price,
            'price'=>$this->standard_price,
            'currency_name'=>$this->currency_name,
            'coursename'=>$this->coursename,
            'picture'=>$this->picture,
            'firstletter'=>$this->firstletter,
            'lesson'=>$this->lesson,
            'purchased'=>(Auth::check()?userscourse::where('user_id', auth()->user()->id)->where('course', 'OTHM')->where('course_id',$this->id)->Where(['status'=>'Verification successful'])->exists():false) || (Auth::check()?userscourse::where('user_id', auth()->user()->id)->where('course_id',$this->id)->where('course', 'OTHM')->Where(['status'=>'COMPLETED'])->exists():false)?true:false,
            "coursetype"=>'OTHM'
        ];
    }
}
