import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadFundraisings } from "../../redux/features/fundraising";
import style from "./fundraising.module.css";

const FundraisingCard = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadFundraisings())
  }, [dispatch])

  const fundraisings = useSelector(state => state.fundraising.items)
  console.log(fundraisings)
  return (
    <>
    <Link to="/fundraising-page-form"><Button>Добавить сбор</Button></Link>

    {fundraisings.map(item => {
      return(

    <div className={style.wrapper}>
      <div className={style.imageWrapper}>
        <img
          src={`http://localhost:4000/${item.image}`}
          alt="photo"
        />
      </div>
      <div className={style.infoWrapper}>
        <div className={style.title}>
          <h4>{item.title}</h4>
          <h6>
            Сумма сбора: <span>{item.amount}</span>
          </h6>
        </div>
        <p>
          {item.description}
        </p>
        <div className={style.shelter}>
          <div className={style.shelterAvatar}>
            <img
              src="https://vos-mo.ru/upload/iblock/220/Priyuty.jpg"
              alt="shelterAvatar"
            />
          </div>
          <div className={style.shelterInfo}>
            <p>
              Получатель: <span id={style.shelter}>Приют 1</span>
            </p>
            <p>
              Размещено <span>16.05.2022</span>
            </p>
          </div>
        </div>
				<div className={style.left}>
					<p>Осталось 5 дней 17 часов 47 минут</p>
					<button>Помочь</button>
				</div>
      </div>
    </div>
      )
    })}
    </>
  );
};

export default FundraisingCard;
