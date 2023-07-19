import { AdminLogin } from "../layout/admin"
import { AdminLayout } from "../layout/admin"
import { AdminDashBoard } from "../components/admin/Dashboard";
import { AdminGuard } from "./guards";
import { AddBrand, BrandList,UpdateBrand, CategoryList,AddCategory, UpdateCategory, ColorList, AddColor,UpdateColor, ProductList, SizeList, MaterialList, AddMaterial, UpdateMaterial} from "../components/admin";

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
    getAdminRoute({path: '/admin/brands/update/:brandId',component: UpdateBrand}),
    getAdminRoute({path: '/admin/categories',component: CategoryList}),
    getAdminRoute({path: '/admin/categories/add',component: AddCategory}),
    getAdminRoute({path: '/admin/categories/update/:categoryId',component: UpdateCategory}),
    getAdminRoute({path: '/admin/sizes',component: SizeList}),
    getAdminRoute({path: '/admin/colors',component: ColorList}),
    getAdminRoute({path: '/admin/colors/add',component: AddColor}),
    getAdminRoute({path: '/admin/colors/update/:categoryId',component: UpdateColor}),
    getAdminRoute({path: '/admin/materials',component: MaterialList}),
    getAdminRoute({path: '/admin/materials/add',component: AddMaterial}),
    getAdminRoute({path: '/admin/materials/update/:materialId',component: UpdateMaterial}),
    getAdminRoute({path: '/admin/products',component: ProductList}),
]

const privateRoutes = [

]

export {
    adminRoutes,
    privateRoutes,
}