import "./App.scss";
import { gsap } from "gsap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FooterMobile from "./components/Footer/FooterMobile";
import BlogPage from "./pages/BlogPage";
import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";
import {GraphQLClient, gql} from "graphql-request";

const graphcms = new GraphQLClient('https://api-us-west-2.hygraph.com/v2/clfww67h35r0z01unamij79uk/master');

const QUERY = gql`
{
  posts {
    id, 
    title, 
    slug,
    content {
      html
    }
    author {
      name, 
    }
    coverPhoto {
      url
    }
  }
}
`;

function App() {
  const [showPreloader, setShowPreloader] = useState(false);
  const [width, setWidth] = useState(0);
  const [posts, setPosts] = useState([]);

  let firstLoad = sessionStorage.getItem('firstLoad') !== null ? false : true;

  let animation = gsap.timeline();
 
  useEffect(() => {
    if(firstLoad) {
      sessionStorage.setItem('firstLoad', false);
      setShowPreloader(true);
    }

    const fetchPosts = async () => {
      const {posts} = await graphcms.request(QUERY);
      setPosts(posts);
    }
    const onPageLoad = () => {
      fetchPosts();
      setTimeout(() => {
        setShowPreloader(false);
      }, 1000);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } 
    else {
      window.addEventListener('load', onPageLoad);

      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  useEffect(() => {
    function setDimension() {
      setWidth(window.innerWidth);
    }

    setDimension();

    window.addEventListener('resize', setDimension);

    return () => window.removeEventListener('resize', setDimension);
  }, [width]);


  return (
    <BrowserRouter>
      <div className="App">
        {/*<div className="noise"></div>*/}
        <div className="wrapper">
          {showPreloader ? (
            <Preloader animation={animation} />
          ) : (
            <>
              <Header animation={animation} />
              <Routes>
                <Route path="/" element={<Home animation={animation} posts={posts}/>} />
                <Route path="/blog" element={<BlogPage />}/>
              </Routes>
              {width > 900 ? <Footer/> : <FooterMobile/>}
            </>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
