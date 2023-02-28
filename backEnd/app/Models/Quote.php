<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quote extends Model
{
    use HasFactory;
    protected $fillable = ['author_name', 'quote_text', 'oustanding', 'image'];

    public function favorite()
    {
        $usrid = auth()->guard('user')->user()!=null ? auth()->guard('user')->user()->id : null;
        return $this->belongsTo(QuoteUserFavorite::class, 'id', 'quote_id')->where('user_id', $usrid);
    }

    public function like()
    {
        return $this->favorite()->selectRaw('quote_id,count(*) as count')->groupBy('quote_id');
    }
}
