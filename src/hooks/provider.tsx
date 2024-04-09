import { createContext, ReactNode, useContext } from "react";
import { userService } from "../services";

type AuthContextType = {
    fetchUsers: () => Promise<any>;
};

export const AuthContext = createContext<AuthContextType>({
    fetchUsers: async () => {
        throw new Error("fetchUsers function not implemented");
    }
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const fetchUsers = async () => {
        try {
            console.log("passei aqui")
            const response = await userService.getUsers();
            return response.data?.sucess
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ fetchUsers }}>
            {children}
        </AuthContext.Provider>
    );
};

// Função auxiliar para consumir o contexto
export const useAuth = () => useContext(AuthContext);
