import FeedPost from './FeedPost'
import postAnitta from '../../assets/publi-anitta.png'
import perfilAnitta from '../../assets/foto-anitta.png'

export default function Feed() {
    return (
        <div className="feed">

            <FeedPost
                imgProfile={perfilAnitta}
                post={postAnitta}
                altImg="foto-anitta"
                likes="1.435.321"
                nameProfile="anitta"
                discriptionPost="mama"
                comments="7.873"
            />

            <FeedPost
                imgProfile={perfilAnitta}
                post={postAnitta}
                altImg="foto-anitta"
                likes="1.435.321"
                nameProfile="anitta"
                discriptionPost="mama"
                comments="7.873"
            />


        </div>



    )
}