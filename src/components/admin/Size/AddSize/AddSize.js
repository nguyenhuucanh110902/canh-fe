import { Button, Form, Input } from "antd";
import { sizeService } from "../../../../services/admin";
import { toastService } from "../../../../services/common";

const AddSize = () => {
  const addSizeHandle = async (form) => {
    try {
      sizeService.createSize(form);
      toastService.success("Thêm size thành công");
    } catch (error) {
      console.log(error);
      toastService.error(error.apiMessage);
    }
  };

  return (
    <Form
      onFinish={addSizeHandle}
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

      <Form.Item
        label="Độ dài áo"
        name="long_shirt"
        rules={[{ required: true, message: "Độ dài áo không được trống (cm)" }]}
      >
        <Input min={1} max={200} type="number"/>
      </Form.Item>
      <Form.Item
        label="Độ dài tay áo"
        name="long_sleeve"
        rules={[{ required: true, message: "Độ dài tay áo không được trống (cm)" }]}
      >
        <Input min={1} max={200} type="number"/>
      </Form.Item>
      <Form.Item
        label="Độ rộng ngực"
        name="chest"
        rules={[{ required: true, message: "Độ rộng ngực không được trống (cm)" }]}
      >
        <Input min={1} max={200} type="number"/>
      </Form.Item>
      <Form.Item
        label="Độ rộng vai"
        name="shoulder_width"
        rules={[{ required: true, message: "Chiều rộng vai không được trống (cm)" }]}
      >
        <Input min={1} max={200} type="number"/>
      </Form.Item>
      <Form.Item
        label="Độ rộng cổ"
        name="wide_neck"
        rules={[{ required: true, message: "Độ rộng cổ không được trống (cm)" }]}
      >
        <Input min={1} max={200} type="number"/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button type="primary" htmlType="submit">
          Thêm size
        </Button>
      </Form.Item>
    </Form>
  );
};

export { AddSize };
