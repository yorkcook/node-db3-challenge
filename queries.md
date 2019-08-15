# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT p.productName, c.categoryName
FROM products as p
inner JOIN categories as c on p.categoryId = c.categoryId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT o.orderId, s.ShipperName
FROM Orders as o
inner JOIN shippers as s on o.ShipperId = s.ShipperID
WHERE OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT p.productname, o.quantity
FROM OrderDetails as o
inner JOIN Products as p on o.productid = p.productid
WHERE o.orderid = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT o.OrderID as Number, c.CustomerName as Customer, e.LastName as Employee
FROM Orders as o
inner JOIN Customers as c on o.CustomerID = c.CustomerID
inner JOIN Employees as e on o.EmployeeID = e.EmployeeID

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
