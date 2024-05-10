import React from "react";
import ApplicationLogo from "@/components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";
import Toast from "@/components/Toast";

interface Props {
    children: React.ReactNode;
}

export default function Guest({ children }: Props) {
    return (
        <>
            <Toast />
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                <div className="text-center">
                    <Link href="/">
                        <p className="text-3xl font-wml">World Motor Life</p>
                        <p className="text-xl mt-2">(仮) New Crossmall</p>
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
        </>
    );
}
