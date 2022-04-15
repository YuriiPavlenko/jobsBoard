const Navbar = ({ mainUser, switchUser }) => {
  return (
    <div className="top-bar">
      <nav className="menu">
        <li>
          <a href={mainUser ? "#" : "#"}>Home</a>
        </li>
        <li>
          <a href={mainUser ? "" : ""}>CV</a>
        </li>
        <li>
          <a href={mainUser ? "" : ""}>CL</a>
        </li>
        <li>
          <a href={mainUser ? "" : ""}>Stepstone</a>
        </li>
        <li>
          <a href={mainUser ? "" : ""}>About</a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://de.indeed.com/jobs?q=Werkstudent%20Data%20Science&l=Frankfurt%20am%20Main"
            rel="noreferrer">
            Indeed
          </a>
        </li>
      </nav>
      <p className="toggle-text-kitya">Kitya</p>
      <form>
        <label className="toggle">
          <div className="toggle__wrapper">
            <input type="checkbox" defaultChecked onChange={switchUser} />
            <div className="toggle__bg">
              <div className="toggle__sphere">
                <div className="toggle__sphere-bg"></div>
                <div className="toggle__sphere-overlay"></div>
              </div>
            </div>
          </div>
        </label>
      </form>
      <p className="toggle-text-kotya">Kotya</p>
    </div>
  )
}

export default Navbar
