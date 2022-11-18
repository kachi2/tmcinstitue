<?php

namespace App\Http\Resources;

use App\Models\CourseVideo;
use Illuminate\Http\Resources\Json\JsonResource;

class CourseData extends JsonResource
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
            'coursename'=>$this->coursename,
            'coursedetails'=>$this->coursedetails,
            'certification'=>$this->certification,
            'whothiscoursefor'=>$this->whothiscoursefor,
            'learning'=>$this->learning,
            'price'=>$this->price?$this->price:$this->standard_price,
           'instructor'=>$this->instructor,
            'rating'=>$this->rating,
            'duration'=>$this->duration,
            'lesson'=>$this->lesson,
            'quizzes'=>$this->quizzes,
            'certificate'=>$this->certificate,
            'language'=>$this->language,
            'access'=>$this->access,
            'videoslinks'=>CourseVideo::where(['course_id'=> $this->id, 'course_type'=>$this->word])->get()
        ];
    }
}
