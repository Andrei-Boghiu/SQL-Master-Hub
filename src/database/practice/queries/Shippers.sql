-- Postgres syntax

CREATE TABLE shippers (
    ShipperID serial primary key,
    ShipperName varchar(255),
    Phone varchar(50)
);


INSERT INTO Shippers (ShipperName, Phone)
VALUES
    ('Speedy Express','(503) 555-9831'),
    ('United Package','(503) 555-3199'),
    ('Federal Shipping','(503) 555-9931');



