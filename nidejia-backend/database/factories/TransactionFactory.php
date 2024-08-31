<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startDate = fake()->dateTimeThisMonth();
        return [
            'start_date' => $startDate,
            'end_date' => Carbon::createFromDate($startDate)->addDays(fake()->numberBetween(1, 5)),
            'status' => fake() ->randomElement(['waiting', 'approved', 'canceled'])

        ];
    }
}
