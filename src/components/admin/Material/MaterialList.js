import { useEffect, useState } from "react";
import { materialService } from "../../../services/admin";
import "./MaterialList.css";
import { toastService } from "../../../services/common";
import { Button, Popconfirm } from "antd";
import { Link } from "react-router-dom";
const MaterialList = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    (async () => {
      const body = await materialService.getAllMaterials();
      setMaterials(body.data);
    })();
  }, []);

  const handleDelete = async (materialId) => {
    const body = await materialService.deleteMaterial(materialId);
    if (body.data === 300) {
      toastService.info("Chất liệu đang được sử dụng");
    } else {
      toastService.success("Xoá chất liệu thành công");
      setMaterials(materials.filter((material) => material.id !== materialId));
    }
  };

  return (
    <div>
      <Link to={"/admin/materials/add"}>
        <Button type="primary">Thêm chất liệu sản phẩm</Button>
      </Link>
      <table className="mt-3 table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Mô tả</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material) => {
            return (
              <tr key={material.id}>
                <td>{material.id}</td>
                <td>{material.name}</td>
                <td>{material.description}</td>
                <td>
                  <div className="actions">
                    <div className="action update">
                      <Link to={`/admin/materials/update/${material.id}`}>
                        <Button type="primary" className="btn">
                          <i className="fa-regular fa-pen-to-square"></i>
                        </Button>
                      </Link>
                    </div>
                    <div className="action delete">
                      <Popconfirm
                        title="Xoá chất liệu"
                        description="Bạn có chắc chắn muốn xoá chất liệu này?"
                        onConfirm={() => handleDelete(material.id)}
                        okText="Xoá"
                        cancelText="Huỷ"
                      >
                        <button className="btn">
                          <i className="fa-sharp fa-solid fa-trash"></i>
                        </button>
                      </Popconfirm>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export { MaterialList };
