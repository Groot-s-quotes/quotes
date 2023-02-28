<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Quote;
use Illuminate\Http\Request;
use DB;

class QuoteController extends Controller
{

    public function index($page)
    {
        $offset = ($page - 1) * 3;
        $quotes = Quote::select('*')
            ->offset($offset)
            ->limit(3)
            ->get();

        return $quotes;
    }

    public function numQuotes(Request $request)
    {
        $authorName = $request->query('author');

        if ($authorName) {
            return $this->searchByAuthor($authorName)->count();
        }

        return Quote::all()->count();
    }


    public function store(Request $request)
    {
        $quote = new Quote();
        $quote->author_name = $request->author_name;
        $quote->quote_text = $request->quote_text;
        $quote->oustanding = $request->oustanding;
        $quote->image = $request->image;

        $quote->save();

        return $quote;
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

    public function search(Request $request)
    {
        $authorName = $request->query('author');

        return $this->searchByAuthor($authorName);
    }

    private function searchByAuthor($authorName)
    {
        return Quote::select('*')
            ->where(
                DB::raw('lower(author_name)'),
                'LIKE',
                '%'.strtolower($authorName).'%',
            )
            ->get();
    }
}
