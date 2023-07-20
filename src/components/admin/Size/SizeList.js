import { useEffect, useState } from "react";
import { sizeService } from "../../../services/admin";
import "./SizeList.css";
import { toastService } from "../../../services/common";
import { Button, Popconfirm } from "antd";
import { Link } from "react-router-dom";
const SizeList = () => {
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    (async () => {
      const body = await sizeService.getAllSizes();
      setSizes(body.data);
    })();
  }, []);

  const handleDelete = async (sizeId) => {
    const body = await sizeService.deleteSize(sizeId);
    if (body.data === 300) {
      toastService.info("Size đang được sử dụng");
    } else {
      toastService.success("Xoá size thành công");
      setSizes(sizes.filter((size) => size.id !== sizeId));
    }
  };

  return (
    <div>
      <Link to={"/admin/sizes/add"}>
        <Button type="primary">Thêm size</Button>
      </Link>
      <table className="mt-3 table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Dài áo</th>
            <th>Dài tay áo</th>
            <th>Rộng ngực</th>
            <th>Rộng vai</th>
            <th>Rộng cổ</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((Size) => {
            return (
              <tr key={Size.id}>
                <td>{Size.id}</td>
                <td>{Size.name}</td>
                <td>{Size.long_shirt}</td>
                <td>{Size.long_sleeve}</td>
                <td>{Size.chest}</td>
                <td>{Size.shoulder_width}</td>
                <td>{Size.wide_neck}</td>
                <td>
                  <div className="actions">
                    <div className="action update">
                      <Link to={`/admin/sizes/update/${Size.id}`}>
                        <Button type="primary" className="btn">
                          <i className="fa-regular fa-pen-to-square"></i>
                        </Button>
                      </Link>
                    </div>
                    <div className="action delete">
                      <Popconfirm
                        title="Xoá màu"
                        description="Bạn có chắc chắn muốn xoá size này?"
                        onConfirm={() => handleDelete(Size.id)}
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
export { SizeList };
