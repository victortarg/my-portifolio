import './socialMedia.css'

function SocialMedia() {
   return(
      <div className="side-bar">
         <ul>
            <li>
               <i className="fa-brands fa-instagram"/>
               <span>instagram</span>
            </li>
            
            <li>
               <i className="fa-brands fa-linkedin"/>
               <span>linkedin</span>
            </li>
      
            <li>
               <i className="fa-brands fa-github"/>
               <span>gitHub</span>
            </li>
      
            <li>
               <i className="fa-brands fa-google"/>
               <span>gmail</span>
            </li>

         </ul>
      </div>
   )
}

export default SocialMedia;