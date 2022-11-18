<?php

namespace App\Http\Resources;

use App\Models\CourseInfo;
use App\Models\othm;
use App\Models\Studentresult;
use Illuminate\Http\Resources\Json\JsonResource;

class purchasedcourse extends JsonResource
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
                'course_id'=>$this->course_id,
                'coursename'=>$this->course == 'TMC'?CourseInfo::where(['id'=>intval($this->course_id)])->first()->coursename:othm::where(['id'=>intval($this->course_id)])->first()->coursename,
                'MainHead'=>$this->course == 'TMC'?CourseInfo::where(['id'=>intval($this->course_id)])->first()->MainHead:othm::where(['id'=>intval($this->course_id)])->first()->MainHead,
                'certificate'=>$this->course == 'TMC'?CourseInfo::where(['id'=>intval($this->course_id)])->first()->certificate:othm::where(['id'=>intval($this->course_id)])->first()->certificate,
                'lesson'=>$this->course == 'TMC'?CourseInfo::where(['id'=>intval($this->course_id)])->first()->lesson:othm::where(['id'=>intval($this->course_id)])->first()->lesson,
                'price'=>$this->course == 'TMC'?CourseInfo::where(['id'=>intval($this->course_id)])->first()->price:othm::where(['id'=>intval($this->course_id)])->first()->price,
                'whothiscoursefor'=>$this->course == 'TMC'?CourseInfo::where(['id'=>intval($this->course_id)])->first()->whothiscoursefor:othm::where(['id'=>intval($this->course_id)])->first()->whothiscoursefor,
                'coursedetails'=>$this->course == 'TMC'?CourseInfo::where(['id'=>intval($this->course_id)])->first()->coursedetails:othm::where(['id'=>intval($this->course_id)])->first()->coursedetails,
                'picture'=>$this->course == 'TMC'?CourseInfo::where(['id'=>intval($this->course_id)])->first()->picture:othm::where(['id'=>intval($this->course_id)])->first()->picture,
                'course'=>$this->course,
                'course_type'=>$this->course,
                'studentresult'=>Studentresult::where(['course_id'=>$this->course_id, 'user_id'=>auth()->user()->id, 'course_type'=>$this->course, 'status'=>1])->first()?true:false
        ];
    }
}
