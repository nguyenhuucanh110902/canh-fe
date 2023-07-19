import { adminClient } from "../http"


const getAllCategories = async () => {
    const res = await adminClient.get('/mv-core/v1/admin/categories');
    return res;
}

const getOne = async (id) => {
    const res = await adminClient.get(`/mv-core/v1/admin/categories/${id}`);
    return res;
}

const deleteCategory = async (id) => {
    const res = await adminClient.deleteCall(`/mv-core/v1/admin/categories/delete/${id}`);
    return res;
}

const createCategory = async (form) => {
    const res = await adminClient.post(`/mv-core/v1/admin/categories/saveOrUpdate`, form);
    return res;
}

const updateCategory = async (form) => {
    const res = await adminClient.post(`/mv-core/v1/admin/categories/saveOrUpdate`, form);
    return res;
}

export {
    getAllCategories,
    deleteCategory,
    createCategory,
    updateCategory,
    getOne
}