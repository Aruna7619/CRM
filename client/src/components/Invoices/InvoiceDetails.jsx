import React from "react";
import "../../styles/invoiceDetails.css";

const InvoiceDetails = ({
  isOpen,
  onClose,
  invoice,
}) => {

  if (!isOpen || !invoice) return null;


  const calculateSubtotal = () => {

    return invoice.products.reduce(
      (total, item) =>
        total +
        Number(item.qty) *
        Number(item.price),
      0
    );

  };


  const calculateGST = () => {

    return invoice.products.reduce(
      (total, item) => {

        const amount =
          Number(item.qty) *
          Number(item.price);

        return (
          total +
          amount *
          Number(item.gst) / 100
        );

      },0
    );

  };


  return (

    <div className="invoice-details-overlay">


      <div className="invoice-details-modal">


        <div className="invoice-details-header">

          <h2>
            Invoice Details
          </h2>


          <button
            onClick={onClose}
          >
            ×
          </button>

        </div>



        <div className="invoice-info">


          <div>
            <strong>
              Invoice No:
            </strong>
            {invoice.invoiceNo}
          </div>


          <div>
            <strong>
              Date:
            </strong>
            {invoice.date}
          </div>


          <div>
            <strong>
              Due Date:
            </strong>
            {invoice.dueDate}
          </div>


          <div>
            <strong>
              Status:
            </strong>
            {invoice.status}
          </div>


          <div>
            <strong>
              Payment:
            </strong>
            {invoice.paymentStatus}
          </div>


        </div>



        <hr />



        <h3>
          Client Information
        </h3>


        <div className="client-info">

          <p>
            <b>Name:</b> {invoice.client}
          </p>

          <p>
            <b>Phone:</b> {invoice.phone}
          </p>

          <p>
            <b>Email:</b> {invoice.email}
          </p>

        </div>




        <h3>
          Products
        </h3>



        <table className="details-product-table">

          <thead>

            <tr>
              <th>
                Product
              </th>

              <th>
                Qty
              </th>

              <th>
                Price
              </th>

              <th>
                GST
              </th>

              <th>
                Total
              </th>

            </tr>

          </thead>


          <tbody>

          {
            invoice.products.map(
              (item)=>(
                
              <tr key={item.id}>

                <td>
                  {item.name}
                </td>

                <td>
                  {item.qty}
                </td>

                <td>
                  ₹{Number(item.price)
                    .toLocaleString()}
                </td>

                <td>
                  {item.gst}%
                </td>


                <td>

                  ₹
                  {
                    (
                      Number(item.qty) *
                      Number(item.price) +
                      (
                        Number(item.qty) *
                        Number(item.price) *
                        Number(item.gst) /
                        100
                      )
                    )
                    .toLocaleString()
                  }

                </td>


              </tr>

              )
            )
          }


          </tbody>

        </table>




        <div className="invoice-summary">


          <p>
            Subtotal:
            ₹
            {calculateSubtotal()
              .toLocaleString()}
          </p>


          <p>
            GST:
            ₹
            {calculateGST()
              .toLocaleString()}
          </p>


          <h3>

            Grand Total:
            ₹
            {Number(invoice.amount)
              .toLocaleString()}

          </h3>


        </div>



        {
          invoice.notes &&
          <div className="invoice-notes">

            <b>
              Notes:
            </b>

            <p>
              {invoice.notes}
            </p>

          </div>
        }



      </div>


    </div>

  );

};


export default InvoiceDetails;