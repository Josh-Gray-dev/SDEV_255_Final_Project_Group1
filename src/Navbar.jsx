import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <CustomLink to="/schedule">Current Schedule</CustomLink>
                <CustomLink to="/add-drop">Add/Drop Course</CustomLink>
                <CustomLink to="/create-delete">Create/Delete Course</CustomLink>
                <CustomLink to="/catalog">Course Catalog</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}