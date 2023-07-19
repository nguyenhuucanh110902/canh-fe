import { Button, Form, Input } from "antd"
import { categoryService } from "../../../../services/admin";
import { toastService } from "../../../../services/common";

const AddCategory = () => {

    const addCategoryHandle = async (form) => {
        try {
            categoryService.createCategory(form);
            toastService.success('Thêm danh mục thành công')
        } catch (error) {
            console.log(error);
            toastService.error(error.apiMessage);
        }
       
    }

    return <Form
    onFinish={addCategoryHandle}
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
                Thêm danh mục
            </Button>
        </Form.Item>
    </Form>
}

export {
    AddCategory
}