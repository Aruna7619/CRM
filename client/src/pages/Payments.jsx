import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import PaymentTable from "../components/PaymentTable";
import AddPaymentModal from "../components/AddPaymentModal";
import ViewPaymentModal from "../components/ViewPaymentModal";

import "../styles/payments.css";

const Payments = () => {

  const [showModal, setShowModal] = useState(false);
  const [editPayment, setEditPayment] = useState(null);

  const [search, setSearch] = useState("");

  const [payments, setPayments] = useState([
    {
      id: 1,
      client: "Rahul Sharma",
      invoice: "INV001",
      amount: "25000",
      paymentDate: "2026-07-15",
      dueDate: "2026-07-15",
      method: "UPI",
      status: "Paid",
    },
    {
      id: 2,
      client: "Priya Singh",
      invoice: "INV002",
      amount: "18500",
      paymentDate: "2026-07-12",
      dueDate: "2026-07-20",
      method: "Cash",
      status: "Partial",
    },
    {
      id: 3,
      client: "Amit Kumar",
      invoice: "INV003",
      amount: "30000",
      paymentDate: "2026-07-10",
      dueDate: "2026-07-25",
      method: "Bank Transfer",
      status: "Unpaid",
    },
  ]);

  // Search

  const filteredPayments = payments.filter(
    (payment) =>
      payment.client.toLowerCase().includes(search.toLowerCase()) ||
      payment.invoice.toLowerCase().includes(search.toLowerCase()) ||
      payment.status.toLowerCase().includes(search.toLowerCase())
  );

  // Add

  const addPayment = (newPayment) => {

    setPayments([
      ...payments,
      {
        id: payments.length + 1,
        ...newPayment,
      },
    ]);

  };

  // Update

  const updatePayment = (updatedPayment) => {

    setPayments(
      payments.map((payment) =>
        payment.id === updatedPayment.id
          ? updatedPayment
          : payment
      )
    );

  };

  // Edit

  const handleEdit = (payment) => {

    setEditPayment(payment);
    setShowModal(true);

  };


  // View Modal
const [showViewModal, setShowViewModal] = useState(false);
const [viewPayment, setViewPayment] = useState(null);

// Delete Modal
const [showDeleteModal, setShowDeleteModal] = useState(false);
const [selectedPayment, setSelectedPayment] = useState(null);


// View Payment
const handleView = (payment) => {
  setViewPayment(payment);
  setShowViewModal(true);
};

// Delete Payment
const deletePayment = (payment) => {
  setSelectedPayment(payment);
  setShowDeleteModal(true);
};

// Confirm Delete
const confirmDelete = () => {
  setPayments(
    payments.filter(
      (payment) => payment.id !== selectedPayment.id
    )
  );

  setShowDeleteModal(false);
  setSelectedPayment(null);
};

  return (

    <AdminLayout>

      <div className="payments-page">

        <div className="payments-header">

          <h2>Payment Management</h2>

          <button
            className="add-payment-btn"
            onClick={() => {
              setEditPayment(null);
              setShowModal(true);
            }}
          >
            + Add Payment
          </button>

        </div>

        <div className="payment-search">

          <input
            type="text"
            placeholder="Search Payment..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

       <PaymentTable
  payments={filteredPayments}
  onView={handleView}
  onEdit={handleEdit}
  onDelete={deletePayment}
/>

      </div>

      {showModal && (

        <AddPaymentModal
          closeModal={() => setShowModal(false)}
          addPayment={addPayment}
          updatePayment={updatePayment}
          editPayment={editPayment}
        />

      )}



      {/* View Payment */}

{showViewModal && (

  <ViewPaymentModal
    payment={viewPayment}
    closeModal={() => {
      setShowViewModal(false);
      setViewPayment(null);
    }}
  />

)}


{/* Delete Modal */}

{showDeleteModal && (

<div className="delete-modal-overlay">

  <div className="delete-modal">

    <h2>Delete Payment</h2>

    <p>

      Are you sure you want to delete
      <strong> {selectedPayment?.invoice}</strong> ?

    </p>

    <div className="delete-modal-buttons">

      <button
        className="cancel-btn"
        onClick={()=>{
          setShowDeleteModal(false);
          setSelectedPayment(null);
        }}
      >
        Cancel
      </button>

      <button
        className="confirm-delete-btn"
        onClick={confirmDelete}
      >
        Delete
      </button>

    </div>

  </div>

</div>

)}

    </AdminLayout>

  );
};

export default Payments;