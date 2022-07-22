import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const NotFoundPage = lazy(()=> import('./pages/NotFoundPage'));


const UserRoutes = () => {
    return (
        <Suspense fallback='loading'>
            <Routes>   
                <Route path='/products' element={<ProductsPage />}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path='*' element={<NotFoundPage />}/>
            </Routes>
        </Suspense>
    )
}
export default UserRoutes;