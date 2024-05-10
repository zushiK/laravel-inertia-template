<?php

namespace App\Repositories;

use App\Models\Product;
use App\Repositories\AbstractRepository;

class ProductRepository extends AbstractRepository
{
    /**
     * @var Product
     */
    protected $model;

    /**
     * @param Product $model
     */
    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    protected function searchQuery($qb, array $search = [])
    {
        if ($search["freeword"] ?? false) {
            $qb->where(function ($query) use ($search) {
                $query->where("name", "like", "%{$search["freeword"]}%")
                    ->orwhere("kana", "like", "%{$search["freeword"]}%");
            });
        }
        return $qb;
    }
}
