import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '@pages/Layout';
import DashboardLayout from '@pages/dashboard/DashboardLayout';
import Dashboard from '@pages/dashboard';
import AuthLayout from '@pages/auth/AuthLayout';
import Login from '@pages/auth';
import InsightsLayout from '@pages/insights/InsightsLayout';
import Insights from '@pages/insights';
import InvoicesLayout from '@pages/invoices/InvoicesLayout';
import Invoices from '@pages/invoices';
import LoansLayout from '@pages/loans/LoansLayout';
import Loans from '@pages/loans/Loans';
import { PATHS } from '@config/constants';

// styles
import '@styles/grid.css';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Login />
        }
      ]
    },
    {
      path: PATHS.APP,
      element: <Layout />,
      children: [
        {
          path: PATHS.DASHBOARD,
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <Dashboard />
            }
          ]
        },
        {
          path: PATHS.INSIGHTS,
          element: <InsightsLayout />,
          children: [
            {
              index: true,
              element: <Insights />
            }
          ]
        },
        {
          path: PATHS.INVOICES,
          element: <InvoicesLayout />,
          children: [
            {
              index: true,
              element: <Invoices />
            }
          ]
        },
        {
          path: PATHS.LOANS,
          element: <LoansLayout />,
          children: [
            {
              index: true,
              element: <Loans />
            }
          ]
        }
      ]
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App