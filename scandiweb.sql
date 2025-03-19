DROP DATABASE IF EXISTS scandiweb;
CREATE DATABASE scandiweb;
use scandiweb;


-- Creating tables from data.json
CREATE TABLE categories (
	id INT auto_increment PRIMARY KEY,
    name VARCHAR(250) NOT NULL
);

CREATE TABLE products (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    inStock BOOLEAN DEFAULT TRUE,
    description TEXT,
    category_id INT REFERENCES categories(id),
    brand VARCHAR(250)
);

CREATE TABLE prices (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id),
    amount DECIMAL(10,2) NOT NULL,
    currency_label VARCHAR(10),
    currency_symbol VARCHAR(5)
);

CREATE TABLE product_gallery(
	id INT PRIMARY KEY,
    product_id INT REFERENCES products(id),
    image_url TEXT
);

CREATE TABLE attributes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    type VARCHAR(20) -- 'text' ou 'swatch'
);

CREATE TABLE product_attribute_sets (
    id INT PRIMARY KEY,
    product_id INT REFERENCES products(id),
    attribute_id INT REFERENCES attributes(id)
);

CREATE TABLE attribute_items (
    id INT PRIMARY KEY,
    attribute_id INT REFERENCES attributes(id),
    display_value VARCHAR(100),
    value VARCHAR(100)
);

CREATE TABLE attribute_items (
    id INT PRIMARY KEY,
    attribute_id INT REFERENCES attributes(id),
    display_value VARCHAR(100),
    value VARCHAR(100)
);

CREATE TABLE orders(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    total_amount DECIMAL(10,2) NOT NULL,
	status ENUM('pending', 'processing', 'shipped', 'delivered') NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Populain