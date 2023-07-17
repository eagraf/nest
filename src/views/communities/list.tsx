import { useState, useEffect } from "react" 
import habitat from "../../api/habitat"
import ListCommunitiesResponse from "../../types/community";
import { AxiosResponse } from "axios";

const CommunityList = () => {
    const [communities, setCommuntities] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    console.log("AHHH");
    console.log(import.meta.env.VITE_HABITAT_NODE_URL);
    useEffect(() => {
        const req = () => {
          console.log("AHHHAHEHE");
          console.log(import.meta.env.VITE_HABITAT_NODE_URL);
          setLoading(true);
          habitat.getCommunities().then((res: AxiosResponse) => {
            console.log("SUCCESS???")
            console.log(res);
            const commRes: ListCommunitiesResponse = res.data as ListCommunitiesResponse;
            setCommuntities(commRes.communities);
           }).catch((err) => {
            console.log("FAILURE???")
            console.error(err)
          });
          setLoading(false);
        };
        req();
    }, []);

    return <div>
      {loading ? <p>Loading...</p> : communities.map((community: string) => <p>{community}</p>)}
    </div>
}

export default CommunityList;
