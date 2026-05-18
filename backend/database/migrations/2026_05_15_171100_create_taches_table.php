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
   Schema::create('taches', function (Blueprint $table) {

    $table->id();

    $table->string('titre');

    $table->text('description')->nullable();

    // type contenu
    $table->enum('type', [
        'cours',
        'exercice',
        'devoir',
        'video',
        'image',
        'document',
        'annonce'
    ]);

    // fichier upload
    $table->string('fichier')->nullable();

    // lien video youtube مثلا
    $table->string('lien')->nullable();

    // date limite
    $table->date('date_limite')->nullable();

    $table->foreignId('formateur_id')
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
        Schema::dropIfExists('taches');
    }
};
