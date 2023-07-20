import { adminClient } from "../http"


const getAllColors = async () => {
    const res = await adminClient.get('/mv-core/v1/admin/colors');
    return res;
}

const getOne = async (id) => {
    const res = await adminClient.get(`/mv-core/v1/admin/colors/${id}`);
    return res;
}

const deleteColor = async (id) => {
    const res = await adminClient.deleteCall(`/mv-core/v1/admin/colors/delete/${id}`);
    return res;
}

const createColor = async (form) => {
    const res = await adminClient.post(`/mv-core/v1/admin/colors/create`, form);
    return res;
}

const updateColor = async (form) => {
    const res = await adminClient.post(`/mv-core/v1/admin/colors/update/${form.id}`, form);
    return res;
}

export {
    getAllColors,
    deleteColor,
    createColor,
    updateColor,
    getOne
}