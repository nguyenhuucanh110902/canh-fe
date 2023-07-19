import { useEffect, useState } from "react";
import "./CategoryList.css";
import { categoryService } from "../../../services/admin";
import { toastService } from "../../../services/common";
import { Button, Popconfirm } from "antd";
import { Link } from "react-router-dom";
const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const body = await categoryService.getAllCategories();
      setCategories(body.data);
    })();
  }, []);

  const handleDelete = async (categoryId) => {
    const body = await categoryService.deleteCategory(categoryId);
    if (body.data === 300) {
      toastService.info("Danh mục đang được sử dụng");
    } else {
      toastService.success("Xoá danh mục thành công");
      setCategories(categories.filter((category) => category.id !== categoryId));
    }
  };

  return (
    <div>
      <Link to={"/admin/categories/add"}>
        <Button type="primary">Thêm category</Button>
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
          {categories.map((category) => {
            return (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>
                  <div className="actions">
                    <div className="action update">
                      <Link to={`/admin/categories/update/${category.id}`}>
                        <Button type="primary" className="btn">
                          <i className="fa-regular fa-pen-to-square"></i>
                        </Button>
                      </Link>
                    </div>
                    <div className="action delete">
                      <Popconfirm
                        title="Xoá category"
                        description="Bạn có chắc chắn muốn xoá Category này?"
                        onConfirm={() => handleDelete(category.id)}
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
export { CategoryList };
