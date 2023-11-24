import FeedPost from './FeedPost'



export default function Feed() {
    return (
        <div className="feed">


                <FeedPost 
                imgProfile="src\assets\foto-anitta.png"
                nameProfile="anitta"
                post="src/assets/publi-anitta.png"
                altImg="foto-perfil-anitta"
                likes="1.435.321"
                discriptionPost="mama"
                comments="7.873"
                />

                
        </div>

        
        
    )
}