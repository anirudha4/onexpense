import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from '@contexts/auth/index.jsx'
import ThemeProvider from '@contexts/theme/index.jsx'
import UserProvider from '@contexts/user/index.jsx'
import CategoryProvider from '@contexts/category/index.jsx'
import TransactionProvider from '@contexts/transaction/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <UserProvider>
          <CategoryProvider>
            <TransactionProvider>
              <App />
            </TransactionProvider>
          </CategoryProvider>
        </UserProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode >,
)
