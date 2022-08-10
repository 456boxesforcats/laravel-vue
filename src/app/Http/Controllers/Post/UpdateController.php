<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Models\Post;
use Illuminate\Http\JsonResponse;

class UpdateController extends Controller
{

    /**
     * @return JsonResponse
     */
    public function __invoke(PostRequest $request, Post $post): JsonResponse
    {
        $post->fill($request->post())->save();

        return response()->json([
            'message' => 'The post has been successfully updated.'
        ]);
    }
}
