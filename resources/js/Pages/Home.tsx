import { Head } from "@inertiajs/react";
import AppLayout from "@/layouts/AppLayout";
import { Pagination, Paper, Table } from "@mantine/core";
import PageLabel from "@/components/Label/PageLabel";

export default function Home(props: any) {
    return (
        <>
            <Head title="ダッシュボード" />
            <AppLayout>
                <Paper shadow="xs" radius="xs" p="xl">
                    <div className="flex flex-col gap-4">
                        <PageLabel label="ダッシュボード" />
                    </div>
                </Paper>
            </AppLayout>
        </>
    );
}
