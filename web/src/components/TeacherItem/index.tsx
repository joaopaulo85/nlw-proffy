import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/66692428?s=460&u=9dbbf82ec34a23e246757890e0ba770b3cc9e1b9&v=4" alt="JP" />
        <div>
          <strong>João Paulo</strong>
          <span>CakePHP</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de Desenvolvimento Web.
            <br /><br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
      <footer>
        <p>
          Preço/hora
              <strong>R$50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;