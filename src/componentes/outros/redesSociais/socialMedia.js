import './socialMedia.css'

function SocialMedia() {
   return(
      <div className="side-bar">
         <ul>
            <li>
               <i className="fa-brands fa-instagram"/>
               <a href="" rel="noreferrer" target="_blank">instagram</a>
            </li>
            
            <li>
               <i className="fa-brands fa-linkedin"/>
               <a href="" rel="noreferrer" target="_blank">linkedin</a>
            </li>
      
            <li>
               <i className="fa-brands fa-github"/>
               <a href="https://github.com/victortarg" rel="noreferrer" target="_blank">
                  <img src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" className="img_social_media"/>
                  github
               </a>

            </li>
      
            <li>
               <i className="fa-brands fa-google"/>
               <a href="" rel="noreferrer" target="_blank">gmail</a>
            </li>

         </ul>
      </div>
   )
}

export default SocialMedia;