import React, { useState } from 'react';
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { Container, FlexContainer, ContainerButton } from "./styles";
import Title from "../../components/Title";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import { userService } from '../../services';

function Register() {
    const navigate = useNavigate();
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputValues, setInputValues] = useState<any>({
        nome: '',
        sobrenome: '',
        email: '',
        repetirEmail: '',
        telefone: '',
        endereco: '',
        preferenciasComunicacao: '',
        sobreVoce: '',
        senha: '',
        repetirSenha: '',
    });

    const handleInputChange = (property: any, value: any) => {
        setInputValues((prevState: any) => ({
            ...prevState,
            [property]: value,
        }));
    };

    const handleClickRegister = async () => {
        const emptyFields = Object.keys(inputValues).filter(key => {
            const value = inputValues[key];
            return value === '' || value === null || value === undefined;
        });

        if (emptyFields.length > 0) {
            alert(`Por favor, todos os campos são obrigatórios.`);
            return;
        }

        if (!checkboxChecked) {
            alert('Por favor, aceite os termos e condições.');
            return;
        }

        if (inputValues.email !== inputValues.repetirEmail) {
            alert('O e-mail de registro devem ser iguais.');
            return;
        }

        if (inputValues.senha !== inputValues.repetirSenha) {
            alert('A senha de registro devem ser iguais.');
            return;
        }

        try {
            setLoading(true)
            await userService.createUser(inputValues);
            setTimeout(() => {
                setLoading(false)
                navigate('/viewRegister');
            }, 2000)
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            alert('Erro ao criar usuário. Por favor, tente novamente.');
        }
    };


    return (
        <Container>
            <Title>Cadastre-se</Title>

            <FlexContainer>
                <Input
                    placeholder="Insira seu nome"
                    value={inputValues.nome}
                    onChange={(e: any) => handleInputChange('nome', e.target.value)}
                />
                <Input
                    placeholder="Insira seu sobrenome"
                    value={inputValues.sobrenome}
                    onChange={(e: any) => handleInputChange('sobrenome', e.target.value)}
                />
            </FlexContainer>

            <Input
                placeholder="Insira seu email"
                value={inputValues.email}
                onChange={(e: any) => handleInputChange('email', e.target.value)}
            />
            <Input
                placeholder="Repita seu email"
                value={inputValues.repetirEmail}
                onChange={(e: any) => handleInputChange('repetirEmail', e.target.value)}
            />
            <Input
                placeholder="Telefone"
                value={inputValues.telefone}
                onChange={(e: any) => handleInputChange('telefone', e.target.value)}
            />
            <Input
                placeholder="Endereço"
                value={inputValues.endereco}
                onChange={(e: any) => handleInputChange('endereco', e.target.value)}
            />
            <Input
                placeholder="Preferencias de comunicação"
                value={inputValues.preferenciasComunicacao}
                onChange={(e: any) => handleInputChange('preferenciasComunicacao', e.target.value)}
            />
            <Input
                placeholder="Fale um pouco sobre você"
                value={inputValues.sobreVoce}
                onChange={(e: any) => handleInputChange('sobreVoce', e.target.value)}
            />
            <Input
                type="password"
                placeholder="Insira sua senha"
                value={inputValues.senha}
                onChange={(e: any) => handleInputChange('senha', e.target.value)}
            />
            <Input
                type="password"
                placeholder="Repita sua senha"
                value={inputValues.repetirSenha}
                onChange={(e: any) => handleInputChange('repetirSenha', e.target.value)}
            />

            <Checkbox
                title={"Estou de acordo com os Termos de uso e da política de privacidade."}
                checked={checkboxChecked}
                onChange={() => setCheckboxChecked(!checkboxChecked)} />

            <ContainerButton>
                <Button
                    onClick={handleClickRegister}>
                    {loading ? "Registrando..." : "Cadastrar-se"}
                </Button>
            </ContainerButton>
        </Container>
    );
}

export default Register;
