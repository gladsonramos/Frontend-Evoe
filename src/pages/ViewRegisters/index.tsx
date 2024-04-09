import CheckboxTable from "../../components/TableViewRegister";
import { useCallback, useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerText, FlexContainer } from "./styles";
import { useNavigate } from "react-router-dom"
import { userService } from "../../services";
import { EditViewModal, DeleteViewModal, ViewModal } from "./utils";
import Text from "../../components/Text";


function ViewRegister() {

    const navigate = useNavigate();

    const [clickModal, setClickModal] = useState(false);
    const [clickModalDelete, setClickModalDelete] = useState(false);
    const [clickModalEdit, setClickModalEdit] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>([]);
    const [searchValue, setSearchValue] = useState("");
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [showMessage, setShowMessage] = useState('');
    const [successModalOpen, setSuccessModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingUsers, setLoadingUsers] = useState(true);

    const fetchUsers: any = async () => {
        try {
            const response = await userService.getUsers();
            setFilteredData(response.data.sucess)
            setLoadingUsers(false)
        } catch (error) {
            setLoadingUsers(false)
            console.error('Erro ao buscar usuários:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [clickModalEdit, clickModalDelete]);

    const handleViewClick = (item: any, props: any) => {
        setSelectedItem(item);
        if (props === "view") {
            setClickModal(true)
        } else if (props === "edit") {
            setClickModalEdit(true)
        } else if (props === "delete") {
            setClickModalDelete(true)
        }
    };

    const handleSearch = () => {
        if (searchValue.length === 0) {
            return fetchUsers();
        }
        const filtered: any = filteredData.filter((item) =>
            item.nome.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const handleButtonClick = () => {
        handleSearch();
    };

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, nameProps: any) => {
        const { value } = e.target;
        if (nameProps === "repetirSenha") {
            setSelectedItem((prev: any) =>
                ({ ...prev, [nameProps]: value, repetirSenha: value }));
        } else {
            setSelectedItem((prev: any) =>
                ({ ...prev, [nameProps]: value }));
        }
        // eslint-disable-next-line
    }, [selectedItem]);


    const ClickButtonEdit = async () => {
        if (selectedItem.repetirSenha && selectedItem.senha !== selectedItem.repetirSenha) {
            alert("As senhas não coincidem");
            return;
        }
        setLoading(true)
        try {
            const response = await userService.editUser(selectedItem._id, selectedItem);
            await fetchUsers()
            setShowMessage(response.data.sucess)
            setTimeout(() => {
                setClickModalEdit(false)
                setSuccessModalOpen(true)
                setLoading(false)
            }, 1000)
        } catch (err: any) {
            setShowMessage(err.message)
            setLoading(false)
        }
    }

    const ClickButtonDelete = async () => {
        setLoading(true)
        try {
            const response: any = await userService.deletUser(selectedItem._id);
            await fetchUsers()
            setShowMessage(response.data.sucess)
            setTimeout(() => {
                setClickModalDelete(false)
                setSuccessModalOpen(true)
                setLoading(false)
            }, 1000)
        } catch (err: any) {
            setShowMessage(err.message)
            setLoading(false)
        }
    }

    return (
        <Container>
            <ViewModal
                clickModal={clickModal}
                setClickModal={setClickModal}
                selectedItem={selectedItem}
            />
            <DeleteViewModal
                clickModalDelete={clickModalDelete}
                setClickModalDelete={setClickModalDelete}
                selectedItem={selectedItem}
                handleDelete={ClickButtonDelete}
                showMessage={showMessage}
                sucessModalOpen={successModalOpen}
                onClose={() => setSuccessModalOpen(false)}
                loading={loading}
            />
            <EditViewModal
                selectedItem={selectedItem}
                clickModalEdit={clickModalEdit}
                setClickModalEdit={setClickModalEdit}
                handleChange={handleChange}
                ClickButtonEdit={ClickButtonEdit}
                showMessage={showMessage}
                successModalOpen={successModalOpen}
                onClose={() => setSuccessModalOpen(false)}
                loading={loading}
            />
            <FlexContainer>
                <Input
                    placeholder="Buscar"
                    icon={require("../../assets/SearchIcon.png")}
                    value={searchValue}
                    onChange={(e: any) => setSearchValue(e.target.value)}
                />
                <Button
                    onClick={() => handleButtonClick()}>
                    Pesquisar
                </Button>
                <Button
                    onClick={() => navigate('/register')}>
                    Adicionar registro
                </Button>
            </FlexContainer>

            <div style={{ height: 20 }} />

            {
                !loadingUsers ? (
                    <CheckboxTable
                        data={filteredData}
                        onViewClick={handleViewClick}
                    />
                ) :
                    <ContainerText>
                        <Text>Carregando registros...</Text>
                    </ContainerText>
            }

        </Container>
    );
}

export default ViewRegister;
