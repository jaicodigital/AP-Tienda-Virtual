import React from "react";
import Announcement from "../components/announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

export default function Home() {
  return (
     <div>
         <Announcement />
         <Navbar />
         <Slider/>
     </div>
  )
}
