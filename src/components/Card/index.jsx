import "./Card.css";
import player from "../../../public/img/player.jpg";
import Title from "../Title";

const Card = () => {
    return(
        <>
            <div className="card">
                <div className="card-content">
                    <Title title="FrontEnd" />
                    <h2 className="subtitle">Challenge React</h2>
                    <p className="paragraph">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </div>

                <img className="image" src={player} alt="imagen de alura" />
            </div>
        </>   
    )
}

export default Card;
