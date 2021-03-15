import React from 'react';
import Input from './Input';
import Option from './Option';

class Forms extends React.Component {

  constructor() {
    super();
    this.blurNumbers = this.blurNumbers.bind(this);
  }

  blurNumbers({ target }) {
    target.value = target.value.replace(/^\d+/g, '')
  }

  render() {
    const states = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins','Distrito Federal']
    return (
      <form>
        <fieldset>
          <Input type={"text"} maxLength={40} upperCase={"uppercase"} name={"Nome"} />
          <Input type={"text"} maxLength={50} name={"Email"} />
          <Input type={"text"} maxLength={11} name={"CPF"} />
          <Input type={"text"} maxLength={200} pattern={"[a-zA-z0-9]+$"} name={"Endereço"} />
          <Input type={"text"} maxLength={28} blur={this.blurNumbers} name={"Cidade"} />
          <select>
            {states.map((state) => <Option state={state} />)}
          </select>
          <label>
            <Input type={"radio"} /> {"Casa"}
            <Input type={"radio"} /> {"Apartamento"}
          </label>
        </fieldset>
        <fieldset>
          <label>
            {"Resumo de curriculo"}
            <textarea maxLength={1000}></textarea>
          </label>
          <label>
            {"Cargo"}
            <textarea maxLength={40}></textarea>
          </label>
          <Input type={"text"} maxLength={500} />
        </fieldset>
      </form>
    );
  }
}

export default Forms;