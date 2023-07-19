import { Button, Form, Input } from "antd"
import { materialService } from "../../../../services/admin";
import { toastService } from "../../../../services/common";

const AddMaterial = () => {

    const addMaterialHandle = async (form) => {
        try {
            materialService.createMaterial(form);
            toastService.success('Thêm Material thành công')
        } catch (error) {
            console.log(error);
            toastService.error(error.apiMessage);
        }
       
    }

    return <Form
    onFinish={addMaterialHandle}
     labelCol={{ span: 4 }}
     wrapperCol={{ span: 8 }}
    >
        <Form.Item label="Tên" name="name" rules={[{ required: true, message: 'Tên không được trống' }]}>
            <Input />
        </Form.Item>

        <Form.Item label="Mô tả" name="description" >
            <Input/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4}}>
            <Button type="primary" htmlType="submit">
                Thêm Material
            </Button>
        </Form.Item>
    </Form>
}

export {
    AddMaterial
}