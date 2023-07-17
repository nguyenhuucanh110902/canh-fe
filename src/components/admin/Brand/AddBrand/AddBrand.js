import { Button, Form, Input } from "antd"
import { brandService } from "../../../../services/admin";
import { toastService } from "../../../../services/common";

const AddBrand = () => {

    const addBrandHandle = async (form) => {
        try {
            brandService.createBrand(form);
            toastService.success('Add Brand Successfully')
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
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'name is required' }]}>
            <Input />
        </Form.Item>

        <Form.Item label="Description" name="description" >
            <Input/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Add Brand
            </Button>
        </Form.Item>
    </Form>
}

export {
    AddBrand
}