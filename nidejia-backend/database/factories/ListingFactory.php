<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Listing>
 */
class ListingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title'=>ucwords(join(' ', fake()->words(2))),
            'description'=>fake()->paragraph(5),
            'address'=>fake()->address(),
            'sqft'=>fake()->randomNumber(2, true),
            'wifi_speed'=>fake()->randomNumber(2, true),
            'max_person'=>fake()->numberBetween(1, 5),
            'price_per_day'=>fake()->numberBetween(1, 5),
            'full_support_available'=>fake()->boolean(),
            'gym_area_available'=>fake()->boolean(),
            'mini_cafe_available'=>fake()->boolean(),
            'cinema_available'=>fake()->boolean()
        ];
    }
}
