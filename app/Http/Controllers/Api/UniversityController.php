<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Hipolabs\Services\UniversityService;
use Illuminate\Http\Request;

class UniversityController extends Controller
{
    protected $universityService;

    public function __construct()
    {
        $this->universityService = new UniversityService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = $request->query('query');

        $universities = $this->universityService->search($query);

        return $universities;
    }
}
