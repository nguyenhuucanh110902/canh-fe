import { Breadcrumb } from "antd"
import { Link, useLocation } from "react-router-dom";

const breadcrumbNameMap = {
    '/admin': 'Dashboard',
    '/admin/brands': 'Brand List',
    '/admin/categories': 'Category List',
    '/admin/sizes': 'Size List',
    '/admin/colors': 'Color List',
    '/admin/products': 'Product List',
};

const AdminBreadCrumb = () => {
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter((i) => i);

    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return {
            key: url,
            title: <Link to={url}>{breadcrumbNameMap[url]}</Link>,
        };
    });

    return <Breadcrumb items={extraBreadcrumbItems}/>

}

export {
    AdminBreadCrumb
}