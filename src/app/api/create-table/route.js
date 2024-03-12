// DISABLE FROM PROD

import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

const createTable = {
	customers: `CREATE TABLE Customers (
                CustomerID serial PRIMARY KEY,
                CustomerName VARCHAR(250) NOT NULL,
                ContactName VARCHAR(250),
                Address VARCHAR(250),
                City VARCHAR(100) NOT NULL,
                PostalCode VARCHAR(50),
                Country VARCHAR(100) NOT NULL
              );`,
	categories: `CREATE TABLE Categories (
                CategoryID serial PRIMARY KEY,
                CategoryName VARCHAR(255) NOT NULL,
                Description TEXT
              );`,
	employees: `CREATE TABLE Employees (
                EmployeeID serial PRIMARY KEY,
                LastName VARCHAR(255) NOT NULL,
                FirstName VARCHAR(255) NOT NULL,
                BirthDate DATE,
                Photo VARCHAR(255),
                Notes TEXT
              );`,
	OrderDetails: `CREATE TABLE OrderDetails (
                OrderDetailID serial PRIMARY KEY,
                OrderID INT NOT NULL,
                ProductID INT NOT NULL,
                Quantity INT NOT NULL,
                FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
                FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
            );`,
	orders: `CREATE TABLE Orders (
              OrderID serial PRIMARY KEY,
              CustomerID INTEGER,
              EmployeeID INTEGER,
              OrderDate DATE,
              ShipperID INTEGER,
              FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
              FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID),
              FOREIGN KEY (ShipperID) REFERENCES Shippers(ShipperID)
);`,
	products: `CREATE TABLE Products (
              ProductID serial PRIMARY KEY,
              ProductName VARCHAR(255) NOT NULL,
              SupplierID INT REFERENCES Suppliers(SupplierID),
              CategoryID INT REFERENCES Categories(CategoryID),
              Unit VARCHAR(50) NOT NULL,
              Price DECIMAL(10, 2) NOT NULL
            );`,
	shippers: `CREATE TABLE Shippers (
              ShipperID serial PRIMARY KEY,
              ShipperName VARCHAR(255) NOT NULL,
              Phone VARCHAR(20)
            );`,
	suppliers: `CREATE TABLE Suppliers (
                SupplierID serial PRIMARY KEY,
                SupplierName VARCHAR(255) NOT NULL,
                ContactName VARCHAR(255),
                Address VARCHAR(255),
                City VARCHAR(255),
                PostalCode VARCHAR(50),
                Country VARCHAR(100),
                Phone VARCHAR(20)
              );`,
};

export async function GET(request) {
	try {
		const result = await sql`SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
AND table_type = 'BASE TABLE';`;
		return NextResponse.json({ result }, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error }, { status: 500 });
	}
}
