<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\User;

use Carbon\Carbon;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public  function getBooks()
    {
        $data = Book::all();
        $data2 = User::all();
        // $data = Book::find($id);
        // $data = User::all();
        
        return $data;

    }

    public  function getInfoBook($id)
    {
        $data = Book::where('user_id',$id)->get();

        // $data = Book::find($id);
        // $data = User::all();
        return $data;
    }
    
    public function addBook(Request $request)
    {


        // ['dateIn' => 'required',
        // 'dateOut' => 'required',] );
    
        // if ($validator->fails()) {
        //     return response()->json(['errors' => $validator->errors()->all()]);
        // }

        
        $book = new Book();
        $book->checkIn = $request->dataIn;
        $book->checkOut = $request->dataOut;
        $book->user_id = $request->user_id;
        $book->room_id = $request->room_id;
        $book->total_price = $request->total_price;
        

        $book->save();



    }
}
