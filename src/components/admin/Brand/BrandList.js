import { useEffect, useState } from "react"
import { brandService } from "../../../services/admin"
import './BrandList.css';
import { toastService } from "../../../services/common";
import { Button, Popconfirm } from "antd";
import { Link } from "react-router-dom";
const BrandList = () => {
    const [brands, setBrands] = useState([]);


    useEffect(() => {
        (async () => {
            const body = await brandService.getAllBrands();
            setBrands(body.data);
        })()
    }, [])

    const handleDelete = async (brandId) => {
        await brandService.deleteBrand(brandId);
        toastService.success('Delete successfully');
        setBrands(brands.filter(brand => brand.id !== brandId));
    }

    return <div>
        <Link to={'/admin/brands/add'}>
            <Button type="primary">
                Add
            </Button>
        </Link>
        <table className="mt-3 table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {brands.map(brand => {
                    return <tr key={brand.id}>
                        <td>{brand.id}</td>
                        <td>{brand.name}</td>
                        <td>{brand.description}</td>
                        <td>
                            <div className="actions">
                                <div className="action update">
                                    <button className="btn">
                                        <i className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                </div>
                                <div className="action delete">
                                    <Popconfirm
                                        title="Delete the brand"
                                        description="Are you sure to delete this brand?"
                                        onConfirm={() => handleDelete(brand.id)}
                                        // onCancel={cancel}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <button className="btn">
                                            <i className="fa-sharp fa-solid fa-trash"></i>
                                        </button>
                                    </Popconfirm>

                                </div>
                            </div>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}
export {
    BrandList
}