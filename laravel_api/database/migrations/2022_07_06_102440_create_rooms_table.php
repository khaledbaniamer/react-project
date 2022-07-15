<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->string('room_name');
            $table->string('room_size');
            $table->string('room_facilities');
            $table->string('room_description',500);
            $table->string('room_image');
            $table->string('room_price');
            $table->timestamps();
        });

        DB::table('rooms')->insert(
            array(
                'room_name'=>'Deluxe Double Queen',
                'room_description'=>'Comfy beds, 9.3 – Based on 85 reviews This quadruple room has a seating area, air conditioning and tea/coffee maker.Pets are not allowed in this room.Free WiFi ',
                'room_size'=>'43 m²',
                'room_facilities'=>'Interconnected room(s) available Smoking: ​No smoking',
                'room_image'=>'room1.jpg',
                'room_price'=>'250'
            )
            );

            DB::table('rooms')->insert(
                array(
                    'room_name'=>'Deluxe King Room',
                    'room_description'=>'Comfy beds, 9.3 – Based on 85 reviews Rooms are 39 square metres. Free WiFi',
                    'room_size'=>'39 m²',
                    'room_facilities'=>'Interconnected room(s) available Smoking: ​No smoking',
                    'room_image'=>'room2.jpg',
                    'room_price'=>'300'
                )
                );

            DB::table('rooms')->insert(
                array(
                    'room_name'=>'Deluxe King Balcony',
                    'room_description'=>'Comfy beds, 9.3 – Based on 85 reviews This double room has a balcony, air conditioning and bathrobe. Pets are not allowed in this room. Free WiFi',
                    'room_size'=>'39 m²',
                    'room_facilities'=>'Interconnected room(s) available Smoking: ​No smoking',
                    'room_image'=>'room3.jpg',
                    'room_price'=>'200'
                )
                );

            DB::table('rooms')->insert(
                array(
                    'room_name'=>'Junior King Suite',
                    'room_description'=>'Comfy beds, 9.3 – Based on 85 reviews This suite has a tea/coffee maker, sofa and bathrobe.Pets are not allowed in this room.Free WiFi ',
                    'room_size'=>'51 m²',
                    'room_facilities'=>'Alarm clock Wardrobe or closet Tea/Coffee maker Air conditioning',
                    'room_image'=>'room4.jpg',
                    'room_price'=>'350'
                )
                );
                DB::table('rooms')->insert(
                    array(
                        'room_name'=>'Bay View Double Queen',
                        'room_description'=>'Comfy beds, 9.3 – Based on 85 reviews This quadruple room has air conditioning, tea/coffee maker and sofa.Pets are not allowed in this room. Free WiFi',
                        'room_size'=>'43 m²',
                        'room_facilities'=>'Alarm clock Wardrobe or closet Tea/Coffee maker Air conditioning Safety deposit box Private entrance',
                        'room_image'=>'room5.jpg',
                        'room_price'=>'150'
                    )
                );
                DB::table('rooms')->insert(
                    array(
                        'room_name'=>'ADA Executive King Suite with Roll-in Shower',
                        'room_description'=>'Comfy beds, 9.3 – Based on 85 reviews This double room features a balcony, dining area and tea/coffee maker.Pets are not allowed in this room. Free WiFi',
                        'room_size'=>'81 m²',
                        'room_facilities'=>'Alarm clock Wardrobe or closet Tea/Coffee maker Air conditioning Safety deposit box Private entrance',
                        'room_image'=>'room6.jpg',
                        'room_price'=>'250'
                    )
                );
                DB::table('rooms')->insert(
                    array(
                        'room_name'=>'Executive Double Queen Suite',
                        'room_description'=>'Comfy beds, 9.3 – Based on 85 reviews This suite has a balcony, private entrance and tea/coffee maker.Pets are not allowed in this room.Free WiFi Parking (extra fee) ',
                        'room_size'=>'60 m²',
                        'room_facilities'=>'Interconnected room(s) available Smoking: ​No smoking',
                        'room_image'=>'room7.jpg',
                        'room_price'=>'175'
                    )
                );
                DB::table('rooms')->insert(
                    array(
                        'room_name'=>'ADA Junior King Suite with Roll-in Shower',
                        'room_description'=>'Comfy beds, 9.3 – Based on 85 reviews This double room features a sofa, seating area and tea/coffee maker.Pets are not allowed in this room. Free WiFi ',
                        'room_size'=>'39 m²',
                        'room_facilities'=>'Alarm clock Wardrobe or closet Tea/Coffee maker Air conditioning Safety deposit box Private entrance',
                        'room_image'=>'room8.jpg',
                        'room_price'=>'175'
                    )
                );
                DB::table('rooms')->insert(
                    array(
                        'room_name'=>'Grand King Balcony',
                        'room_description'=>'Comfy beds, 9.3 – Based on 85 reviewsThis suite features a balcony, air conditioning and tea/coffee maker.Pets are not allowed in this room.Free WiFi',
                        'room_size'=>'44 m²',
                        'room_facilities'=>'Alarm clock Wardrobe or closet Tea/Coffee maker Air conditioning Safety deposit box Private entrance',
                        'room_image'=>'room9.jpg',
                        'room_price'=>'175'
                    )
                );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rooms');
    }
}
