import { Button, Form, Input } from "antd"
import { colorService } from "../../../../services/admin";
import { toastService } from "../../../../services/common";
import { useEffect, useState } from "react";
import { useParams} from "react-router";
import { useNavigate } from 'react-router-dom';
const UpdateColor = () => {
    const {colorId} = useParams();
    const navigate = useNavigate();
    const [color, setColor] = useState({});
    const [form] = Form.useForm();

    useEffect(() => {
        (async () => {
            const body = await colorService.getOne(colorId);
            setColor(body.data)
            form.setFieldsValue({
                ...body.data
            })
        })();
    }, []) 

    const updateHandle = async (form) => {
        try {
            const formData = {
                id: colorId,
                name: form.name,
                description: form.description
            }
            colorService.updateColor(formData);
            toastService.success('Cập nhật màu thành công');
            navigate('/admin/colors');
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
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Tên màu không được trống' }]}>
            <Input />
        </Form.Item>

        <Form.Item label="Description"  name="description" >
            <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4}}>
            <Button type="primary" htmlType="submit">
                Cập nhật màu
            </Button>
        </Form.Item>
    </Form>
}

export {
    UpdateColor
}