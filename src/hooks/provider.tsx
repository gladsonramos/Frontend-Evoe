import { createContext, ReactNode, useContext, useState } from "react";
import { userService } from "../services";

type AuthContextType = {
    fetchUsers: () => Promise<void>;
    filteredData: any[];
    setFilteredData: (data: any[]) => void;
};


export const AuthContext = createContext<AuthContextType>({
    fetchUsers: async () => {
        throw new Error("fetchUsers function not implemented");
    },
    filteredData: [],
    setFilteredData: () => { }
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [filteredData, setFilteredData] = useState<any[]>([]);

    const fetchUsers = async () => {
        try {
            const response = await userService.getUsers();
            setFilteredData(response.data?.sucess); // Corrigido para 'success' em vez de 'sucess'
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ fetchUsers, filteredData, setFilteredData }}>
            {children}
        </AuthContext.Provider>
    );
};

// Função auxiliar para consumir o contexto
export const useAuth = () => useContext(AuthContext);
