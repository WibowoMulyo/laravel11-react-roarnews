<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(6, true),
            'description' => fake()->paragraph(2, true),
            'category' => fake()->word(),
            'author' => fake()->name(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}