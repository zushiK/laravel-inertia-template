<?php

namespace App\Services;

use App\Repositories\AbstractRepository;

class AbstractService
{
    /**
     * 継承元でrepositoryのDIを行う
     *
     * @var AbstractRepository
     */
    protected $repository;

    /**
     * idから一つ取得
     *
     * @param string $id
     * @param array $with
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function find(string $id, array $with = [])
    {
        return $this->repository->find($id, $with);
    }

    /**
     * 検索条件から一つ取得
     *
     * @param string $id
     * @param array $with
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function first(array $search = [], array $with = [])
    {
        return $this->repository->first($search, $with);
    }

    /**
     * idから複数取得取得
     *
     * @param array $ids
     * @param array $with
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function some(array $ids, array $with = [])
    {
        return $this->repository->some($ids, $with);
    }

    /**
     * 全件取得
     * @param array $search
     * @param array $with
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAll($search = [], array $with = [])
    {
        return $this->repository->getAll($search, $with);
    }

    /**
     * セレクトボックス用リスト取得
     *
     * @param string $column
     * @param array $search
     * @return array
     */
    public function list($column = null, $search = [])
    {
        // デフォルトの並び順はID昇順にする
        if (empty($search["order"]) && empty($search["orderby"])) {
            $search["order"] = "id";
            $search["orderby"] = "asc";
        }
        return $this->repository->list($column, $search)->toArray();
    }

    /**
     * ページネーション
     * @param int|null $perpage
     * @param array $search
     * @param array $with
     *
     * @return \Illuminate\Pagination\LengthAwarePaginator
     */
    public function paginate(int $perpage = null, array $search = [], array $with = [])
    {
        $perpage = $perpage ?? config('const.PER_PAGE');
        return $this->repository->paginate($perpage, $search, $with);
    }

    /**
     * 件数取得
     * @param   array $search
     * @return  int
     */
    public function count($search): int
    {
        return $this->repository->count($search);
    }

    /**
     * 新規作成
     *
     * @param array $data
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function create(array $data)
    {
        return $this->repository->create($data);
    }

    /**
     * 更新
     *
     * @param string $id
     * @param array $data
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function update(string $id, array $data)
    {
        return $this->repository->update($id, $data);
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
        return $this->repository->upsert($conditions, $data);
    }

    /**
     * 削除
     *
     * @param string $id
     * @param array $data
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function delete(string $id)
    {
        return $this->repository->delete($id);
    }

    public function exists(array $search)
    {
        return $this->repository->exists($search);
    }
}
