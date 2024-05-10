import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Authenticated from "@/layouts/Authenticated";
import AppLayout from "@/layouts/AppLayout";
import { Paper, Rating, Table } from "@mantine/core";

export default function Home(props: any) {
    return (
        <>
            <Head title="Dashboard" />
            <AppLayout>
                <Paper shadow="xs" radius="xs" p="xl">
                    <Table
                        striped
                        highlightOnHover
                        withColumnBorders
                        withRowBorders={false}
                    >
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Element position</Table.Th>
                                <Table.Th>Element name</Table.Th>
                                <Table.Th>Symbol</Table.Th>
                                <Table.Th>Atomic mass</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr>
                                <Table.Td>Atomic mass</Table.Td>
                                <Table.Td>Atomic mass</Table.Td>
                                <Table.Td>Atomic mass</Table.Td>
                                <Table.Td>Atomic mass</Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>
                </Paper>
            </AppLayout>
        </>
    );
}
