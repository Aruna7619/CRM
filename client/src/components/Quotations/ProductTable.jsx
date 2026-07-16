import React from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import "../../styles/productTable.css";

const ProductTable = ({ products, setProducts }) => {
  const handleChange = (index, field, value) => {
    const updatedProducts = [...products];

    updatedProducts[index][field] =
      field === "name" ? value : Number(value);

    setProducts(updatedProducts);
  };

  const addProduct = () => {
    setProducts([
      ...products,
      {
        id: Date.now(),
        name: "",
        qty: 1,
        price: 0,
        gst: 18,
      },
    ]);
  };

  const removeProduct = (index) => {
    const updatedProducts = products.filter(
      (_, i) => i !== index
    );

    setProducts(updatedProducts);
  };

  return (
    <div className="product-table">

      <div className="product-header">
        <h3>Products / Services</h3>

        <button
          type="button"
          className="add-product-btn"
          onClick={addProduct}
        >
          <FiPlus /> Add Product
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th width="100">Qty</th>
            <th width="120">Price</th>
            <th width="100">GST %</th>
            <th width="120">Total</th>
            <th width="70">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => {
            const total =
              product.qty * product.price +
              (product.qty *
                product.price *
                product.gst) /
                100;

            return (
              <tr key={product.id}>
                <td>
                  <input
                    type="text"
                    value={product.name}
                    placeholder="Product / Service"
                    onChange={(e) =>
                      handleChange(
                        index,
                        "name",
                        e.target.value
                      )
                    }
                  />
                </td>

                <td>
                  <input
                    type="number"
                    value={product.qty}
                    min="1"
                    onChange={(e) =>
                      handleChange(
                        index,
                        "qty",
                        e.target.value
                      )
                    }
                  />
                </td>

                <td>
                  <input
                    type="number"
                    value={product.price}
                    min="0"
                    onChange={(e) =>
                      handleChange(
                        index,
                        "price",
                        e.target.value
                      )
                    }
                  />
                </td>

                <td>
                  <input
                    type="number"
                    value={product.gst}
                    min="0"
                    onChange={(e) =>
                      handleChange(
                        index,
                        "gst",
                        e.target.value
                      )
                    }
                  />
                </td>

                <td>
                  ₹{total.toFixed(2)}
                </td>

                <td>
                  <button
                    type="button"
                    className="delete-product-btn"
                    onClick={() =>
                      removeProduct(index)
                    }
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
};

export default ProductTable;