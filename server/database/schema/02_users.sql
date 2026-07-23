CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,

    role_id INT NOT NULL,

    employee_code VARCHAR(20) NOT NULL UNIQUE,

    first_name VARCHAR(100) NOT NULL,

    last_name VARCHAR(100),

    email VARCHAR(100) NOT NULL UNIQUE,

    phone VARCHAR(20),

    password VARCHAR(255) NOT NULL,

    profile_image VARCHAR(255),

    status ENUM('Active','Inactive') DEFAULT 'Active',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_user_role
        FOREIGN KEY (role_id)
        REFERENCES roles(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

INSERT INTO users
(
role_id,
employee_code,
first_name,
last_name,
email,
phone,
password
)
VALUES
(
1,
'EMP001',
'Admin',
'User',
'admin@crm.com',
'9876543210',
'admin123'
);

show tables;

select * from users;


UPDATE users
SET password='$2b$10$1xG0XIEDjQVJFqtLuiDh5uHomFpOtrORFpjGm.VDPv0FYDbjlXNke'
WHERE email='admin@crm.com';
