import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY } from "../../Config";

import MainImage from "./Sections/MainImage";

function LandingPage() {
  // const [] = useState()

  useEffect(() => {
    fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  });
  return (
    <div style={{ width: "100%", margin: 0 }}>
      {/* Movie main image */}
      <MainImage image="" title="" text="" />
    </div>
  );
}

export default LandingPage;
