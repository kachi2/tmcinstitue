<?php

namespace App\Http\Resources;

use App\Models\CourseInfo;
use Illuminate\Http\Resources\Json\JsonResource;

class Personvideos extends JsonResource
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
"id"=>$this->id,
"name"=>CourseInfo::where("id", $this->id)->first()->coursename,
"price"=>CourseInfo::where("id", $this->id)->first()->price,
"picture"=>CourseInfo::where("id", $this->id)->first()->picture,
"MainHead"=>CourseInfo::where("id", $this->id)->first()->MainHead
        ];
    }
}
