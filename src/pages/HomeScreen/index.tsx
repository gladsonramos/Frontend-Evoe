import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import Title from "../../components/Title";
import { Container } from "./styles";
import AnimatedBackground from "../../components/Animation";

function HomeScreen() {
    const [click, setClick] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setClick(true);
    };

    const handleViewRegister = () => {
        navigate("/viewRegister");
    };

    const handleRegisterUser = () => {
        navigate("/register");
    };

    return (
        <Container>
            <AnimatedBackground />
            <Title>Seja bem vindo ao sistema teste...</Title>
            <div style={{ height: 20 }} />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {click ? (
                    <div style={{ display: "flex", gap: 20 }}>
                        <motion.div
                            onClick={handleRegisterUser}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Button>Cadastrar usuários</Button>
                        </motion.div>
                        <motion.div
                            onClick={handleViewRegister}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Button>Visualizar registros</Button>
                        </motion.div>
                    </div>
                ) : (
                    <motion.div
                        onClick={handleClick}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Button>Vamos começar</Button>
                    </motion.div>
                )}
            </motion.div>
        </Container>
    );
}

export default HomeScreen;
