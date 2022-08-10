<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Models\Post;
use Illuminate\Http\JsonResponse;

class StoreController extends Controller
{

    /**
     * @return JsonResponse
     */
    public function __invoke(PostRequest $request): JsonResponse
    {
        Post::create($request->post());

        return response()->json([
            'message' => 'The post has been successfully added.'
        ]);
    }
}
