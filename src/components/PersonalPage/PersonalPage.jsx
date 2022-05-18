import React from "react";
import style from "./personalPage.module.css";
// РАЗБИТЬ ВСЕ НА КОМПОНЕНТЫ, СЛИШКОМ БОЛЬШОЙ КОД
const PersonalPage = () => {
  const user = [
    {
      img: "https://99px.ru/sstorage/1/2018/06/image_11406181057461083713.gif",
      name: "Назиров Расул",
      email: "nazirov@mail.ru",
      number: "+7(929)889-63-54",
      address: "г.Грозный, ул.Трошева 7",
      age: 24,
      status: "Догситтер",
      description:
        "Lorem ipsum merol lofe tesket masks oppos tesla memento ipsum orem ipsum merol lofe tesket masks oppos tesla memento ipsum. Lorem ipsum merol lofe tesket masks oppos tesla memento ipsum orem ipsum ipsum merol lofe tesket masks oppos tesla memento ipsum orem ipsum merol lofe tesket masks oppos tesla memento ipsum. Lorem ipsum merol lofe tesket masks oppos tesla memento ipsum orem ipsum",
    },
  ];
  return (
    <>
      <div className={style.mainTitlePersonalPage}>Мой профиль</div>
      <div className={style.personalPagePosition}>
        {user.map((item, index) => {
          return (
            <div className={style.card} key={index}>
              <div className={style.cardImg}>
                <img src={item.img} alt="avatar"></img>
              </div>
              <div className={style.cardInfo}>
                <div className={style.personalName}>{item.name}</div>
              </div>
              <div className={style.textInfo}>{`Email: ${item.email}`}</div>
              <div className={style.textInfo}>{`Телефон: ${item.number}`}</div>
              <div className={style.textInfo}>{`Адрес: ${item.address}`}</div>
              <div
                className={style.textInfo}
              >{`${item.status}, ${item.age} года`}</div>
              <div className={style.textBody}>
                {`Обо мне: ${item.description}`}
              </div>
              <hr />
            </div>
          );
        })}
        <div className={style.commentPostAndRead}>
          <div className={style.commentPostBox}>
            <textarea placeholder="Добавить отзыв..." rows="4"></textarea>
            <button>Добавить</button>
          </div>

          {/*READ COMMENT*/}
          <div className={style.commentReadBox}>
            <div className={style.commentModelRender}>
              <div className={style.commentRenderHeader}>
                <div className={style.commentImage}>
                  <img
                    src="https://99px.ru/sstorage/1/2018/06/image_11406181057461083713.gif"
                    alt="avatarka"
                  ></img>
                </div>
                <div className={style.commentNameAndDataAndButton}>
                  <div className={style.commentNameAndData}>
                    <div className={style.commentName}>Rasul Nazirov</div>
                    <div className={style.commentData}>19.05.2022</div>
                  </div>

                  <button>
                    <ion-icon name="trash-outline"></ion-icon>
                  </button>
                </div>
              </div>
              <div className={style.commentRenderBody}>
                <div className={style.commentText}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatem rerum odit ipsam dolore quaerat doloremque minus
                  consectetur, harum, cumque neque nemo odio animi ad illo
                  molestias obcaecati accusamus? Impedit, maxime!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalPage;
