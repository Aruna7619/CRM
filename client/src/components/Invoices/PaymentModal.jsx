import React, { useState, useEffect } from "react";
import "../../styles/paymentModal.css";


const PaymentModal = ({
  isOpen,
  onClose,
  invoice,
  invoices,
  setInvoices,
}) => {


  const [paymentStatus, setPaymentStatus] = useState("");
  const [paidAmount, setPaidAmount] = useState("");



  useEffect(() => {

    if(invoice){

      setPaymentStatus(
        invoice.paymentStatus
      );

      setPaidAmount(
        invoice.paidAmount || ""
      );

    }

  },[invoice]);



  if(!isOpen || !invoice)
    return null;



  const handlePaymentUpdate = () => {


    let updatedStatus =
      paymentStatus;



    if(
      Number(paidAmount) >=
      Number(invoice.amount)
    ){

      updatedStatus = "Paid";

    }
    else if(
      Number(paidAmount) > 0
    ){

      updatedStatus =
        "Partially Paid";

    }
    else{

      updatedStatus =
        "Unpaid";

    }



    const updatedInvoices =
      invoices.map((item)=>{


        if(item.id === invoice.id){

          return {

            ...item,

            paymentStatus:
              updatedStatus,

            paidAmount:
              Number(paidAmount)

          };

        }


        return item;

      });



    setInvoices(updatedInvoices);

    onClose();

  };



  return (

    <div className="payment-modal-overlay">


      <div className="payment-modal">


        <div className="payment-header">

          <h2>
            Update Payment
          </h2>


          <button
            onClick={onClose}
          >
            ×
          </button>

        </div>



        <div className="payment-body">


          <p>
            Invoice:
            <b>
              {" "}{invoice.invoiceNo}
            </b>
          </p>


          <p>
            Total Amount:
            <b>
              {" "}
              ₹{invoice.amount}
            </b>
          </p>



          <label>
            Payment Received
          </label>


          <input

            type="number"

            value={paidAmount}

            onChange={(e)=>
              setPaidAmount(
                e.target.value
              )
            }

            placeholder="Enter amount"

          />



          <label>
            Payment Status
          </label>


          <select

            value={paymentStatus}

            onChange={(e)=>
              setPaymentStatus(
                e.target.value
              )
            }

          >

            <option value="Unpaid">
              Unpaid
            </option>


            <option value="Partially Paid">
              Partially Paid
            </option>


            <option value="Paid">
              Paid
            </option>


          </select>



        </div>



        <div className="payment-actions">


          <button
            className="cancel-payment"
            onClick={onClose}
          >
            Cancel
          </button>



          <button
            className="save-payment"
            onClick={handlePaymentUpdate}
          >
            Save Payment
          </button>


        </div>



      </div>


    </div>

  );

};


export default PaymentModal;