import client from '../hooks/client';
import { CommunityStateResponse, ListCommunitiesResponse } from '../types/community';


class HabitatApi {
  getCommunities() {
    return client.post<ListCommunitiesResponse>("/community_list", {});
  }

  getCommunityState(communityId: string) {
    return client.post<CommunityStateResponse>("/community_state", { "community_id": communityId });
  }
}

export default new HabitatApi()
