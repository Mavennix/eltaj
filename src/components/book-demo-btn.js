import React from "react"
import { Link } from "gatsby"

const BookDemoBtn = () => {
  return (
    <Link
      to="/book-demo"
      className="btn btn-primary rounded-0 text-center px-4 mt-5 btn-lg"
    >
      Book a free demo
    </Link>
  )
}

export default BookDemoBtn
