import { useState, useEffect } from 'react';
import { CommunityStateResponse } from '../../types/community';
import habitat from '../../api/habitat';
import { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';
import Page from '@components/page/page';
import SideTabPage from '@components/page/sidetabs';
import SideTab from '@components/page/sidetab';
import { CommunityState, Member, Node, Process, stateFactory } from '../../types/state';

const Community = () => {
  const { communityId } = useParams();
  const [communityState, setCommunityState] = useState<CommunityStateResponse>({ community_state: '' });
  const [unmarshaledState, setUnmarshaledState] = useState<CommunityState>(stateFactory(''));
  const [loading, setLoading] = useState<boolean>(true);

  const tabs: Map<string, string> = new Map([
    ['general', 'General'],
    ['members', 'Members'],
    ['nodes', 'Nodes'],
    ['fs', 'File System'],
  ]);

  useEffect(() => {
    const req = () => {
      setLoading(true);
      if (typeof communityId === 'string') {
        habitat
          .getCommunityState(communityId)
          .then((res: AxiosResponse) => {
            const state: CommunityStateResponse = res.data as CommunityStateResponse;
            console.log(atob(state.community_state));
            setCommunityState(state);
            const stateObj: CommunityState = JSON.parse(atob(state.community_state)) as CommunityState;
            setUnmarshaledState(stateObj);
          })
          .catch((err) => {
            console.error(err);
          });
      }
      setLoading(false);
    };
    req();
  }, [communityId]);

  return (
    <Page title="Community">
      <SideTabPage tabsMap={tabs} defaultTab="general">
        <SideTab id="general">
          <h2>General</h2>
          {loading ? <p>Loading...</p> : atob(communityState.community_state)}
        </SideTab>
        <SideTab id="members">
          <h2>Members</h2>
          {loading ? <p>Loading...</p> : unmarshaledState.members.map((member: Member) => <p>{member.username}</p>)}
        </SideTab>
        <SideTab id="nodes">
          <h2>Nodes</h2>
          {loading ? <p>Loading...</p> : unmarshaledState.nodes.map((node: Node) => <p>{node.id}</p>)}
        </SideTab>
        <SideTab id="fs">
          <h2>File System</h2>
        </SideTab>
      </SideTabPage>
    </Page>
  );
};

export default Community;
