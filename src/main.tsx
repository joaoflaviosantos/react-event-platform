import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { client } from './lib/apollo'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)

// TypeScript + JSX (XML dentro do Javascript)

// TypeScript + JSX (XML dentro do Javascript)

// CMS - Content Management System
// Wordpress não é Headless, pois entrega tanto o painel de ADMIN quanto o Frontend (temas)
// Headless CMS (GraphCMS): Painel de ADMIN (Dados fornecidos através de uma API REST ou GraphQL)
// React consome essa API do CMS
