import {FiMoreHorizontal} from "react-icons/fi"

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
                <span>curtir</span>
                <span>comentar</span>
                <span>encaminhar</span>

                <span>salvar</span>

            </div>

        </div>
    )
}