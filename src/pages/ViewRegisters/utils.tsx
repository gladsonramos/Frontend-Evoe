import { FlexContainer } from "./styles";
import Modal from "../../components/Modal";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { Container } from "./styles";


export const EditViewModal = ({ selectedItem,
    clickModalEdit,
    ClickButtonEdit,
    handleChange,
    setClickModalEdit,
    showMessage,
    successModalOpen,
    onClose,
    loading }: any) => {

    return (
        <Container>
            <Modal isOpen={clickModalEdit} onClose={() => setClickModalEdit(false)}>
                <FlexContainer>
                    <TextInput
                        onChange={(e: any) => handleChange(e, "nome")}
                        TextLabel={"Nome"}
                        value={selectedItem?.nome} />
                    <TextInput
                        onChange={(e: any) => handleChange(e, "email")}
                        TextLabel={"Email"}
                        value={selectedItem?.email} />
                </FlexContainer>
                <div style={{ height: 10 }} />
                <FlexContainer>
                    <TextInput
                        onChange={(e: any) => handleChange(e, "telefone")}
                        TextLabel={"Telefone"}
                        value={selectedItem?.telefone} />
                    <TextInput
                        onChange={(e: any) => handleChange(e, "endereco")}
                        TextLabel={"Endereço"}
                        value={selectedItem?.endereco} />
                </FlexContainer>
                <div style={{ height: 10 }} />
                <FlexContainer>
                    <TextInput
                        onChange={(e: any) => handleChange(e, "preferenciasComunicacao")}
                        TextLabel={"Preferências de comunicação"}
                        value={selectedItem?.preferenciasComunicacao} />
                </FlexContainer>
                <div style={{ height: 10 }} />
                <FlexContainer>
                    <TextInput
                        type="password"
                        onChange={(e: any) => handleChange(e, "senha")}
                        TextLabel={"Sua senha"}
                        value={selectedItem?.senha} />
                    <TextInput
                        type="password"
                        onChange={(e: any) => handleChange(e, "repetirSenha")}
                        TextLabel={"Confirme sua senha"}
                        value={selectedItem?.repetirSenha || selectedItem?.senha} />
                </FlexContainer>
                <div style={{ height: 10 }} />
                <FlexContainer>
                    <TextInput
                        onChange={(e: any) => handleChange(e, "sobreVoce")}
                        TextLabel={"Sobre você"}
                        value={selectedItem?.sobreVoce} />
                </FlexContainer>
                <div style={{ height: 20 }} />
                <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
                    <Button onClick={ClickButtonEdit}>
                        {loading ? "Aguarde..." : "Salvar alterações"}
                    </Button>
                    <Button
                        onClick={() => setClickModalEdit(false)}>Descartar
                    </Button>
                </div>
            </Modal >

            <Modal isOpen={successModalOpen} onClose={onClose}>
                <Text>{showMessage}</Text>
            </Modal>
        </Container>
    );
};


export const DeleteViewModal = ({
    clickModalDelete,
    setClickModalDelete,
    selectedItem,
    handleDelete,
    showMessage,
    successModalOpen,
    onClose,
    loading }: any) => {




    return (
        <><Modal isOpen={clickModalDelete} onClose={() => setClickModalDelete(false)}>
            <Text>
                Você deseja realmente excluir o registro do(a) {selectedItem?.nome}? <br />
            </Text>
            <div style={{ height: 20 }} />
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
                <Button onClick={handleDelete}>
                    {loading ? "Aguarde..." : "Excluir"}
                </Button>
                <Button onClick={() => setClickModalDelete(false)}>
                    Cancelar
                </Button>
            </div>
        </Modal>

            <Modal isOpen={successModalOpen} onClose={onClose}>
                <Text>{showMessage}</Text>
            </Modal>

        </>
    );
}


export const ViewModal = ({ clickModal, setClickModal, selectedItem }: any) => {
    return (
        <Modal isOpen={clickModal} onClose={() => setClickModal(false)}>
            <FlexContainer>
                <TextInput
                    disabled
                    TextLabel={"Nome"}
                    value={selectedItem?.nome} />
                <TextInput
                    disabled
                    TextLabel={"Email"}
                    value={selectedItem?.email} />
            </FlexContainer>
            <div style={{ height: 10 }} />
            <FlexContainer>
                <TextInput
                    disabled
                    TextLabel={"Telefone"}
                    value={selectedItem?.telefone} />
                <TextInput
                    disabled
                    TextLabel={"Endereço"}
                    value={selectedItem?.endereco} />
            </FlexContainer>
            <div style={{ height: 10 }} />
            <FlexContainer>
                <TextInput
                    disabled
                    TextLabel={"Preferências de comunicação"}
                    value={selectedItem?.preferenciasComunicacao} />
                <TextInput
                    type="password"
                    disabled
                    TextLabel={"Sua senha"}
                    value={selectedItem?.senha} />
            </FlexContainer>
            <div style={{ height: 10 }} />
            <FlexContainer>
                <TextInput
                    disabled
                    TextLabel={"Sobre você"}
                    value={selectedItem?.sobreVoce} />
            </FlexContainer>
        </Modal>
    )
}





