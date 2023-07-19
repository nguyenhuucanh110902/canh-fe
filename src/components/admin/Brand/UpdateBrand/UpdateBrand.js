import { Button, Form, Input } from "antd"
import { brandService } from "../../../../services/admin";
import { toastService } from "../../../../services/common";
import { useEffect, useState } from "react";
import { useParams} from "react-router";
import { useNavigate } from 'react-router-dom';
const UpdateBrand = () => {
    const {brandId} = useParams();
    const navigate = useNavigate();
    const [brand, setBrand] = useState({});
    const [form] = Form.useForm();

    useEffect(() => {
        (async () => {
            const body = await brandService.getOne(brandId);
            setBrand(body.data)
            form.setFieldsValue({
                ...body.data
            })
        })();
    }, []) 

    const updateHandle = async (form) => {
        try {
            const formData = {
                id: brandId,
                name: form.name,
                description: form.description
            }
            brandService.updateBrand(formData);
            toastService.success('Cập nhật brand thành công');
            navigate('/admin/brands');
        } catch (error) {
            console.log(error);
            toastService.error(error.apiMessage);
        }
       
    }

    return <Form
    form={form}
    onFinish={updateHandle}
     labelCol={{ span: 4 }}
     wrapperCol={{ span: 8 }}
    >
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Tên brand không được trống' }]}>
            <Input />
        </Form.Item>

        <Form.Item label="Description"  name="description" >
            <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4}}>
            <Button type="primary" htmlType="submit">
                Cập nhật Brand
            </Button>
        </Form.Item>
    </Form>
}

export {
    UpdateBrand
}