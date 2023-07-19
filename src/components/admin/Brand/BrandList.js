import { useEffect, useState } from "react";
import { brandService } from "../../../services/admin";
import "./BrandList.css";
import { toastService } from "../../../services/common";
import { Button, Popconfirm } from "antd";
import { Link } from "react-router-dom";
const BrandList = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    (async () => {
      const body = await brandService.getAllBrands();
      setBrands(body.data);
    })();
  }, []);

  const handleDelete = async (brandId) => {
    const body = await brandService.deleteBrand(brandId);
    if (body.data === 300) {
      toastService.info("Brand đang được sử dụng");
    } else {
      toastService.success("Xoá brand thành công");
      setBrands(brands.filter((brand) => brand.id !== brandId));
    }
  };

  return (
    <div>
      <Link to={"/admin/brands/add"}>
        <Button type="primary">Thêm brand</Button>
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
          {brands.map((brand) => {
            return (
              <tr key={brand.id}>
                <td>{brand.id}</td>
                <td>{brand.name}</td>
                <td>{brand.description}</td>
                <td>
                  <div className="actions">
                    <div className="action update">
                      <Link to={`/admin/brands/update/${brand.id}`}>
                        <Button type="primary" className="btn">
                          <i className="fa-regular fa-pen-to-square"></i>
                        </Button>
                      </Link>
                    </div>
                    <div className="action delete">
                      <Popconfirm
                        title="Xoá brand"
                        description="Bạn có chắc chắn muốn xoá brand này?"
                        onConfirm={() => handleDelete(brand.id)}
                        // onCancel={cancel}
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
export { BrandList };
