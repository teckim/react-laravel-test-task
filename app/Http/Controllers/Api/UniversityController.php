<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class UniversityController extends Controller
{
    private $BASE_URL = "http://universities.hipolabs.com/search";
    private $MAX_COUNT = 5;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = $request->query('query');
        $shared_query = [
            'limit' => 5,
            'offset' => 0,
        ];

        $unis_by_country = Http::get($this->BASE_URL, [...$shared_query, 'country' => $query])->json();
        $unis_by_name = Http::get($this->BASE_URL, [...$shared_query, 'name_contains' => $query])->json();
        $unis_by_domain = Http::get($this->BASE_URL, [...$shared_query, 'domain' => $query])->json();

        $universities = collect([...$unis_by_country, ...$unis_by_name, ...$unis_by_domain])
            ->map(fn(array $item, int $key) => ["id" => $key, ...$item])
            ->unique('name')
            ->slice(0, $this->MAX_COUNT);

        return $universities->values()->all();
    }
}
