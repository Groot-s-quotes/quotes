<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Quote;
use Illuminate\Http\Request;

class QuoteController extends Controller
{

    public function index()
    {
       $quotes = Quote::all();
       return $quotes;
    }

    
    public function store(Request $request)
    {
        $quote = new Quote();
        $quote->author_name = $request->author_name;
        $quote->quote_text = $request->quote_text;
        $quote->oustanding = $request->oustanding;

        var_dump($request->hasFile('image'));
        $file = $request->file('image');
        $filename = $file->getClientOriginalName(); 
        $filename = date('His').$filename;
        
        $request->file('image')->storeAs('upload_img/',$filename, 'public');
        $quote->image = $filename;
       

        $quote->save();
    }

    
    public function show($id)
    {
       $quote = Quote::find($id);
       return $quote;
    }

    
    public function update(Request $request, $id)
    {
        $quote = Quote::findOrFail($request->id);
        $quote->author_name = $request->author_name;
        $quote->quote_text = $request->quote_text;
        $quote->oustanding = $request->oustanding;
        $quote->image = $request->image;
        $quote->save();
        return $quote;
    }

   
    public function destroy($id)
    {
        $quote = Quote::destroy($id);
        return $quote;
    }
}
