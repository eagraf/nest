type CommunityState = {
  community_id: string;
  members: Member[];
  nodes: Node[];
  processes: Process[];
  process_instances: string[];
};

type Member = {
  id: string;
  username: string;
  certificate: string;
};

type Node = {
  id: string;
  p2p_id: string;
  address: string;
  ipfs_swarm_address: string;
  certificate: string;
};

type Process = {
  id: string;
};

export type { CommunityState, Member, Node, Process };

export const stateFactory = (communityId: string): CommunityState => {
  return {
    community_id: communityId,
    members: [],
    nodes: [],
    processes: [],
    process_instances: [],
  };
};
