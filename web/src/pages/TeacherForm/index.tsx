import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você que dar aulas"
        description="O primeiro passo é preenche esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Input name="subject" label="Matéria" />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>
      </main>
    </div>
  )
}

export default TeacherForm;