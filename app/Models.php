<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Models extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'name', 'manfacturer_id', 'color', 'manufacturer_year', 'register_no', 'note'
    ];

    public function manufacturer()
    {
		  return $this->belongsTo(\App\Manufacturer::class, 'manfacturer_id');
    }
}
