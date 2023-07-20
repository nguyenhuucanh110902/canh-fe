import { Button, Form, Input } from "antd";
import { materialService } from "../../../../services/admin";
import { toastService } from "../../../../services/common";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
const UpdateMaterial = () => {
  const { materialId } = useParams();
  console.log(materialId)
  const navigate = useNavigate();
  const [material, setMaterial] = useState({});
  const [form] = Form.useForm();

  useEffect(() => {
    (async () => {
      const body = await materialService.getOne(materialId);
      console.log(body.name)
      setMaterial(body.data);
      form.setFieldsValue({
        ...body.data,
      });
    })();
  }, []);

  const updateHandle = async (form) => {
    try {
      const formData = {
        id: materialId,
        name: form.name,
        description: form.description,
      };
      materialService.updateMaterial(formData);
      toastService.success("Cập nhật Material thành công");
      navigate("/admin/materials");
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
        rules={[{ required: true, message: "Tên Material không được trống" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button type="primary" htmlType="submit">
          Cập nhật Material
        </Button>
      </Form.Item>
    </Form>
  );
};

export { UpdateMaterial };
