<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\JsonResponse;

class EditController extends Controller
{

    /**
     * @return JsonResponse
     */
    public function __invoke(int $postId): JsonResponse
    {
        $post = Post::find($postId);

        return response()->json($post);
    }
}
