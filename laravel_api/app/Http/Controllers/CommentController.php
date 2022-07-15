<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CommentController extends Controller
{

        public  function CommentAPI($id)
    {
        $com = Comment::select('comments.*', 'users.name')
        ->join('users', 'users.id', '=', 'comments.user_id_comment')->get();
        return $com;
    }

    
    public function addComment(Request $request)
    {
        
        $comment = new Comment();
        $comment->subject = $request->subject;
        $comment->user_id_comment = $request->user_id_comment;
        $comment->room_id_comment = $request->room_id_comment;
        $comment->save();

    }
}
