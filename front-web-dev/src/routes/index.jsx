import { Route, Routes} from "react-router-dom"
import { Register } from "../pages/register"
import { Login } from "../pages/login"
import { MainPage } from "../pages/main-page"
import { CreateAvatar } from "../pages/create-avatar"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-avatar" element={<CreateAvatar />} />
        </Routes>
    )
}