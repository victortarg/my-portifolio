import "./navBar.css"

function NavBar() {
   return(
      <header>

         <div className="toggle"></div>

         <ul className="nav">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
         </ul>
      </header>
   )
}

export default NavBar;