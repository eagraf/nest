import { PropsWithChildren } from 'react';
import './settingsPanel.css';

type SettingPanelProps = {
  panelName: string;
};

const SettingsPanel = (props: PropsWithChildren<SettingPanelProps>) => {
  return (
    <div className="settings-panel">
      <h2>{props.panelName}</h2>
      {props.children}
    </div>
  );
};

export default SettingsPanel;
