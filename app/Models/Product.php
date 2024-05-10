<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    protected $table = 'm_products';

    protected $dates = ['created_at', 'updated_at'];

    protected $guarded = ['id'];

    protected $casts = [];
}
