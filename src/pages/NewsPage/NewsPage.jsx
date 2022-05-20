import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import News from "../../components/News/News";
import Footer from '../../components/Footer/Footer'

export default function NewsPage() {
  return (
    <>
      {/* <Link to='/news-form'>
        <Button>Добавить новость</Button>
      </Link> */}
      <Header/>
      <News />
      <Footer/>
    </>
  );
}
