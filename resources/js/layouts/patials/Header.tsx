import MainLogo from "@/components/Logo/MainLogo";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/20/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import { ActionIcon, Group, Menu } from "@mantine/core";

export default function Header() {
    return (
        <Group h="100%" px="lg" justify="space-between">
            <div>
                <Link href={route("home")}>
                    <MainLogo />
                </Link>
            </div>

            <div className="flex items-center gap-4 mr-4">
                <div className="p-2 flex items-center gap-2 rounded">
                    <div>
                        <p className="text-sm font-bold">川村和志</p>
                        <p className="text-sm text-gray-500 leading-3">
                            k.kawamura@sai.co.jp
                        </p>
                    </div>
                </div>
                <Menu withArrow position="bottom-end">
                    <Menu.Target>
                        <ActionIcon size={"lg"} variant="default">
                            <Cog6ToothIcon className="w-5 h-5" />
                        </ActionIcon>
                    </Menu.Target>

                    <Menu.Dropdown>
                        {/* <Menu.Label>Application</Menu.Label>
                    <Menu.Item leftSection={<TvIcon />}>
                        Settings
                    </Menu.Item>
                    <Menu.Item leftSection={<TvIcon />}>
                        Messages
                    </Menu.Item>
                    <Menu.Item leftSection={<TvIcon />}>
                        Gallery
                    </Menu.Item>
                    <Menu.Item
                        leftSection={<TvIcon />}
                        rightSection={<p>⌘K</p>}
                    >
                        Search
                    </Menu.Item>

                    <Menu.Divider /> */}

                        {/* <Menu.Item leftSection={<TvIcon />}>
                        Transfer my data
                    </Menu.Item> */}
                        <Link method="post" href={route("logout")}>
                            <Menu.Item
                                color="red"
                                leftSection={
                                    <ArrowLeftStartOnRectangleIcon className="w-4 h-4" />
                                }
                            >
                                ログアウト
                            </Menu.Item>
                        </Link>
                    </Menu.Dropdown>
                </Menu>
            </div>
        </Group>
    );
}
