<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->string('subject');
            $table->unsignedBigInteger('user_id_comment');
            $table->unsignedBigInteger('room_id_comment');

             $table->foreign('user_id_comment')->on('users')->references('id')->onDelete('CASCADE')->onUpdate('CASCADE');
             $table->foreign('room_id_comment')->on('rooms')->references('id')->onDelete('CASCADE')->onUpdate('CASCADE');
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
        Schema::dropIfExists('comments');
    }
}
