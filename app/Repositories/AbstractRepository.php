<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Symfony\Component\HttpKernel\Exception\HttpException;

class AbstractRepository
{
    /**
     * 継承元でmodelのDIを行う
     *
     * @var Model $model
     */
    protected $model;

    protected $default_order_column = "id";
    protected $default_order_direction = "desc";

    /**
     * モデル全体に対するクエリを返す
     * ActiveFlgなどの共通条件をここで設定する
     * フロントとバックエンドで切り分ける場合はServiceで切り分ける
     *
     * @param array $with
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function baseQuery(array $with = [])
    {
        return $this->model->with($with);
    }

    /**
     * 1件取得
     *
     * @param string $id
     * @param array $with
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function find(string $id, array $with = [])
    {
        $a = $this->baseQuery($with)->find($id);
        if (!$a) throw new HttpException(404, "resource not found");
        return $a;
    }

    /**
     * 検索条件から1件取得
     *
     * @param array $search
     * @param array $with
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function first(array $search, array $with = [])
    {
        $qb = $this->searchQuery($this->baseQuery($with), $search);
        $qb = $this->buildOrderQuery($qb, $search);
        return $qb->first();
    }

    /**
     * 複数取得
     *
     * @param array[int] $ids
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function some(array $ids, array $with = [])
    {
        return $this->baseQuery($with)->whereIn("id", $ids)->get();
    }

    /**
     * build order query
     *
     * @param \Illuminate\Database\Eloquent\Builder $qb
     * @param array $search
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function buildOrderQuery($qb, $search)
    {
        if (!empty($search["order"]) && !empty($search["orderby"])) {
            $qb->orderBy($search["order"], $search["orderby"]);
        } else {
            $qb->orderBy($this->default_order_column, $this->default_order_direction);
        }

        return $qb;
    }

    /**
     * @param \Illuminate\Database\Eloquent\Builder $qb
     * @param array $search
     * @return Builder
     */
    protected function searchQuery($qb, array $search = [])
    {
        return $qb;
    }

    /**
     * 全取得
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAll($search = [], array $with = [])
    {
        $q = $this->baseQuery($with);
        $q = $this->searchQuery($q, $search);
        return $this->buildOrderQuery($q, $search)->get();
    }

    /**
     * セレクトボックス用リスト取得
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function list($column = null, $search = [])
    {
        $qb = $this->baseQuery()->select(["id as value", ($column ?? "name") . " as label"]);
        $this->searchQuery($qb, $search);
        $this->buildOrderQuery($qb, $search);
        return $qb->get();
    }

    /**
     * @param \Illuminate\Database\Eloquent\Builder $qb
     * @return \Illuminate\Pagination\LengthAwarePaginator
     */
    protected function basePaginate($qb, $perpage)
    {
        // appendsはここに書いていのか？
        return $qb->paginate($perpage)->appends(request()->except("page"));
    }

    /**
     * ページネーション
     *
     * @param int $perpage
     * @param array $search
     * @param array $with
     * @return \Illuminate\Pagination\LengthAwarePaginator
     */
    public function paginate($perpage, array $search = [], array $with = [])
    {
        $qb = $this->baseQuery($with);
        $qb = $this->searchQuery($qb, $search);
        $qb = $this->buildOrderQuery($qb, $search);
        return $this->basePaginate($this->buildOrderQuery($qb, $search), $perpage);
    }

    /**
     * 件数取得
     * @param array $search
     * @return int
     */
    public function count(array $search = []): int
    {
        return $this->searchQuery($this->baseQuery(), $search)->count();
    }

    /**
     * 新規作成
     * 戻り値は必ずModelを返すようにする
     *
     * @param array $data
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function create(array $data): \Illuminate\Database\Eloquent\Model
    {
        return $this->baseQuery()->create($data);
    }

    /**
     * 一括挿入
     *
     * @param array $data
     * @return bool
     */
    public function insert(array $data): bool
    {
        return $this->baseQuery()->insert($data);
    }

    /**
     * 1件更新
     * 戻り値は必ずModelを返すようにする
     *
     * @param string $id
     * @param array $data
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function update(string $id, array $data): \Illuminate\Database\Eloquent\Model
    {
        $m = $this->find($id);
        $m->fill($data)->save();
        return $m;
    }

    /**
     * アップサート
     *
     * @param array $conditions 条件
     * @param array $data データ
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function upsert(array $conditions, array $data)
    {
        return $this->baseQuery()->updateOrCreate($conditions, $data);
    }

    /**
     * 1件削除
     * 戻り値は必ずModelを返すようにする
     *
     * @param string $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function delete(string $id): \Illuminate\Database\Eloquent\Model
    {
        $item = $this->find($id);
        $item->delete();
        return $item;
    }

    /**
     * 存在チェック
     *
     * @param array $search
     * @return bool
     */
    public function exists(array $search): bool
    {
        return $this->searchQuery($this->baseQuery(), $search)->exists();
    }
}
