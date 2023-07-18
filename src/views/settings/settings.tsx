import React from 'react';
import SettingsPanel from '@components/settings/settingsPanel.tsx';
import './settings.css';

const Settings = () => {
    const [tab, setTab] = React.useState('general');


    const openGeneral = () => {
        setTab('general');
    };

    const openPM = () => {
        setTab('pm');
    };

    const openNetwork = () => {
        setTab('network');
    };

    return (<div className='settings-container'>
        <div className='settings-sidebar'>
            <div onClick={openGeneral} className='settings-tab'>General</div>
            <div onClick={openPM} className='settings-tab'>Process Manager</div>
            <div onClick={openNetwork} className='settings-tab'>Network</div>
        </div>
        <div className='settings-pane'>
            {tab === 'general' && 
                <SettingsPanel panelName='General'>
                    <div></div>
                </SettingsPanel>
            }
            {tab === 'pm' && 
                <SettingsPanel panelName='Process Manager'>
                    <div>Content</div>
                </SettingsPanel>
            }
            {tab === 'network' &&
                <SettingsPanel panelName='Network'>
                    <div>Network</div>
                </SettingsPanel>
            }
        </div>
    </div>);
}

export default Settings;
