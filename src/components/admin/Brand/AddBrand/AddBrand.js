import { Button, Form, Input } from "antd"
import { brandService } from "../../../../services/admin";
import { toastService } from "../../../../services/common";

const AddBrand = () => {

    const addBrandHandle = async (form) => {
        try {
            brandService.createBrand(form);
            toastService.success('Thêm brand thành công')
        } catch (error) {
            console.log(error);
            toastService.error(error.apiMessage);
        }
       
    }

    return <Form
    onFinish={addBrandHandle}
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
                Thêm Brand
            </Button>
        </Form.Item>
    </Form>
}

export {
    AddBrand
}