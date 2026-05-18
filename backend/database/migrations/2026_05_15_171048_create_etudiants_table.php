<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
    Schema::create('etudiants', function (Blueprint $table) {
    $table->id();

    $table->string('first_name');

    $table->string('last_name');

    $table->date('date_naissance')->nullable();

    $table->string('lieu_naissance')->nullable();

    $table->enum('gender', [
        'male',
        'female'
    ])->nullable();

    $table->string('photo')->nullable();

    $table->string('address')->nullable();

    $table->string('nationalite')->nullable();

    $table->enum('status', [
        'pending',
        'accepted',
        'refused'
    ])->default('pending');

    $table->foreignId('parent_id')
        ->constrained('users')
        ->onDelete('cascade');

    $table->foreignId('niveau_id')
        ->constrained()
        ->onDelete('cascade');

    $table->foreignId('classe_id')
        ->constrained()
        ->onDelete('cascade');

    $table->foreignId('groupe_id')
        ->constrained()
        ->onDelete('cascade');

    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('etudiants');
    }
};
