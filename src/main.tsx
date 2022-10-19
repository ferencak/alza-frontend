import ReactDOM from 'react-dom/client'

import AppLayout from 'layouts/AppLayout'

import { StoreProvider } from 'contexts/store.context'

import './assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <AppLayout />
  </StoreProvider>
)
