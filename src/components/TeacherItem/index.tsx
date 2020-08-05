import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (

        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/32552441?s=460&u=e91ced1ffef468fac070f389e128a542a7909a74&v=4" alt="David Udala" />
                <div>
                    <strong>David Udala</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida de pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsAppp" />
                    Entrar em contato.
            </button>
            </footer>
        </article>
    );
}

export default TeacherItem

