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
        Schema::create('orders', function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->foreignUlid('user_id')->constrained();
            $table->foreignid('code_promo_id')->nullable()->constrained();
            $table->tinyInteger('state')->default(0)->comment('[ 0 => "nouveau", 1 => "en préparation", 2 => "en route", 3 => "livrée", 4 => "annulée"]');
            $table->longText('comment')->nullable();
            $table->integer('sectour_id')->nullable();
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
        Schema::dropIfExists('orders');
    }
};
