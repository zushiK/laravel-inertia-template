import {
    Cog8ToothIcon,
    CubeIcon,
    InboxArrowDownIcon,
    PencilSquareIcon,
    Squares2X2Icon,
    TruckIcon
} from "@heroicons/react/20/solid";

import { NavLink } from "@mantine/core";

export default function SideNavi() {
    return (
        <>
            <NavLink
                color="cyan"
                active
                label="ダッシュボード"
                leftSection={<Squares2X2Icon className="w-5 h-5" />}
            />

            <NavLink
                defaultOpened={true}
                label="商品管理"
                leftSection={<CubeIcon className="w-5 h-5" />}
                childrenOffset={28}
            >
                <NavLink label="商品一覧" />
                <NavLink label="カテゴリ管理" />
                <NavLink label="商品画像管理" />
            </NavLink>

            <NavLink
                defaultOpened={true}
                label="受注管理"
                leftSection={<InboxArrowDownIcon className="w-5 h-5" />}
                childrenOffset={28}
            >
                <NavLink label="受注一覧" />
                <NavLink label="BO一覧" />
            </NavLink>

            <NavLink
                defaultOpened={true}
                label="発注管理"
                leftSection={<PencilSquareIcon className="w-5 h-5" />}
                childrenOffset={28}
            >
                <NavLink label="発注処理" />
                <NavLink label="発注済み一覧" />
                <NavLink label="仕入れ先管理" />
            </NavLink>

            <NavLink
                defaultOpened={true}
                label="発送管理"
                leftSection={<TruckIcon className="w-5 h-5" />}
                childrenOffset={28}
            >
                <NavLink label="発送処理" />
                <NavLink label="決済確認" />
                <NavLink label="発送データ一覧" />
                <NavLink label="当日分発送処理" />
                <NavLink label="B2出力" />
                <NavLink label="入荷欠品・キャンセル処理" />
            </NavLink>

            <NavLink
                defaultOpened={true}
                label="システム管理"
                leftSection={<Cog8ToothIcon className="w-5 h-5" />}
                childrenOffset={28}
            >
                <NavLink label="ユーザー管理" />
                <NavLink label="モール情報管理" />
            </NavLink>
        </>
    );
}
