<?php

namespace App\Http\Resources;
use App\Helper\Help;
use App\Models\CourseInfo;
use App\Models\userscourse;
use Illuminate\Http\Resources\Json\JsonResource;

class CourseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $help = new Help();

        return [
            'id'=>$this->id,
            'coursedetails'=>$this->coursedetails,
            'certification'=>$this->certification,
             'whothiscoursefor'=>$this->whothiscoursefor,
            'learning'=>$this->learning,
            //  'price'=>$this->price,
             "price"=>$this->currency_name == 'naira'?$this->price: (new Help)->constant()->result->NGN * $this->price,
             "converted"=>$this->currency_name == 'naira'?false :true,
            'instructor'=>$this->instructor,
            'rating'=>$this->rating,
             'duration'=>$this->duration,
            'lesson'=>$this->lesson,
             'quizzes'=>$this->quizzes,
            'certificate'=>$this->certificate,
            'language'=>$this->language,
            'access'=>$this->access,
            'MainHead'=>$this->MainHead,
             'coursename'=>$this->coursename,
             'picture'=>$this->picture,
            //  where(['user_id'=>auth()->user()->id, 'course_id'=>$this->id, 'status'=>'COMPLETED'])->
             'purchased'=>(userscourse::where('user_id', auth()->user()->id)->where('course_id',$this->id)->Where(['status'=>'Verification successful'])->exists()) || (userscourse::where('user_id', auth()->user()->id)->where('course_id',$this->id)->Where(['status'=>'COMPLETED'])->exists())?true:false,
             'coursetype'=>'TMC',
            //  coursetype
        ];

    }


}
