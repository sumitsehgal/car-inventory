<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Manufacturer;
use App\Models;
use Faker\Generator as Faker;

$factory->define(Manufacturer::class, function (Faker $faker) {
    $faker->addProvider(new \Faker\Provider\Fakecar($faker));
    $v = $faker->vehicleArray();
    return [
        'title' => $v['brand'],
    ];
});

$factory->define(Models::class, function ($faker) use ($factory) {
    $manufacturers = Manufacturer::all()->pluck('id');
    return [

    'name' => $faker->company(),
    'manfacturer_id' => $faker->randomElement($manufacturers),
    'color' => $faker->colorName,
    'manufacturer_year' => $faker->year(),
    'register_no' => $faker->uuid,
    'note' => $faker->realText()

    ];
});
