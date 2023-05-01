<?php

namespace App\Hipolabs\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class UniversityService
{
    protected $cacheTTL; // 5 Minutes
    private $LIMIT = 5;

    public function __construct()
    {
        $this->cacheTTL = config('services.hipolabs.cache_ttl');

        Http::macro('hipolabs', function () {
            return Http::baseUrl(config('services.hipolabs.base_url'));
        });
    }

    public function search($query)
    {
        return Cache::remember($query, $this->cacheTTL, function () use ($query) {
            return $this->get($query);
        });

    }

    public function get($query)
    {
        $endpoint = '/search';
        $params =  [
            'limit' => $this->LIMIT,
            'offset' => 0,
        ];

        $unis_by_country = Http::hipolabs()
            ->get($endpoint, [...$params, 'country' => $query])
            ->json();
        $unis_by_name = Http::hipolabs()
            ->get($endpoint, [...$params, 'name_contains' => $query])
            ->json();
        $unis_by_domain = Http::hipolabs()
            ->get($endpoint, [...$params, 'domain' => $query])
            ->json();

        return collect([...$unis_by_country, ...$unis_by_name, ...$unis_by_domain])
            ->map(fn(array $item, int $key) => ["id" => $key, ...$item])
            ->unique('name')
            ->slice(0, $this->LIMIT)
            ->values()
            ->all();
    }
}
