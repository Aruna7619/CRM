CREATE TABLE leads (

    id INT AUTO_INCREMENT PRIMARY KEY,

    lead_no VARCHAR(20) UNIQUE NOT NULL,

    client_name VARCHAR(150) NOT NULL,

    company_name VARCHAR(150),

    email VARCHAR(100),

    phone VARCHAR(20) NOT NULL,

    loan_type ENUM(
        'Personal Loan',
        'Home Loan',
        'Business Loan',
        'Vehicle Loan'
    ) NOT NULL,

    loan_amount DECIMAL(15,2),

    lead_source ENUM(
        'Website',
        'Walk-in',
        'Referral',
        'Facebook',
        'Instagram',
        'Google Ads',
        'WhatsApp',
        'Other'
    ) DEFAULT 'Website',

    assigned_to INT,

    status ENUM(
        'New',
        'Contacted',
        'Qualified',
        'Proposal Sent',
        'Converted',
        'Rejected'
    ) DEFAULT 'New',

    remarks TEXT,

    created_by INT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_lead_assigned
        FOREIGN KEY (assigned_to)
        REFERENCES users(id),

    CONSTRAINT fk_lead_created
        FOREIGN KEY (created_by)
        REFERENCES users(id)

);