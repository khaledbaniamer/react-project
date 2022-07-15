<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    // protected function validator(Request $request)
    // {
    //     $validator = Validator::make($request->all(),
    //     [
    //         'name' => 'required|string',
    //         'email' => 'email|required|unique:users',
    //         'pass' => 'required|min:8',
    // ]);
    //     if ($validator->fails()) {
    //         return response()->json(['errors' => $validator->errors()->all()]);
    //     }
    // }
    public  function getInfo($id)
    {

        $data = User::find($id);
        // $data = User::all();
        return $data;
    }

    public function update(Request $request,$id)
    {


        $user=User::find($id);

    //     $user->update([
    //     'name'=>$request->input('name'),
    //     'email'=>$request->input('email'),
    //     'age'=>$request->input('age'),
    //     'address'=>$request->input('address'),
    //     'phone'=>$request->input('phone')
    // ]);
    $user->name=$request->name;
    $user->email=$request->email;
    $user->age=$request->age;
    $user->address=$request->address;
    $user->phone=$request->phone;

    $user->save();
}
    public function registerAPI(Request $request)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'email' => 'email|required|unique:users',
                'pass' => 'required|min:8',
                'phone' => 'required|min:10|max:10',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->password = Hash::make($request->input('pass'));
        $user->save();

        return response($user, 201);
    }

    public function loginAPI(Request $request)
    {
        // $email = $request->email;
        // $user = User::where('email', $email);
        // return $user;

        $validator = Validator::make(
            $request->all(),
            [
                'email' => 'email|required',
                'pass' => 'required|min:8',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }

        $user = User::where('email', $request->input('email'))->first();

        if (!$user || !Hash::check($request->input('pass'), $user->password)) {
            return response()->json([
                'errors' => ['Email or Password is incorrect']
            ]);
        }
        return response($user, 201);
    }

    public function getUser($id)
    {
        $user = User::find($id);
        return $user;
    }


}
