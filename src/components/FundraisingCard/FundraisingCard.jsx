import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadFundraisings } from "../../redux/features/fundraising";
import style from "./fundraising.module.css";
import FundraisingCardRender from "./FundraisingCardRender";
import FundraisingSidebar from "./FundraisingSidebar";

const FundraisingCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFundraisings());
  }, [dispatch]);

  const fundraisings = useSelector((state) => state.fundraising.items);
  console.log(fundraisings);
  return (
    <>
      <div className={style.wrapperPosition}>
        <div className={style.wrapperMainTitle}>Сборы для нужд приютов</div>

        <div className={style.wrapperFlex}>
          <FundraisingSidebar />
          <div className={style.sidebarMirahz}></div>
          <div className={style.wrapperBox}>
            {fundraisings.map((item, index) => {
              return (
                <FundraisingCardRender
                  image={item.image}
                  title={item.title}
                  amount={item.amount}
                  description={item.description}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* <Link to="/fundraising-page-form">
        <Button>Добавить сбор</Button>
      </Link> */}
    </>
  );
};

export default FundraisingCard;
