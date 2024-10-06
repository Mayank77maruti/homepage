import { Box, useTheme } from "@mui/material";
import React from "react";

const Contact = () => {
  const theme = useTheme();
  return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4198362675966!2d72.54141621502953!3d23.0380540849331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fb84b1a041%3A0xc1d6c6a5a1b9b5a3!2sNavratna%20Corporate%20Park!5e0!3m2!1sen!2sin!4v1721254426295!5m2!1sen!2sin"
        loading="lazy"
        style={{ border: "none", width: "100%", height: "300px", marginTop: "64px" }}
      ></iframe>
  );
};

export default Contact;
