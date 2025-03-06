import MainLogo from "@/components/Logo/MainLogo";
import Toast from "@/components/Toast";
import { Link } from "@inertiajs/react";
import { createTheme, MantineProvider } from "@mantine/core";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export const MANTINE_THEME = createTheme({
    fontFamily: "Open Sans, sans-serif",
    primaryColor: "wml",
    cursorType: "pointer",
    breakpoints: {
        xs: "200px",
        sm: "500px",
        md: "900px",
        lg: "1200px",
        xl: "1600px"
    },
    colors: {
        wml: [
            "#e5fdf4",
            "#d6f4ea",
            "#b3e6d3",
            "#8cd6bc",
            "#6bc9a8",
            "#55c29c",
            "#48be95",
            "#36a880",
            "#2b9572",
            "#138160"
        ],
        sub: [
            "#eef3ff",
            "#dce4f5",
            "#b9c7e2",
            "#94a8d0",
            "#748dc1",
            "#5f7cb8",
            "#5474b4",
            "#44639f",
            "#39588f",
            "#2d4b81"
        ]
    }
});

export default function Guest({ children }: Props) {
    return (
        <>
            <Toast />
            <MantineProvider theme={MANTINE_THEME}>
                <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                    <div className="text-center">
                        <Link href="/">
                            <MainLogo />
                            <p className="text-xl mt-2">テストテンプレート</p>
                        </Link>
                    </div>

                    <div className="my-4 flex gap-4">
                        <Link
                            href={route("login")}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            ログイン
                        </Link>

                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            パスワード変更
                        </Link>
                    </div>

                    <div className="w-full sm:max-w-md px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        {children}
                    </div>
                </div>
            </MantineProvider>
        </>
    );
}
