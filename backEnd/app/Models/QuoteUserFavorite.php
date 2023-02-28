<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class QuoteUserFavorite extends Model
{
    use HasFactory;
    protected $fillable = ['quote_id', 'user_id'];
    protected $dates = ['deleted_at'];

    public function quote()
    {
        return $this->belongsTo(Quote::class);
    }

}
