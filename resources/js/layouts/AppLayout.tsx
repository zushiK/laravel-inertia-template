import Toast from "@/components/Toast";
import { AppShell, MantineProvider, createTheme } from "@mantine/core";
import SideNavi from "./patials/SideNavi";
import Header from "./patials/Header";

type AppLayoutType = {
    children: React.ReactNode;
};

const theme = createTheme({
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
        ]
    }
});

export default function AppLayout(props: AppLayoutType) {
    return (
        <>
            <MantineProvider theme={theme}>
                {/* トースト */}
                <Toast />
                <AppShell
                    header={{ height: 60 }}
                    navbar={{
                        width: {
                            base: 200,
                            xl: 300
                        },
                        breakpoint: "sm"
                        // collapsed: { mobile: !opened }
                    }}
                    padding="md"
                >
                    {/* ヘッダー */}
                    <AppShell.Header>
                        <Header />
                    </AppShell.Header>

                    {/* サイドバー */}
                    <AppShell.Navbar p="md" className="overflow-y-auto">
                        <SideNavi />
                    </AppShell.Navbar>

                    {/* メイン */}
                    <AppShell.Main className="bg-slate-50">
                        {props.children}
                    </AppShell.Main>
                </AppShell>
            </MantineProvider>
        </>
    );
}
