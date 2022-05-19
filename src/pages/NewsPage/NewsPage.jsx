import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import News from "../../components/News/News";

export default function NewsPage() {
  return (
    <>
      <Link to='/news-form'>
        <Button>Добавить новость</Button>
      </Link>
      <News />
    </>
  );
}
