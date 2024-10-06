import Layout from "../components/Layout";
import Hero from "../sections/Hero";
import Home from "../sections/Home";
import Services from "../sections/Services";

import Gallery from "../sections/Gallery";
import Reviews from "../sections/Reviews";
import Contact from "../sections/Contact";
import { useEffect } from "react";

export default function Landing() {
    
    return (
        <body translate="no">
        <Layout>
            <Home />
            {/* <Hero /> */}
            <Services />
            
            <Gallery />
            <Reviews />
            <Contact />
        </Layout>
        </body>
    );
}
