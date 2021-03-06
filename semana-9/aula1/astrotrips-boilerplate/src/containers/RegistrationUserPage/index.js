import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getTrips } from "../../actions";
import { postApplyToTrip } from "../../actions";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const FormRegistrationUser = styled.form `
    margin-top: 20px;
    display: grid;
    grid-template-columns: auto;
    grid-gap: 20px;
`

const MainRegistrationForm = styled(Paper) `
    width: 400px;
    height: 500px;
    display: grid;
    place-content: center;
    justify-content: center;
`
const ContainerRegistrationUser = styled.div `
    background: #dedede;
    width: 100vw;
    height: 100vh;
    align-content: center;
    justify-items: center;
    display: grid;
`

const ButtonRegistration = styled(Button) `
    width: 150px;   
`


class RegistrationUserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueName: "",
            valueAge: "",
            valueTextAppl: "",
            valueProfession: "",
            valueSelectCountry: "",
            valueSelectTrip: "",
        };
    }

    componentDidMount() {

        this.props.buscarViagens();
    }


    onChangeValueName = (event) => {

        this.setState({valueName: event.target.value});
    }

    onChangeValueAge = (event) => {

        this.setState({valueAge: event.target.value});
    }

    onChangeValueTextAppl = (event) => {

        this.setState({valueTextAppl: event.target.value});
    }

    onChangeValueProfession = (event) => {

        this.setState({valueProfession: event.target.value});
    }

    onChangeValueSelectCountry = (event) => {

        this.setState({valueSelectCountry: event.target.value});

    }

    onChangeSelectTrip = (event) => {

        this.setState({valueSelectTrip: event.target.value});

        console.log(event.target.value);
    }

    handleSubmit = event => {
        event.preventDefault();
        const createUser = {
            name: this.state.valueName,
            age: this.state.valueAge,
            applicationText: this.state.valueTextAppl,
            profession: this.state.valueProfession,
            country: this.state.valueSelectCountry,
            tripId: this.state.valueSelectTrip,
        }
        this.props.createUser(createUser);
    }

    render() {

        const optionViagens = this.props.listaDeViagens.map((viagem) => {
                return(<option value={viagem.id}>{viagem.name} - {viagem.planet}</option>)
        });

        return (
            <ContainerRegistrationUser>
                <MainRegistrationForm>
                    <FormRegistrationUser onSubmit={this.handleSubmit}>
                        
                        <h3>Increva-se</h3>
                        
                        <input
                            value = {this.state.valueName}
                            onChange = {this.onChangeValueName}
                            required
                            name="name"
                            type="text"
                            pattern="^[a-zA-Z]{3,}"
                            title="O nome precisa ter no mínimo 3 letras"
                            placeholder="Nome Completo"
                        />

                        <input
                            value = {this.state.valueAge}
                            onChange = {this.onChangeValueAge}
                            required
                            name="age"
                            type="number"
                            min="18"
                            placeholder="Idade"
                        />

                        <input
                            value = {this.state.valueTextAppl}
                            onChange = {this.onChangeValueTextAppl}
                            required
                            type="textarea"
                            name="applicationText"
                            pattern="[a-zA-Z\s]{30,}"
                            title="Escreva um texto com no mínimo 30 letras"
                            placeholder="Texto de inscrição"
                        />

                        <input
                            value = {this.state.valueProfession}
                            onChange = {this.onChangeValueProfession}
                            required
                            type="text"
                            name="profession"
                            pattern="[a-zA-Z\s]{10,}"
                            title="A profissão deve conter no mínimo 10 letras"
                            placeholder="Profissão"
                        />

                        <select name="country"      
                            value={this.state.valueSelectCountry}
                            onChange={this.onChangeValueSelectCountry}
                        >
                            <option value="">Selecione o país</option>
                            <option value="África do Sul">África do Sul</option>
                            <option value="Albânia">Albânia</option>
                            <option value="Alemanha">Alemanha</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antigua">Antigua</option>
                            <option value="Arábia Saudita">Arábia Saudita</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armênia">Armênia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Austrália">Austrália</option>
                            <option value="Áustria">Áustria</option>
                            <option value="Azerbaijão">Azerbaijão</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrein">Bahrein</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Bélgica">Bélgica</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermudas">Bermudas</option>
                            <option value="Botsuana">Botsuana</option>
                            <option value="Brasil" selected>Brasil</option>
                            <option value="Brunei">Brunei</option>
                            <option value="Bulgária">Bulgária</option>
                            <option value="Burkina Fasso">Burkina Fasso</option>
                            <option value="botão">botão</option>
                            <option value="Cabo Verde">Cabo Verde</option>
                            <option value="Camarões">Camarões</option>
                            <option value="Camboja">Camboja</option>
                            <option value="Canadá">Canadá</option>
                            <option value="Cazaquistão">Cazaquistão</option>
                            <option value="Chade">Chade</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Cidade do Vaticano">Cidade do Vaticano</option>
                            <option value="Colômbia">Colômbia</option>
                            <option value="Congo">Congo</option>
                            <option value="Coréia do Sul">Coréia do Sul</option>
                            <option value="Costa do Marfim">Costa do Marfim</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Croácia">Croácia</option>
                            <option value="Dinamarca">Dinamarca</option>
                            <option value="Djibuti">Djibuti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="EUA">EUA</option>
                            <option value="Egito">Egito</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Emirados Árabes">Emirados Árabes</option>
                            <option value="Equador">Equador</option>
                            <option value="Eritréia">Eritréia</option>
                            <option value="Escócia">Escócia</option>
                            <option value="Eslováquia">Eslováquia</option>
                            <option value="Eslovênia">Eslovênia</option>
                            <option value="Espanha">Espanha</option>
                            <option value="Estônia">Estônia</option>
                            <option value="Etiópia">Etiópia</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Filipinas">Filipinas</option>
                            <option value="Finlândia">Finlândia</option>
                            <option value="França">França</option>
                            <option value="Gabão">Gabão</option>
                            <option value="Gâmbia">Gâmbia</option>
                            <option value="Gana">Gana</option>
                            <option value="Geórgia">Geórgia</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Granada">Granada</option>
                            <option value="Grécia">Grécia</option>
                            <option value="Guadalupe">Guadalupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guiana">Guiana</option>
                            <option value="Guiana Francesa">Guiana Francesa</option>
                            <option value="Guiné-bissau">Guiné-bissau</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Holanda">Holanda</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungria">Hungria</option>
                            <option value="Iêmen">Iêmen</option>
                            <option value="Ilhas Cayman">Ilhas Cayman</option>
                            <option value="Ilhas Cook">Ilhas Cook</option>
                            <option value="Ilhas Curaçao">Ilhas Curaçao</option>
                            <option value="Ilhas Marshall">Ilhas Marshall</option>
                            <option value="Ilhas Wallis e Futuna">Ilhas Wallis e Futuna</option>
                            <option value="Índia">Índia</option>
                            <option value="Indonésia">Indonésia</option>
                            <option value="Inglaterra">Inglaterra</option>
                            <option value="Irlanda">Irlanda</option>
                            <option value="Islândia">Islândia</option>
                            <option value="Israel">Israel</option>
                            <option value="Itália">Itália</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japão">Japão</option>
                            <option value="Jordânia">Jordânia</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Líbano">Líbano</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lituânia">Lituânia</option>
                            <option value="Luxemburgo">Luxemburgo</option>
                            <option value="Macau">Macau</option>
                            <option value="Macedônia">Macedônia</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malásia">Malásia</option>
                            <option value="Malaui">Malaui</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marrocos">Marrocos</option>
                            <option value="Martinica">Martinica</option>
                            <option value="Mauritânia">Mauritânia</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="México">México</option>
                            <option value="Moldova">Moldova</option>
                            <option value="Mônaco">Mônaco</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Nicarágua">Nicarágua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigéria">Nigéria</option>
                            <option value="Noruega">Noruega</option>
                            <option value="Nova Caledônia">Nova Caledônia</option>
                            <option value="Nova Zelândia">Nova Zelândia</option>
                            <option value="Omã">Omã</option>
                            <option value="Palau">Palau</option>
                            <option value="Panamá">Panamá</option>
                            <option value="Papua-nova Guiné">Papua-nova Guiné</option>
                            <option value="Paquistão">Paquistão</option>
                            <option value="Peru">Peru</option>
                            <option value="Polinésia Francesa">Polinésia Francesa</option>
                            <option value="Polônia">Polônia</option>
                            <option value="Porto Rico">Porto Rico</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Quênia">Quênia</option>
                            <option value="Rep. Dominicana">Rep. Dominicana</option>
                            <option value="Rep. Tcheca">Rep. Tcheca</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romênia">Romênia</option>
                            <option value="Ruanda">Ruanda</option>
                            <option value="Rússia">Rússia</option>
                            <option value="Saipan">Saipan</option>
                            <option value="Samoa Americana">Samoa Americana</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serra Leone">Serra Leone</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Singapura">Singapura</option>
                            <option value="Síria">Síria</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="St. Lúcia">St. Lúcia</option>
                            <option value="St. Vincent">St. Vincent</option>
                            <option value="Sudão">Sudão</option>
                            <option value="Suécia">Suécia</option>
                            <option value="Suiça">Suiça</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Tailândia">Tailândia</option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Tanzânia">Tanzânia</option>
                            <option value="Togo">Togo</option>
                            <option value="Tunísia">Tunísia</option>
                            <option value="Turquia">Turquia</option>
                            <option value="Ucrânia">Ucrânia</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Uruguai">Uruguai</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Vietnã">Vietnã</option>
                            <option value="Zaire">Zaire</option>
                            <option value="Zâmbia">Zâmbia</option>
                            <option value="Zimbábue">Zimbábue</option>
                        </select>


                        <select 
                            name="tripId" 
                            required
                            value={this.state.valueSelectTrip}
                            onChange={this.onChangeSelectTrip}
                        >
                            <option value="">Selecione a Viagem</option>
                            {optionViagens}
                        </select>

                        <ButtonRegistration type="submit"> Inscreva-se </ButtonRegistration>

                    </FormRegistrationUser>
                </MainRegistrationForm>
            </ContainerRegistrationUser>       
        );    
    }   
}

function mapDispatchToProps (dispatch) {

    return {
        buscarViagens: () => dispatch(getTrips()),
        createUser: (id, trip) => dispatch(postApplyToTrip(id, trip))
    }

}

function mapStateToProps (state) {
    return {
        listaDeViagens: state.trips.trips
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(RegistrationUserPage);