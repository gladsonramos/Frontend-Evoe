import React, { useEffect, useState } from 'react';
import {
    Table,
    TableRow,
    TableHeader,
    TableHead,
    TableCell,
    Icons,
    ContainerText,
    FlexContainer
} from './styles';
import Text from '../Text';
import Checkbox from '../Checkbox';

function CheckboxTable({ data, onViewClick }: any) {

    const Edit = require('../../assets/EditIcon.png')
    const Trash = require('../../assets/TrashIcon.png')
    const View = require('../../assets/ViewIcon.png')

    const [selectedRows, setSelectedRows] = useState<any[]>([]);
    const [allSelected, setAllSelected] = useState(false);
    const [viewIcons, setViewIcons] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const handleRowClick = (id: any) => {
        const selectedIndex = selectedRows.indexOf(id);
        let newSelectedRows: any[] = [];
        if (selectedIndex === -1) {
            newSelectedRows = [...selectedRows, id];
        } else {
            newSelectedRows = [...selectedRows.slice(0, selectedIndex), ...selectedRows.slice(selectedIndex + 1)];
        }
        setSelectedRows(newSelectedRows);
    };

    const handleHeaderCheckboxChange = () => {
        if (!allSelected) {
            const allIds = data.map((item: { _id: any; }) => item._id);
            setSelectedRows(allIds);
        } else {
            setSelectedRows([]);
        }

        setAllSelected(!allSelected);
    };

    const isRowSelected = (id: any) => selectedRows.includes(id);

    useEffect(() => {
        if (selectedRows.length === data.length) {
            setAllSelected(true)
        } else {
            setAllSelected(false)
        }

        if (data.length === 0) {
            setAllSelected(false)
        }

        if (selectedRows.length > 1) {
            setViewIcons(false)
        } else {
            setViewIcons(true)
        }

        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setIsMobile(mediaQuery.matches);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [selectedRows, data.length]);

    return (
        <>
            <Table>
                <TableHead>
                    <TableHeader style={{ width: "0px" }}>
                        <Checkbox
                            checked={allSelected}
                            onChange={handleHeaderCheckboxChange} />
                    </TableHeader>
                    <TableHeader>Nome</TableHeader>
                    <TableHeader>Email</TableHeader>
                    {!isMobile && <TableHeader>Comunicação</TableHeader>}
                    {!isMobile && <TableHeader>Endereço</TableHeader>}
                    {!isMobile && <TableHeader>Telefone</TableHeader>}
                    <TableHeader style={{ width: '50px' }}>Ações</TableHeader>
                </TableHead>
                <tbody>
                    {data.map((item: any, index: any) => (
                        <TableRow
                            isSelected={isRowSelected(item._id)}
                            key={index}
                        >
                            <TableCell>
                                <Checkbox
                                    checked={isRowSelected(item._id)}
                                    onClick={() => handleRowClick(item._id)}
                                />
                            </TableCell>
                            <TableCell>{item.nome}</TableCell>
                            <TableCell>{item.email.length > 17 && isMobile ? `${item.email.slice(0, 17)}..` : item.email}</TableCell>
                            {!isMobile && <TableCell>{item.preferenciasComunicacao}</TableCell>}
                            {!isMobile && <TableCell>{item.endereco}</TableCell>}
                            {!isMobile && <TableCell>{item.telefone}</TableCell>}
                            <TableCell>
                                <FlexContainer>
                                    {viewIcons ? (
                                        <>
                                            <Icons
                                                src={Edit}
                                                onClick={() => onViewClick(item, "edit")} />
                                            <Icons
                                                src={View}
                                                onClick={() => onViewClick(item, "view")} />
                                        </>
                                    ) : null}
                                    <Icons
                                        src={Trash}
                                        onClick={() => onViewClick(item, "delete")} />
                                </FlexContainer>
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
            <ContainerText>
                {data.length === 0 ? <Text>Não foi encontrado nenhum registro</Text> : null}
            </ContainerText>
        </>
    );
}

export default CheckboxTable;
