import { useState, useEffect } from "react" 
import habitat from "../../api/habitat"
import { ListCommunitiesResponse } from "../../types/community";
import { AxiosResponse } from "axios";
import { Link } from "react-router-dom";

const CommunityList = () => {
    const [communities, setCommuntities] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const req = () => {
          setLoading(true);
          habitat.getCommunities().then((res: AxiosResponse) => {
            const commRes: ListCommunitiesResponse = res.data as ListCommunitiesResponse;
            setCommuntities(commRes.communities);
           }).catch((err) => {
            console.error(err)
          });
          setLoading(false);
        };
        req();
    }, []);

    return <div>
      {loading ? <p>Loading...</p> : communities.map((community: string) => <Link to={community}>{community}</Link>)}
    </div>
}

export default CommunityList;
