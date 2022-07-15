<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use phpDocumentor\Reflection\Types\Nullable;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->date('checkIn');
            $table->date('checkOut');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('room_id');
            $table->double('total_price');

            $table->foreign('user_id')->on('users')->references('id')->onDelete('CASCADE')->onUpdate('CASCADE');
            $table->foreign('room_id')->on('rooms')->references('id')->onDelete('CASCADE')->onUpdate('CASCADE');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
