import "./Card.css"
import player from "../../../public/img/player.jpg"
import Title from "../Title";
const Card = () => {
    return(
        <>
            <div className="card">
                <Title title="FrontEnd"></Title>
                <div>
                    <h2>Challenge React</h2>
                    <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </div>
            </div>
            <img src={player} alt="imagen de alura" />
        </>
    )

}

export default Card;