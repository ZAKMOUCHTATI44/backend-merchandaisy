<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calculators', function (Blueprint $table) {
            $table->id();
            $table->string('objectif');
            $table->float('activite');
            $table->string('gender');
            $table->foreignId('sectour_id')->constrained();
            $table->date('brithday');
            $table->integer('taille');
            $table->integer('poids');
            $table->integer('objectifPoids');
            $table->foreignUuid('user_id')->constrained();
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
        Schema::dropIfExists('calculators');
    }
};
