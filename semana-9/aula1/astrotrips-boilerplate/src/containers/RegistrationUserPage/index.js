import React from "react";

const RegistrationUserPage = props => {

    return (
        <div>
            <input
                placeholder="Nome Completo"
            />

            <input
                placeholder="Idade"
            />

            <input
                placeholder="Endereço"
            />

            <input
                placeholder="E-mail"
            />

            <label>Selecione local de saída</label>
            <select>
                <option>Selecione</option>
            </select>

            <label>Selecione data da viagem</label>
            <select>
                <option>Selecione</option>
            </select>

            <label>Selecione local</label>
            <select>
                <option>Selecione</option>
            </select>

            <button>Inscreva-se</button>
            
        </div>
    );
}

export default RegistrationUserPage;