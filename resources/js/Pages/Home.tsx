import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Authenticated from "@/layouts/Authenticated";
import AppLayout from "@/layouts/AppLayout";

export default function Home(props: any) {
    return (
        <>
            <Head title="Dashboard" />
            <AppLayout>
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200 text-primary">
                        You're logged in!
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
