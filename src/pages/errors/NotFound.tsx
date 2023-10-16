import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <h1>404 - NotFound</h1>
      <Link to='/'>Go to home</Link>
    </>
  )
}
