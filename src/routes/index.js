import { AdminLogin } from "../layout/admin"
import { AdminLayout } from "../layout/admin"
import { AdminDashBoard } from "../components/admin/Dashboard";
import { AdminGuard } from "./guards";
import { AddBrand, BrandList, CategoryList, ColorList, ProductList, SizeList } from "../components/admin";

const getAdminRoute = ({path, component}) => {
    return  {
        path,
        component,
        layout: AdminLayout,
        guard: AdminGuard
    }
}   

const adminRoutes = [
    {
        path: '/admin/login',
        component: AdminLogin,
    },
    getAdminRoute({
        path: '/admin', 
        component: AdminDashBoard,
    }),
    getAdminRoute({path: '/admin/brands',component: BrandList}),
    getAdminRoute({path: '/admin/brands/add',component: AddBrand}),
    getAdminRoute({path: '/admin/categories',component: CategoryList}),
    getAdminRoute({path: '/admin/sizes',component: SizeList}),
    getAdminRoute({path: '/admin/colors',component: ColorList}),
    getAdminRoute({path: '/admin/products',component: ProductList}),
]

const privateRoutes = [

]

export {
    adminRoutes,
    privateRoutes,
}