import { useState, useEffect } from "react" 
import { CommunityStateResponse } from "../../types/community";
import habitat from "../../api/habitat"
import { AxiosResponse } from "axios";
import { useParams } from "react-router-dom";

const Community = () => {
    const { communityId } = useParams();
    const [communityState, setCommunityState] = useState<CommunityStateResponse>({community_state:""});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const req = () => {
            setLoading(true);
            if (typeof(communityId) === "string") {
                habitat.getCommunityState(communityId).then((res: AxiosResponse) => {
                    const state: CommunityStateResponse = res.data as CommunityStateResponse;
                    console.log(atob(state.community_state));
                    setCommunityState(state);
                }).catch((err) => {
                    console.error(err)
                });
            }
            setLoading(false);
        }
        req();
    }, [communityId])

    return <div>
        {loading ? <p>Loading...</p> : atob(communityState.community_state) }
    </div>
}

export default Community;