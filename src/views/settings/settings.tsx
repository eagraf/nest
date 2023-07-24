import SettingsPanel from '@components/settings/settingsPanel';
import SideTabPage from '@components/page/sidetabs';
import Page from '@components/page/page';
import SideTab from '@components/page/sidetab';
import './settings.css';

const Settings = () => {
  const tabs: Map<string, string> = new Map([
    ['general', 'General'],
    ['pm', 'Process Manager'],
    ['network', 'Network'],
  ]);

  return (
    <Page title="settings">
      <SideTabPage tabsMap={tabs} defaultTab="general">
        <SideTab id="general">
          <SettingsPanel panelName="General" />
        </SideTab>
        <SideTab id="pm">
          <SettingsPanel panelName="Process Manager" />
        </SideTab>
        <SideTab id="network">
          <SettingsPanel panelName="Network" />
        </SideTab>
      </SideTabPage>
    </Page>
  );
};

export default Settings;
