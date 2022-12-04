import React, { FormEvent, useState, useRef } from "react";
import { IMaskInput } from "react-imask";

const documentMask = '000.000.000-00'

export default function Login() {
    
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  function checkPassword() {
    return true;
  }
  function register(event: FormEvent) {
    event?.preventDefault();
    alert(fullName)
  }
    return (
      <main>
        <div className="container col-6">
          <h4>Faça seu cadastro</h4>
          <form className="d-grid" onSubmit={register}>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="fullName">
                  <span className="text-danger">*</span>Nome Completo
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  onChange={(event) => setFullName(event.target.value)}
                />
              </div>
              <div className="form-group col">
                <label htmlFor="birthDate">
                  <span className="text-danger">*</span>Data de Nascimento
                </label>
                <input
                  className="form-control"
                  type="date"
                  name="birthDate"
                  id="birthDate"
                  placeholder="__/__/____"
                  required
                  v-model="registerForm.birthDate"
                />
              </div>
            </div>

            <div className="">
              <label htmlFor="gender">
                <span className="text-danger">*</span>Gênero
              </label>
              <input
                className="form-control"
                list="genderDatalistOptions"
                id="gender"
                placeholder="Digite para pesquisar"
                required
                v-model="registerForm.gender"
              />
              <datalist id="genderDatalistOptions">
                <option value="Masculino" />
                <option value="Feminino" />
                <option value="Outro" />
                <option value="Prefiro não informar" />
              </datalist>
            </div>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="documentNumber">
                  <span className="text-danger">*</span>CPF
                </label>
                <IMaskInput
                 max-maxLength={14}
                 required
                 type={"text"}
                 mask={documentMask}
                 className="form-control"
                 name="documentNumber"
                 id="documentNumber"
                 placeholder="___.___.___-__"
                  onAccept={(value, mask) => console.log(value, mask)}
                />
              </div>
              <div className="form-group col">
                <label htmlFor="phone">
                  <span className="text-danger">*</span>Telefone
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="(__) _____-____"
                  required
                  v-model="registerForm.phone"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <span className="text-danger">*</span>E-mail
              </label>
              <input
                className="form-control"
                type="text"
                name="email"
                id="email"
                placeholder="name@example.com"
                required
                v-model="registerForm.email"
              />
            </div>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="pwd">
                  <span className="text-danger">*</span>Digite uma senha
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="pwd"
                  id="pwd"
                  placeholder="********"
                  required
                  v-model="registerForm.pwd"
                />
              </div>
              <div className="form-group col">
                <label htmlFor="pwd2">
                  <span className="text-danger">*</span>Digite a senha novamente
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="pwd2"
                  id="pwd2"
                  placeholder="********"
                  required
                  onKeyDown={checkPassword}
                />
              </div>
            </div>

            <button className="btn btn-primary btn-submit my-2" type="submit">
              Criar seu cadastro
            </button>
          </form>
        </div>
      </main>
    );
  }