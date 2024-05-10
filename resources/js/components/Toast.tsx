import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { Toaster, toast } from "sonner";

export type PageProps = {
    flash: FlashType;
};

export type FlashType = {
    success: string | null;
    error: string | null;
};

export const toastOptions = {
    action: {
        label: "✖︎",
        onClick: () => toast.dismiss()
    },
    actionButtonStyle: {
        backgroundColor: "transparent",
        color: "#000"
    }
};

export default function Toast() {
    const flash = usePage<PageProps>().props.flash;

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success, toastOptions);
        }
        if (flash.error) {
            toast.error(flash.error, toastOptions);
        }
    }, [flash]);

    return <Toaster richColors expand position="top-right" />;
}
