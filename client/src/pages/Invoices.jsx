import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import InvoiceTable from "../components/Invoices/InvoiceTable";
import InvoiceFilters from "../components/Invoices/InvoiceFilters";
import InvoiceModal from "../components/Invoices/InvoiceModal";
import InvoiceDetails from "../components/Invoices/InvoiceDetails";
import DeleteInvoiceModal from "../components/Invoices/DeleteInvoiceModal";
import InvoicePDFPreview from "../components/Invoices/InvoicePDFPreview";
import PaymentModal from "../components/Invoices/PaymentModal";
import "../styles/invoices.css";

const initialInvoices = [
  {
    id: 1,
    invoiceNo: "INV001",
    client: "ABC Pvt Ltd",
    phone: "9876543210",
    email: "abc@gmail.com",
    date: "2026-07-15",
    dueDate: "2026-07-30",
    amount: 29500,
    paymentStatus: "Unpaid",
    status: "Pending",
    notes: "",
    products: [
      {
        id: 1,
        name: "CRM Software",
        qty: 1,
        price: 25000,
        gst: 18,
      },
    ],
  },
  {
    id: 2,
    invoiceNo: "INV002",
    client: "XYZ Solutions",
    phone: "9988776655",
    email: "xyz@gmail.com",
    date: "2026-07-16",
    dueDate: "2026-07-31",
    amount: 17700,
    paymentStatus: "Paid",
    status: "Completed",
    notes: "",
    products: [
      {
        id: 1,
        name: "Website Development",
        qty: 1,
        price: 15000,
        gst: 18,
      },
    ],
  },
];

const Invoices = () => {
  const [invoices, setInvoices] = useState(initialInvoices);

  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPDFOpen, setIsPDFOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.invoiceNo.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPayment =
      paymentFilter === "" ||
      invoice.paymentStatus === paymentFilter;

    return matchesSearch && matchesPayment;
  });

  return (
    <AdminLayout>
      <div className="invoices-page">

        <div className="invoices-header">
          <h2>Invoice Management</h2>

          <button
            className="add-invoice-btn"
            onClick={() => {
              setSelectedInvoice(null);
              setIsModalOpen(true);
            }}
          >
            + New Invoice
          </button>
        </div>

        <InvoiceFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          paymentFilter={paymentFilter}
          setPaymentFilter={setPaymentFilter}
        />

        <InvoiceTable
          invoices={filteredInvoices}
          setSelectedInvoice={setSelectedInvoice}
          setIsModalOpen={setIsModalOpen}
          setIsDetailsOpen={setIsDetailsOpen}
          setIsDeleteOpen={setIsDeleteOpen}
          setIsPDFOpen={setIsPDFOpen}
          setIsPaymentOpen={setIsPaymentOpen}
        />

        <InvoiceModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          invoice={selectedInvoice}
          invoices={invoices}
          setInvoices={setInvoices}
        />

        <InvoiceDetails
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
          invoice={selectedInvoice}
        />

        <DeleteInvoiceModal
          isOpen={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          invoice={selectedInvoice}
          invoices={invoices}
          setInvoices={setInvoices}
        />

        <InvoicePDFPreview
          isOpen={isPDFOpen}
          onClose={() => setIsPDFOpen(false)}
          invoice={selectedInvoice}
        />

        <PaymentModal
          isOpen={isPaymentOpen}
          onClose={() => setIsPaymentOpen(false)}
          invoice={selectedInvoice}
          invoices={invoices}
          setInvoices={setInvoices}
        />

      </div>
    </AdminLayout>
  );
};

export default Invoices;