import { Button, Form, Input } from "antd";
import { colorService } from "../../../../services/admin";
import { toastService } from "../../../../services/common";

const AddColor = () => {
  const addColorHandle = async (form) => {
    try {
      colorService.createColor(form);
      toastService.success("Thêm màu thành công");
    } catch (error) {
      console.log(error);
      toastService.error(error.apiMessage);
    }
  };

  return (
    <Form
      onFinish={addColorHandle}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 8 }}
    >
      <Form.Item
        label="Tên"
        name="name"
        rules={[{ required: true, message: "Tên không được trống" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Mô tả" name="description">
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button type="primary" htmlType="submit">
          Thêm màu
        </Button>
      </Form.Item>
    </Form>
  );
};

export { AddColor };
