import React from 'react';
import { PropsWithChildren, Children, ReactElement } from 'react';
import { SideTabProps } from './sidetab';
import './sidetab.css';

type SidetabPageProps = {
    tabsMap: Map<string, string>;
    defaultTab: string;
}

const SideTabPage = (props: PropsWithChildren<SidetabPageProps>) => {

    const [currentTab, setCurrentTab] = React.useState(props.defaultTab);

    return (
        <div className='sidetab-container'>
            <div className='sidebar'>
                {[...props.tabsMap.keys()].map((label) => {
                    return (
                        <div 
                            className='sidetab-tab'
                            onClick={() => setCurrentTab(label)}
                        >
                            {props.tabsMap.get(label)}
                        </div>
                    );
                })}
            </div>
            <div className='sidetab-content'>
                <div>
                {
                    props.children && currentTab &&
                    Children.map(props.children, (child) => {
                        const c = child as ReactElement;
                        const tabProps: SideTabProps  = c.props as SideTabProps;
                        return tabProps.id === currentTab ? child : null;
                    })
                }
                </div>
            </div>
        </div>
    );
};

export default SideTabPage;
