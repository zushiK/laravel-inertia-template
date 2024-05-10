<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Services\ProductService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * @param ProductService $repository
     */
    public function __construct(private ProductService $service)
    {
    }

    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory
     */
    public function index(Request $request)
    {
        $search = $request->freeword ? ["freeword" => $request->freeword] : [];
        $datas = $this->service->paginate($request->perpage, $search);
        return Inertia::render('Product/Index', compact("datas", "search"));
    }

    /**
     * @return \Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory
     */
    public function create()
    {
        return Inertia::render('Product/Create');
    }

    /**
     * @param  ProductRequest  $request
     * @return \Illuminate\Routing\Redirector|\Illuminate\Http\RedirectResponse
     */
    public function store(ProductRequest $request)
    {
        $this->service->create($request->validated());
        return to_route("product.index")->with("success", "新規作成が完了しました。");
    }

    /**
     * @return \Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory
     */
    public function edit($id)
    {
        $data = $this->service->find($id);
        return Inertia::render('Product/Update', compact("data"));
    }

    /**
     * @param  CustomerRequest  $request
     * @param  string $id
     * @return \Illuminate\Routing\Redirector|\Illuminate\Http\RedirectResponse
     */
    public function update(ProductRequest $request, $id)
    {
        $a = $this->service->update($id, $request->validated());
        return to_route("product.index")->with("success", "更新が完了しました");
    }

    /**
     * @param  string $id
     * @return \Illuminate\Routing\Redirector|\Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $a = $this->service->delete($id);
        return to_route("product.index")->with("success", "削除しました");
    }
}
