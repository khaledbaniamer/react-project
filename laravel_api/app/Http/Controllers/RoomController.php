<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public  function RoomAPI()
    {
        $rooms = Room::all();
        return $rooms;
    }

    public function single_room($id)
    {
        $single_room = Room::find($id);
        return $single_room;
    }


}
