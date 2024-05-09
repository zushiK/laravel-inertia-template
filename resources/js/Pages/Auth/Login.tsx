import React, { useEffect } from "react";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Guest from "@/layouts/Guest";
import Input from "@/components/Input";
import Label from "@/components/Label";
import ValidationErrors from "@/components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/react";

interface Props {
    status: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(
            event.target.name as "email" | "password" | "remember",
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Guest>
            <Head title="ログイン" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <div className="text-right">
                <Link
                    href={route("register")}
                    className="underline mb-2 text-sm text-gray-600 hover:text-gray-900"
                >
                    新規登録はこちら
                </Link>
            </div>

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="Email" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            handleChange={onHandleChange}
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            ログイン情報を記憶する
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            パスワードを忘れた方はこちら
                        </Link>
                    )}

                    <Button
                        className="ml-4 bg-gray-900"
                        processing={processing}
                    >
                        ログイン
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
