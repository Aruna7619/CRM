import React, { useState, useEffect } from "react";
import "../../styles/invoiceForm.css";

const InvoiceForm = ({
  invoice,
  invoices,
  setInvoices,
  onClose,
}) => {

  const initialForm = {
    invoiceNo: "",
    client: "",
    phone: "",
    email: "",
    date: "",
    dueDate: "",
    paymentStatus: "Unpaid",
    status: "Pending",
    notes: "",
    products: [
      {
        id: 1,
        name: "",
        qty: 1,
        price: 0,
        gst: 18,
      },
    ],
  };


  const [formData, setFormData] = useState(initialForm);


  useEffect(() => {

    if (invoice) {
      setFormData(invoice);
    } 
    else {

      const nextNumber =
        invoices.length + 1;

      setFormData({
        ...initialForm,
        invoiceNo:
          `INV${String(nextNumber).padStart(3,"0")}`,
        date:
          new Date()
          .toISOString()
          .split("T")[0],
      });

    }

  }, [invoice]);


  // Input change

  const handleChange = (e) => {

    const {name,value} = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  // Product change

  const handleProductChange = (
    index,
    field,
    value
  ) => {

    const updatedProducts =
      [...formData.products];

    updatedProducts[index][field] =
      value;


    setFormData({
      ...formData,
      products: updatedProducts
    });

  };


  // Add product row

  const addProduct = () => {

    setFormData({
      ...formData,

      products:[
        ...formData.products,
        {
          id: Date.now(),
          name:"",
          qty:1,
          price:0,
          gst:18
        }
      ]

    });

  };


  // Remove product

  const removeProduct = (index)=>{

    const updated =
      formData.products.filter(
        (_,i)=>i!==index
      );


    setFormData({
      ...formData,
      products:updated
    });

  };


  // Total calculation

  const calculateTotal = () => {

    return formData.products.reduce(
      (total,item)=>{

        const amount =
          Number(item.qty) *
          Number(item.price);


        const gstAmount =
          amount *
          Number(item.gst)/100;


        return total +
          amount +
          gstAmount;

      },0
    );

  };


  // Submit

  const handleSubmit = (e)=>{

    e.preventDefault();


    const invoiceData = {

      ...formData,

      amount:
        calculateTotal()

    };


    if(invoice){

      setInvoices(
        invoices.map((item)=>
          item.id===invoice.id
          ?
          {
            ...invoiceData,
            id:item.id
          }
          :
          item
        )
      );

    }

    else{

      setInvoices([
        ...invoices,
        {
          ...invoiceData,
          id:Date.now()
        }
      ]);

    }


    onClose();

  };


  return (

    <form
      className="invoice-form"
      onSubmit={handleSubmit}
    >


      <div className="form-grid">


        <input
          name="invoiceNo"
          value={formData.invoiceNo}
          readOnly
          placeholder="Invoice No"
        />


        <input
          name="client"
          value={formData.client}
          onChange={handleChange}
          placeholder="Client Name"
          required
        />


        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />


        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />


        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />


        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />

      </div>



      <h3>Products</h3>


      {
        formData.products.map(
          (product,index)=>(

          <div
            className="product-row"
            key={product.id}
          >


            <input
              placeholder="Product Name"
              value={product.name}
              onChange={(e)=>
                handleProductChange(
                  index,
                  "name",
                  e.target.value
                )
              }
            />


            <input
              type="number"
              placeholder="Qty"
              value={product.qty}
              onChange={(e)=>
                handleProductChange(
                  index,
                  "qty",
                  e.target.value
                )
              }
            />


            <input
              type="number"
              placeholder="Price"
              value={product.price}
              onChange={(e)=>
                handleProductChange(
                  index,
                  "price",
                  e.target.value
                )
              }
            />


            <input
              type="number"
              placeholder="GST %"
              value={product.gst}
              onChange={(e)=>
                handleProductChange(
                  index,
                  "gst",
                  e.target.value
                )
              }
            />


            <button
              type="button"
              onClick={()=>
                removeProduct(index)
              }
            >
              ❌
            </button>


          </div>

        ))
      }


      <button
        type="button"
        className="add-product-btn"
        onClick={addProduct}
      >
        + Add Product
      </button>



      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
      />



      <div className="invoice-total">

        Total:
        ₹
        {calculateTotal()
          .toLocaleString()
        }

      </div>



      <div className="form-actions">

        <button
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>


        <button
          type="submit"
        >
          Save Invoice
        </button>

      </div>


    </form>

  );

};


export default InvoiceForm;