<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\JsonResponse;

class DeleteController extends Controller
{

    /**
     * @return JsonResponse
     */
    public function __invoke(Post $post): JsonResponse
    {
        $post->delete();
        return response()->json([
            'message' => 'The post has been successfully deleted.'
        ]);
    }
}
