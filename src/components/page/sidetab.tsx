import { PropsWithChildren } from "react"

export type SideTabProps = {
    id: string;
}

const SideTab = (props: PropsWithChildren<SideTabProps>) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default SideTab;
