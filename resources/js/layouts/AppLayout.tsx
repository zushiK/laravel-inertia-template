import { Link } from "@inertiajs/react";

type AppLayoutType = {
    children: React.ReactNode;
};

export default function AppLayout(props: AppLayoutType) {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    {/* <ApplicationLogo className="block h-9 w-auto text-gray-500" /> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="container p-4">{props.children}</main>
        </div>
    );
}
