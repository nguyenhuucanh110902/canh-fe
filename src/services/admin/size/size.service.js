import { adminClient } from "../http"


const getAllSizes = async () => {
    const res = await adminClient.get('/mv-core/v1/admin/sizes');
    return res;
}

const getOne = async (id) => {
    const res = await adminClient.get(`/mv-core/v1/admin/sizes/${id}`);
    return res;
}

const deleteSize = async (id) => {
    const res = await adminClient.deleteCall(`/mv-core/v1/admin/sizes/delete/${id}`);
    return res;
}

const createSize = async (form) => {
    const res = await adminClient.post(`/mv-core/v1/admin/sizes/create`, form);
    return res;
}

const updateSize = async (form) => {
    const res = await adminClient.put(`/mv-core/v1/admin/sizes/update/${form.id}`, form);
    return res;
}

export {
    getAllSizes,
    deleteSize,
    createSize,
    updateSize,
    getOne
}