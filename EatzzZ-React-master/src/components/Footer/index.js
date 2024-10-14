import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./css.css"



const Footer = () => {
    return(
      
                    
                        

    <footer >
      <div className="container1">
        <div className="grid">
          <div>
            <h2 >The good food</h2>
            <p >George's Hot Dogs is a well-known family-owned restaurant in Chicago, operating since 1948. Located in the Bucktown neighborhood, it has built a solid reputation for serving classic American and Greek street food.</p>
            <ul className="flex">
              <li>
                <a href="#ff" >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </li>
              <li>
                <a href="#ff" >
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </li>
              <li>
                <a href="#ff" >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </li>
              <li>
                <a href="#ff" >
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </a>
              </li>
            </ul>
          </div>
         

        
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" >About</a></li>
                <li><a href="#" >Careers</a></li>
                <li><a href="#" >Press</a></li>
                <li><a href="#" >Partnerships</a></li>
                <li><a href="#" >Blog</a></li>
                <li><a href="#" >Affiliates</a></li>
              </ul>
            </div>
           </div>

          <div>
            <h3> Download TGF</h3> 
           <h1> <img src="https://s3-alpha-sig.figma.com/img/4715/c9ba/edd8f95fa60d60ae1186bd4c601f5df5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bfe1dkUcjYyyhXwv2mOhkV8u4UNX~IjX4JbN07icMFapof36w0DRCp2JTw2nOpwGoH~Ujv2WpFNIMOPevGFWf1l-nAMj-HKI4x5A8q3DlSV0f5kSkDbpmdxSIG9hGfrtpmvXcCaD278cBrl6fZmnFW9oO2UWjvF97LUSpG7BeMi9ioIZ8NK0G6--ISXgDFecy58IcsK~u2lCjN~bQvo4gpoVsr4Tk4uq6fIX4KmeKvfJzIhDtHwtm1FkwIjH0wXZKJvoeQWYwPkTnzkRTZGtzJZzA5WbDZVYulcZ2oc9176aUByYcXVvFOf22dBAFmcdjlo0Mz-NmVH68r9iPX4jcw__" alt="" />
           </h1><img src="https://s3-alpha-sig.figma.com/img/fd44/a730/0ebe1ca8ae8e92d6be08a70900fee2d6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A35fuXF8HoKEmKc~Xb0MGt9EfMVPzZFZc3Q-YQBO19GTQWhaD-bqTS7LQxOeuRoPG5O9NWrIuAXE4DKwN6qnOJ0AYeZC7qp1cvpR8f1tBQVBvTJdLFRewBOQS9etOp9hykNApH6LTHIFIuCzx9bjHOuBcNNhWSc9MjYM1NA249xtejf57Nj2jBL5wyZhLTpk1uSsV7vc4sIjYen5l3-M-ckqCASWDGlqzyHofsucyUIopOwBSC2dGKBOuuJBt~~Ug9DecLGUSCL4JCWR8kS3F81dYEWOdh5YqW0WitdAYvTqIquIDzrGrq5ntArrokbh4EftkkoAVKDkajsp6fyZBg__" alt="" />
            </div>
        </div> 
      </div>
     
    </footer>
               
       
    )
}

export default Footer;