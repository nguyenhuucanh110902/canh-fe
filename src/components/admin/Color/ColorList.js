import { useEffect, useState } from "react";
import { colorService } from "../../../services/admin";
import "./ColorList.css";
import { toastService } from "../../../services/common";
import { Button, Popconfirm } from "antd";
import { Link } from "react-router-dom";
const ColorList = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    (async () => {
      const body = await colorService.getAllColors();
      setColors(body.data);
    })();
  }, []);

  const handleDelete = async (colorId) => {
    const body = await colorService.deleteColor(colorId);
    if (body.data === 300) {
      toastService.info("Màu đang được sử dụng");
    } else {
      toastService.success("Xoá màu thành công");
      setColors(colors.filter((color) => color.id !== colorId));
    }
  };

  return (
    <div>
      <Link to={"/admin/colors/add"}>
        <Button type="primary">Thêm màu</Button>
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
          {colors.map((Color) => {
            return (
              <tr key={Color.id}>
                <td>{Color.id}</td>
                <td>{Color.name}</td>
                <td>{Color.description}</td>
                <td>
                  <div className="actions">
                    <div className="action update">
                      <Link to={`/admin/colors/update/${Color.id}`}>
                        <Button type="primary" className="btn">
                          <i className="fa-regular fa-pen-to-square"></i>
                        </Button>
                      </Link>
                    </div>
                    <div className="action delete">
                      <Popconfirm
                        title="Xoá màu"
                        description="Bạn có chắc chắn muốn xoá màu này?"
                        onConfirm={() => handleDelete(Color.id)}
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
export { ColorList };
