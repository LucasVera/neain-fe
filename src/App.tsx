import { Amplify } from "aws-amplify"
import amplify from "./aws-exports"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./AppRoutes"
import styles from "./App.module.css"
import { Authenticator } from "@aws-amplify/ui-react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const gqlApiConfig = {
  aws_appsync_graphqlEndpoint: import.meta.env.VITE_BACKEND_API_URL,
  aws_appsync_region: import.meta.env.VITE_AWS_REGION,
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
  // aws_appsync_authenticationType: "API_KEY",
  // aws_appsync_apiKey: import.meta.env.VITE_APPSYNC_API_KEY,
}

Amplify.configure({
  ...amplify,
  ...gqlApiConfig,
})

function App() {
  return (
    <div className={styles.container}>
      <ToastContainer
        autoClose={3000}
        position="top-left"
        theme="dark"
      />
      <Authenticator.Provider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Authenticator.Provider>
    </div>
  )
}

export default App
