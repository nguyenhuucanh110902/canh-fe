import { adminClient } from "../http"


const getAllMaterials = async () => {
    const res = await adminClient.get('/mv-core/v1/admin/material');
    return res;
}

const getOne = async (id) => {
    const res = await adminClient.get(`/mv-core/v1/admin/material/${id}`);
    return res;
}

const deleteMaterial = async (id) => {
    const res = await adminClient.deleteCall(`/mv-core/v1/admin/material/delete/${id}`);
    return res;
}

const createMaterial = async (form) => {
    const res = await adminClient.post(`/mv-core/v1/admin/material/saveOrUpdate`, form);
    return res;
}

const updateMaterial = async (form) => {
    const res = await adminClient.post(`/mv-core/v1/admin/material/saveOrUpdate`, form);
    return res;
}

export {
    getAllMaterials,
    deleteMaterial,
    createMaterial,
    updateMaterial,
    getOne
}