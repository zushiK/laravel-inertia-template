import React, { useEffect } from "react";
import Button from "@/components/Button";
import Guest from "@/layouts/Guest";
import Input from "@/components/Input";
import Label from "@/components/Label";
import ValidationErrors from "@/components/ValidationErrors";
import { Head, useForm } from "@inertiajs/react";

interface Props {
    token: string;
    email: string;
}

type Name = "email" | "password" | "password_confirmation" | "token";

export default function ResetPassword({ token, email }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.name as Name, event.target.value);
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("password.store"));
    };

    return (
        <Guest>
            <Head title="パスワード変更" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="メールアドレス" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="パスワード" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label
                        forInput="password_confirmation"
                        value="パスワード(確認)"
                    />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center justify-center mt-4">
                    <Button
                        className="ml-4 bg-gray-900"
                        processing={processing}
                    >
                        パスワードを変更する
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
