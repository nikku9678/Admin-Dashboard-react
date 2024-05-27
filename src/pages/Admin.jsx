import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import './Admin.css'
const Admin = () => {

  useEffect(() => {
    // SIDEBAR TOGGLE
    let sidebarOpen = false;
    const sidebar = document.getElementById('sidebar');

    const openSidebar = () => {
      if (!sidebarOpen) {
        sidebar.classList.add('sidebar-responsive');
        sidebarOpen = true;
      }
    };

    const closeSidebar = () => {
      if (sidebarOpen) {
        sidebar.classList.remove('sidebar-responsive');
        sidebarOpen = false;
      }
    };

    window.openSidebar = openSidebar;
    window.closeSidebar = closeSidebar;

    // BAR CHART
    const barChartOptions = {
      series: [
        {
          data: [10, 8, 6, 4, 2],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
      plotOptions: {
        bar: {
          distributed: true,
          borderRadius: 4,
          horizontal: false,
          columnWidth: '40%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
      },
      yaxis: {
        title: {
          text: 'Count',
        },
      },
    };

    const barChart = new ApexCharts(
      document.querySelector('#bar-chart'),
      barChartOptions
    );
    barChart.render();

    // AREA CHART
    const areaChartOptions = {
      series: [
        {
          name: 'Purchase Orders',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'Sales Orders',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      colors: ['#4f35a1', '#246dec'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      markers: {
        size: 0,
      },
      yaxis: [
        {
          title: {
            text: 'Purchase Orders',
          },
        },
        {
          opposite: true,
          title: {
            text: 'Sales Orders',
          },
        },
      ],
      tooltip: {
        shared: true,
        intersect: false,
      },
    };

    const areaChart = new ApexCharts(
      document.querySelector('#area-chart'),
      areaChartOptions
    );
    areaChart.render();

  }, []);

  return (
    <div>
      <div className="grid-container">

        {/* <!-- Header --> */}
        <header className="header">
          <div className="menu-icon" onClick={() => window.openSidebar()}>
            <span className="material-icons-outlined"><i class="fa-solid fa-bars"></i></span>
          </div>
          <div className="header-left">
            <span className="material-icons-outlined"><input type="text" placeholder='Search' name="" id="" /></span>
          </div>
          <div className="header-right">
            <span className="material-icons-outlined"><i class="fa-regular fa-bell"></i></span>
            <span className="material-icons-outlined"><i class="fa-regular fa-envelope"></i></span>
            <span className="material-icons-outlined"><i class="fa-regular fa-user"></i></span>
          </div>
        </header>
        {/* <!-- End Header --> */}

        {/* <!-- Sidebar --> */}
        <aside id="sidebar">
          <div className="sidebar-title">
            <div className="sidebar-brand">
              <span className="material-icons-outlined">Nikku</span>
            </div>
            <span className="material-icons-outlined" onClick={() => window.closeSidebar()}><i class="fa-solid fa-xmark"></i></span>
          </div>

          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <a href="#" target="_blank">
                <span className="material-icons-outlined">Home</span>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="#" target="_blank">
                <span className="material-icons-outlined">About</span>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="#" target="_blank">
                <span className="material-icons-outlined">Services</span>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="#" target="_blank">
                <span className="material-icons-outlined">Cart</span>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="#" target="_blank">
                <span className="material-icons-outlined">Products</span>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="#" target="_blank">
                <span className="material-icons-outlined">Reports</span>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="#" target="_blank">
                <span className="material-icons-outlined">Settings</span> 
              </a>
            </li>
          </ul>
        </aside>
        {/* <!-- End Sidebar --> */}

        {/* <!-- Main --> */}
        <main className="main-container">
          <div className="main-title">
            <p className="font-weight-bold">DASHBOARD</p>
          </div>

          <div className="main-cards">

            <div className="card">
              <div className="card-inner">
                <p className="text-primary">PRODUCTS</p>
              </div>
              <span className="text-primary font-weight-bold">249</span>
            </div>

            <div className="card">
              <div className="card-inner">
                <p className="text-primary">PURCHASE ORDERS</p>
              </div>
              <span className="text-primary font-weight-bold">83</span>
            </div>

            <div className="card">
              <div className="card-inner">
                <p className="text-primary">SALES ORDERS</p>
              </div>
              <span className="text-primary font-weight-bold">79</span>
            </div>

            <div className="card">
              <div className="card-inner">
                <p className="text-primary">INVENTORY ALERTS</p>
              </div>
              <span className="text-primary font-weight-bold">56</span>
            </div>

          </div>

          <div className="charts">

            <div className="charts-card">
              <p className="chart-title">Top 5 Products</p>
              <div id="bar-chart"></div>
            </div>

            <div className="charts-card">
              <p className="chart-title">Purchase and Sales Orders</p>
              <div id="area-chart"></div>
            </div>

          </div>
        </main>
        {/* <!-- End Main --> */}

      </div>
    </div>
  );
}

export default Admin;
