import { Button, Form, Input } from "antd";
import { sizeService } from "../../../../services/admin";
import { toastService } from "../../../../services/common";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
const UpdateSize = () => {
  const { sizeId } = useParams();
  const navigate = useNavigate();
  const [Size, setSize] = useState({});
  const [form] = Form.useForm();

  useEffect(() => {
    (async () => {
      const body = await sizeService.getOne(sizeId);
      setSize(body.data);
      form.setFieldsValue({
        ...body.data,
      });
    })();
  }, []);

  const updateHandle = async (form) => {
    try {
      const formData = {
        id: sizeId,
        name: form.name,
        long_shirt: form.long_shirt,
        long_sleeve: form.long_sleeve,
        chest: form.chest,
        shoulder_width: form.shoulder_width,
        wide_neck: form.wide_neck,
      };
      sizeService.updateSize(formData);
      toastService.success("Cập nhật size thành công");
      navigate("/admin/sizes");
    } catch (error) {
      console.log(error);
      toastService.error(error.apiMessage);
    }
  };

  return (
    <Form
      form={form}
      onFinish={updateHandle}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 8 }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Tên màu không được trống" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Độ dài áo"
        name="long_shirt"
        rules={[{ required: true, message: "Độ dài áo không được trống (cm)" }]}
      >
        <Input min={1} max={200} type="number" />
      </Form.Item>
      <Form.Item
        label="Độ dài tay áo"
        name="long_sleeve"
        rules={[
          { required: true, message: "Độ dài tay áo không được trống (cm)" },
        ]}
      >
        <Input min={1} max={200} type="number" />
      </Form.Item>
      <Form.Item
        label="Độ rộng ngực"
        name="chest"
        rules={[
          { required: true, message: "Độ rộng ngực không được trống (cm)" },
        ]}
      >
        <Input min={1} max={200} type="number" />
      </Form.Item>
      <Form.Item
        label="Độ rộng vai"
        name="shoulder_width"
        rules={[
          { required: true, message: "Chiều rộng vai không được trống (cm)" },
        ]}
      >
        <Input min={1} max={200} type="number" />
      </Form.Item>
      <Form.Item
        label="Độ rộng cổ"
        name="wide_neck"
        rules={[
          { required: true, message: "Độ rộng cổ không được trống (cm)" },
        ]}
      >
        <Input min={1} max={200} type="number" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button type="primary" htmlType="submit">
          Cập nhật size
        </Button>
      </Form.Item>
    </Form>
  );
};

export { UpdateSize };
