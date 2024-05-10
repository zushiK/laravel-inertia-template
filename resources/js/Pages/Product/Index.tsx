import { Head } from "@inertiajs/react";
import AppLayout from "@/layouts/AppLayout";
import { Pagination, Paper, Table } from "@mantine/core";
import PageLabel from "@/components/Label/PageLabel";

export default function Index() {
    return (
        <>
            <Head title="商品管理" />
            <AppLayout>
                <Paper shadow="xs" radius="xs" p="xl">
                    <div className="flex flex-col gap-4">
                        <PageLabel label="商品管理" />

                        <Table
                            stickyHeader
                            stickyHeaderOffset={70}
                            striped
                            stripedColor="#f7fafc"
                            highlightOnHover
                            withColumnBorders
                            withRowBorders
                        >
                            <Table.Thead style={{ backgroundColor: "#edf2f7" }}>
                                <Table.Tr>
                                    <Table.Th>Element position</Table.Th>
                                    <Table.Th>Element name</Table.Th>
                                    <Table.Th>Symbol</Table.Th>
                                    <Table.Th>Atomic mass</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {/* 100回ループ */}
                                {Array.from({ length: 100 }).map((_, index) => (
                                    <Table.Tr>
                                        <Table.Td>Atomic mass</Table.Td>
                                        <Table.Td>Atomic mass</Table.Td>
                                        <Table.Td>Atomic mass</Table.Td>
                                        <Table.Td>Atomic mass</Table.Td>
                                    </Table.Tr>
                                ))}
                            </Table.Tbody>
                        </Table>

                        <Pagination
                            color="wml"
                            total={20}
                            boundaries={3}
                            defaultValue={1}
                        />
                    </div>
                </Paper>
            </AppLayout>
        </>
    );
}
