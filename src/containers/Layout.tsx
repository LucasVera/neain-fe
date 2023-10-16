import { ReactNode } from "react"
import AuthGuard from "./AuthGuard"
import Header from "./Header/Header"

interface LayoutProps {
  children?: ReactNode,
}


export default function Layout(props: LayoutProps) {
  const {
    children = <></>,
  } = props
  return (
    <div>
      <AuthGuard>
        <Header />
        {children}
      </AuthGuard>
    </div>
  )
}
