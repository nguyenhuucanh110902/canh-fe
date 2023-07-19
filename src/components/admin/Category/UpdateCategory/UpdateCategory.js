import { Button, Form, Input } from "antd"
import { categoryService } from "../../../../services/admin";
import { toastService } from "../../../../services/common";
import { useEffect, useState } from "react";
import { useParams} from "react-router";
import { useNavigate } from 'react-router-dom';
const UpdateCategory = () => {
    const {categoryId} = useParams();
    const navigate = useNavigate();
    const [categories, setCategories] = useState({});
    const [form] = Form.useForm();

    useEffect(() => {
        (async () => {
            const body = await categoryService.getOne(categoryId);
            setCategories(body.data)
            form.setFieldsValue({
                ...body.data
            })
        })();
    }, []) 

    const updateHandle = async (form) => {
        try {
            const formData = {
                id: categoryId,
                name: form.name,
                description: form.description
            }
            categoryService.updateCategory(formData);
            toastService.success('Cập nhật danh mục thành công');
            navigate('/admin/categories');
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
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Tên danh mục không được trống' }]}>
            <Input />
        </Form.Item>

        <Form.Item label="Description"  name="description" >
            <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4}}>
            <Button type="primary" htmlType="submit">
                Cập nhật danh mục
            </Button>
        </Form.Item>
    </Form>
}

export {
    UpdateCategory
}