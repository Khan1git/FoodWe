import React, { useState } from "react";
import "./board.css";
import burger2 from '../../assets/burger2.png' 
import burger from '../../assets/burger.png' 

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // Sample data
  const metrics = {
    totalCustomers: 1234,
    totalOrders: 892,
    totalItems: 150,
    totalRevenue: 25890,
  };

  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      orders: 15,
      joined: "2024-01-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      orders: 8,
      joined: "2024-02-01",
      status: "Active",
    },
    {
      id: 3,
      name: "Mike Brown",
      email: "mike@example.com",
      orders: 12,
      joined: "2024-01-20",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      orders: 5,
      joined: "2024-02-10",
      status: "Active",
    },
  ];

  const orders = [
    {
      id: "ORD001",
      customer: "John Doe",
      items: ["Burger", "Fries"],
      total: 45.99,
      status: "Delivered",
      date: "2024-02-14",
    },
    {
      id: "ORD002",
      customer: "Jane Smith",
      items: ["Pizza"],
      total: 32.5,
      status: "Pending",
      date: "2024-02-14",
    },
    {
      id: "ORD003",
      customer: "Mike Brown",
      items: ["Pasta", "Salad"],
      total: 28.75,
      status: "Processing",
      date: "2024-02-13",
    },
    {
      id: "ORD004",
      customer: "Sarah Wilson",
      items: ["Sushi"],
      total: 52.0,
      status: "Delivered",
      date: "2024-02-13",
    },
  ];

  const menuItems = [
    { id: 1, name: "Chicken Burger", price: 12.99, category: "Burgers", available: true, image: burger2 },
    { id: 2, name: "Margherita Pizza", price: 15.99, category: "Pizza", available: true, image: burger },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "customers":
        return (
          <div className="section-content">
            <div className="section-header">
              <h2>Customer Management</h2>
              <button className="add-btn">Add New Customer</button>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Search customers..." />
              <select className="select">
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Orders</th>
                    <th>Join Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id}>
                      <td>#{customer.id}</td>
                      <td>{customer.name}</td>
                      <td>{customer.email}</td>
                      <td>{customer.orders}</td>
                      <td>{customer.joined}</td>
                      <td>
                        <span
                          className={`status ${customer.status.toLowerCase()}`}
                        >
                          {customer.status}
                        </span>
                      </td>
                      <td className="actions">
                        <button className="edit-btn">Edit</button>
                        <button className="delete-btn">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "orders":
        return (
          <div className="section-content">
            <div className="section-header">
              <h2>Order Management</h2>
              <button className="add-btn">Create Order</button>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Search orders..." />
              <select>
                <option value="all">All Status</option>
                <option value="delivered">Delivered</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
              </select>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.customer}</td>
                      <td>{order.items.join(", ")}</td>
                      <td>${order.total}</td>
                      <td>{order.date}</td>
                      <td>
                        <span
                          className={`status ${order.status.toLowerCase()}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="actions">
                        <button className="edit-btn">Edit</button>
                        <button className="delete-btn">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return (
          <div className="dashboard-content">
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-icon customers-icon">👥</div>
                <div className="metric-info">
                  <h3>Total Customers</h3>
                  <div className="metric-value">{metrics.totalCustomers}</div>
                  <div className="metric-trend positive">
                    ↑ 12.5% this month
                  </div>
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-icon orders-icon">📦</div>
                <div className="metric-info">
                  <h3>Total Orders</h3>
                  <div className="metric-value">{metrics.totalOrders}</div>
                  <div className="metric-trend positive">↑ 8.3% this month</div>
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-icon items-icon">🍽️</div>
                <div className="metric-info">
                  <h3>Total Items</h3>
                  <div className="metric-value">{metrics.totalItems}</div>
                  <div className="metric-trend">→ No change</div>
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-icon revenue-icon">💰</div>
                <div className="metric-info">
                  <h3>Total Revenue</h3>
                  <div className="metric-value">${metrics.totalRevenue}</div>
                  <div className="metric-trend positive">
                    ↑ 15.2% this month
                  </div>
                </div>
              </div>
            </div>

            <div className="menu-items-section">
              <div className="section-header">
                <h2>Menu Items</h2>
                <button className="add-btn">Add New Item</button>
              </div>
              <div className="items-grid">
                {/* -------------- THIS IS THE CARDS SECTION ONW */}

                {menuItems.map((item) => (
                  <div key={item.id} className="menu-card">
                    <div className="image-container">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="food-image"
                      />
                    </div>

                    <div className="card-content">
                      <span className="category-badge">{item.category}</span>
                      <h3 className="food-title">{item.name}</h3>
                      <span className="food-price">
                        ${item.price.toFixed(2)}
                      </span>

                      <div
                        className={`availabilitys-badge ${
                          item.available ? "in-stock" : "out-of-stock"
                        }`}
                      >
                        {/* {item.available ? "In Stock" : "Out of Stock"} */}
                      </div>

                      <div className="action-buttons">
                        <button className="edit-btn">Edit</button>
                        <button className="delete-btn">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={`dashboard-container ${
        isSidebarOpen ? "" : "sidebar-collapsed"
      }`}
    >
      <aside className={`sidebar ${isSidebarOpen ? "" : "collapsed"}`}>
        <div className="sidebar-header">
          <h1 className="logo">Admin Panel</h1>
          <button className="toggle-btn" onClick={toggleSidebar}>
            {isSidebarOpen ? "←" : "→"}
          </button>
        </div>
        <nav className="nav-menu">
          <button
            className={`nav-item ${
              activeSection === "dashboard" ? "active" : ""
            }`}
            onClick={() => setActiveSection("dashboard")}
          >
            {isSidebarOpen ? "📊 Dashboard" : "📊"}
          </button>
          <button
            className={`nav-item ${
              activeSection === "customers" ? "active" : ""
            }`}
            onClick={() => setActiveSection("customers")}
          >
            {isSidebarOpen ? "👥 Customers" : "👥"}
          </button>
          <button
            className={`nav-item ${activeSection === "orders" ? "active" : ""}`}
            onClick={() => setActiveSection("orders")}
          >
            {isSidebarOpen ? "📦 Orders" : "📦"}
          </button>
        </nav>
      </aside>

      <main className={`main-section ${isSidebarOpen ? "" : "expanded"}`}>
        <header className="top-header">
          <div className="header-left">
            <button className="mobile-toggle" onClick={toggleSidebar}>
              ☰
            </button>
            <h2>
              {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </h2>
          </div>
          <div className="user-info">
            <span>Admin User</span>
            <button className="logout-btn">Logout</button>
          </div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;
