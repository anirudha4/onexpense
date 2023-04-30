import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from '@pages/dashboard';
import DashboardLayout from '@pages/dashboard/DashboardLayout';
import AuthLayout from '@pages/auth/AuthLayout';
import Login from '@pages/auth';
import { PATHS } from '@config/constants';
import InsightsLayout from '@pages/insights/InsightsLayout';
import Insights from '@pages/insights';
import InvoicesLayout from '@pages/invoices/InvoicesLayout';
import Invoices from '@pages/invoices';
import Layout from '@pages/Layout';

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
        }
      ]
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App