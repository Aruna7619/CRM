import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import QuotationTable from "../components/Quotations/QuotationTable";
import QuotationFilters from "../components/Quotations/QuotationFilters";
import QuotationModal from "../components/Quotations/QuotationModal";
import QuotationDetails from "../components/Quotations/QuotationDetails";
import DeleteQuotationModal from "../components/Quotations/DeleteQuotationModal";
import PDFPreview from "../components/Quotations/PDFPreview";
import ConvertInvoiceModal from "../components/Quotations/ConvertInvoiceModal";
import "../styles/quotations.css";

const initialQuotations = [
    {
        id: 1,
        quoteNo: "QT001",
        client: "ABC Pvt Ltd",
        phone: "9876543210",
        email: "abc@gmail.com",
        date: "2026-07-15",
        amount: 25000,
        status: "Draft",

        products: [
            {
                id: 1,
                name: "Laptop",
                qty: 1,
                price: 20000,
                gst: 18
            }
        ]
    },
    {
        id: 2,
        quoteNo: "QT002",
        client: "XYZ Solutions",
        phone: "9988776655",
        email: "xyz@gmail.com",
        date: "2026-07-16",
        amount: 18000,
        status: "Sent",

        products: [
            {
                id: 1,
                name: "Printer",
                qty: 1,
                price: 15000,
                gst: 18
            }
        ]
    },
];
const Quotations = () => {
    const [quotations, setQuotations] = useState(initialQuotations);

    const [selectedQuotation, setSelectedQuotation] = useState(null);

    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isPDFOpen, setIsPDFOpen] = useState(false);
    const [isConvertOpen, setIsConvertOpen] = useState(false);

    const filteredQuotations = quotations.filter((quotation) => {
        const matchesSearch =
            quotation.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
            quotation.quoteNo.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus =
            statusFilter === "" || quotation.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    return (
        <AdminLayout>
            <div className="quotations-page">

                <div className="quotations-header">
                    <h2>Quotation Management</h2>

                    <button
                        className="add-quotation-btn"
                        onClick={() => {
                            setSelectedQuotation(null);
                            setIsModalOpen(true);
                        }}
                    >
                        + New Quotation
                    </button>
                </div>

                <QuotationFilters
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    statusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                />

                <QuotationTable
                    quotations={filteredQuotations}
                    setSelectedQuotation={setSelectedQuotation}
                    setIsModalOpen={setIsModalOpen}
                    setIsDetailsOpen={setIsDetailsOpen}
                    setIsDeleteOpen={setIsDeleteOpen}
                    setIsPDFOpen={setIsPDFOpen}
                    setIsConvertOpen={setIsConvertOpen}
                />

                <QuotationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    quotation={selectedQuotation}
                    quotations={quotations}
                    setQuotations={setQuotations}
                />

                <QuotationDetails
                    isOpen={isDetailsOpen}
                    onClose={() => setIsDetailsOpen(false)}
                    quotation={selectedQuotation}
                />

                <DeleteQuotationModal
                    isOpen={isDeleteOpen}
                    onClose={() => setIsDeleteOpen(false)}
                    quotation={selectedQuotation}
                    quotations={quotations}
                    setQuotations={setQuotations}
                />

                <PDFPreview
                    isOpen={isPDFOpen}
                    onClose={() => setIsPDFOpen(false)}
                    quotation={selectedQuotation}
                />

                <ConvertInvoiceModal
                    isOpen={isConvertOpen}
                    onClose={() => setIsConvertOpen(false)}
                    quotation={selectedQuotation}
                    quotations={quotations}
                    setQuotations={setQuotations}
                />

            </div>
        </AdminLayout>
    );
};

export default Quotations;