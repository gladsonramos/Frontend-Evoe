import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"
import HomeScreem from "../pages/HomeScreen"
import Register from "../pages/Register"
import ViewRegister from "../pages/ViewRegisters"
import { AuthProvider } from "../hooks/provider"
import { Header } from "../components/Header"


const AppRoutes = () => {

    return (
        <Router>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<HomeScreem />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/viewRegister" element={<ViewRegister />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes