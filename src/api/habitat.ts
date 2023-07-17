import client from '../hooks/client';
import ListCommunitiesResponse from '../types/community';


class HabitatApi {
  getCommunities() {
    return client.post<ListCommunitiesResponse>("/community_list", {});
  }
}

export default new HabitatApi()
