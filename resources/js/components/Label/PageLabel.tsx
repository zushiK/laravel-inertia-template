import { Title } from "@mantine/core";

type PageLabelType = {
    label: string;
};

export default function PageLabel(props: PageLabelType) {
    return (
        <Title
            order={1}
            className="text-2xl border-b-2 border-primary px-2 py-1"
        >
            {props.label}
        </Title>
    );
}
