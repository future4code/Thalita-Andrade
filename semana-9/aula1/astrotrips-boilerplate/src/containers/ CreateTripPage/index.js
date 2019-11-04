import React from "react";

const CreateTripPage = props => {

    return (
        <div>

            <input
                placeholder="Título"
            />

            <input
                placeholder="Data da viagem"
            />

            <input
                placeholder="Local de saída"
            />

            <input
                placeholder="URL da imagem"
            />

            <button>Criar Viagem</button>
        </div>
    );
}

export default CreateTripPage;