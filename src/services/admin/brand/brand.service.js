import { adminClient } from "../http"


const getAllBrands = async () => {
    const res = await adminClient.get('/mv-core/v1/admin/brand');
    return res;
}

const deleteBrand = async (id) => {
    const res = await adminClient.post(`/mv-core/v1/admin/brand/delete/${id}`);
    return res;
}

const createBrand = async (form) => {
    const res = await adminClient.post(`/mv-core/v1/admin/brand/saveOrUpdate`, form);
    return res;
}

export {
    getAllBrands,
    deleteBrand,
    createBrand
}