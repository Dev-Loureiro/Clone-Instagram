import { FiMoreHorizontal } from "react-icons/fi"
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { BsBookmark } from "react-icons/bs";



export default function Feed() {
    return (
        <div className="feed">

            <header>

                <div className="conteudo-header">
                    <img src="src\assets\foto-anitta.png" alt="" />
                    <span>anitta</span>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className="post">
                <img src="src/assets/publi-anitta.png" alt="" />
            </div>

            <div className="icones">

                <div className="icones-publi">
                    <FaRegHeart />
                    <IoChatbubbleOutline />
                    <LuSend />
                </div>

                <BsBookmark />

            </div>

            <section className="section-comments">
                <strong>1.543.313 likes</strong>
                <p><b>billieeilish</b> gooci</p>
                <p>View all 7,964 comments</p>

                <div className="comment">
                    <p>Add a comment…</p>
                    <span>aaaa</span>
                </div>
            </section>

            <svg className= "divisao" xmlns="http://www.w3.org/2000/svg" width="468" height="1" viewBox="0 0 462 1" fill="none">
                <path d="M0 0.5H462" stroke="#E5E5E5" />
            </svg>
        </div>

        
        
    )
}