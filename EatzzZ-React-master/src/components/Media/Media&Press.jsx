import React from "react";
import MenuTitle from "../Titles/Title";
import "./.css";

function MediaPress() {
  const pressArray = [
    {
      id: 1,
      name: "trip",
      image:
        "https://www.emotel.nz/wp-content/uploads/2017/11/TripAdvisor-logo.png",
    },
    {
      id: 2,
      name: "Press Release 2",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/698px-Yelp_Logo.svg.png",
    },
    {
      id: 3,
      name: "Press Release 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa32cG9VNT9IpFL8nXz_xwQqsLTJTD9oL_iw&s",
    },
    {
      id: 4,
      name: "Press Release 4",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/85/Wgn_america_2010_logo.jpg",
    },
    {
      id: 5,
      name: "Press Release 5",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/WABC-TV-Logo-2021.png",
    },
    {
      id: 6,
      name: "Press Release 6",
      image:
        "https://res.cloudinary.com/polco-us/image/upload/v1615823082/publisher_profile_data/crains-chicago/primary_logo/dzeif79umxdjpxcf33qc.png",
    },
    {
      id: 7,
      name: "Press Release 7",
      image:
        "https://www.chicagotribune.com/wp-content/uploads/2023/12/2560px-Chicago_Tribune_Logo.svg-1.png",
    },
  ];

  const sliderStyles = {
    "--width": "200px",
    "--height": "200px",
  };

  return (
    <div className="container">
      <MenuTitle ph1="MEDIA &" ph2=" PRESS" />
      <h1> VIENNA BEEF “HALL OF FAME”</h1>
      Hot Dogs & Sausages Top-Rated Chicago-Style Hot Dogs. 
      We’ve been sited on :
      <main>
        <div className="slider1" style={sliderStyles}>
          <div className="list1">
            {pressArray.map((P) => (
              <div className="item1">
                <img src={P.image} alt="" className="img" />
              </div>
            ))} 
          </div>
        </div>
      </main>
    </div>
  );
}

export default MediaPress;
