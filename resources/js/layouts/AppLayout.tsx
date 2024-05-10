import { Link } from "@inertiajs/react";
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NextUIProvider
} from "@nextui-org/react";

type AppLayoutType = {
    children: React.ReactNode;
};

export default function AppLayout(props: AppLayoutType) {
    return (
        <NextUIProvider>
            <Navbar
                isBordered
                shouldHideOnScroll
                className="bg-primary"
                maxWidth="xl"
            >
                <NavbarBrand>
                    {/* <AcmeLogo /> */}
                    <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center"
                >
                    <Dropdown>
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                    // endContent={icons.chevron}
                                    radius="sm"
                                    variant="light"
                                >
                                    Features
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            aria-label="ACME features"
                            className="w-[340px]"
                            itemClasses={{
                                base: "gap-4"
                            }}
                        >
                            <DropdownItem
                                key="autoscaling"
                                description="ACME scales apps to meet user demand, automagically, based on load."
                                // startContent={icons.scale}
                            >
                                Autoscaling
                            </DropdownItem>
                            <DropdownItem
                                key="usage_metrics"
                                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                                // startContent={icons.activity}
                            >
                                Usage Metrics
                            </DropdownItem>
                            <DropdownItem
                                key="production_ready"
                                description="ACME runs on ACME, join us and others serving requests at web scale."
                                // startContent={icons.flash}
                            >
                                Production Ready
                            </DropdownItem>
                            <DropdownItem
                                key="99_uptime"
                                description="Applications stay on the grid with high availability and high uptime guarantees."
                                // startContent={icons.server}
                            >
                                +99% Uptime
                            </DropdownItem>
                            <DropdownItem
                                key="supreme_support"
                                description="Overcome any challenge with a supporting team ready to respond."
                                // startContent={icons.user}
                            >
                                +Supreme Support
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">
                        <Link method="post" href={route("logout")}>
                            ログアウト
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button
                            as={Link}
                            color="primary"
                            href="#"
                            variant="flat"
                        >
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <main className="container p-4">{props.children}</main>
            <main className="container p-4">{props.children}</main>
            <main className="container p-4">{props.children}</main>
            <main className="container p-4">{props.children}</main>
            <main className="container p-4">{props.children}</main>
            <main className="container p-4">{props.children}</main>
            <main className="container p-4">{props.children}</main>
            <main className="container p-4">{props.children}</main>
            <main className="container p-4">{props.children}</main>
            <main className="container p-4">{props.children}</main>
            <main className="container p-4">{props.children}</main>
            <main className="container p-4">{props.children}</main>
            <main className="container p-4">{props.children}</main>
            <main className="container p-4">{props.children}</main>
            <main className="container p-4">{props.children}</main>
            <main className="container p-4">{props.children}</main>
            <main className="container p-4">{props.children}</main>
        </NextUIProvider>
    );
}
