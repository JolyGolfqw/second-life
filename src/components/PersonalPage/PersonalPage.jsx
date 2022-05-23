import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./personalPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addRating, loadUsers } from "../../redux/features/users";
import StarRating from "../StarRating/StarRating";
import { addComment, loadComments } from "../../redux/features/comments";
// РАЗБИТЬ ВСЕ НА КОМПОНЕНТЫ, СЛИШКОМ БОЛЬШОЙ КОД
const PersonalPage = () => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('')

  const handleChangeText = (e) => setText(e.target.value)

  // const user = [
  //   {
  //     img: "https://99px.ru/sstorage/1/2018/06/image_11406181057461083713.gif",
  //     name: "Назиров Расул",
  //     email: "nazirov@mail.ru",
  //     number: "+7(929)889-63-54",
  //     address: "г.Грозный, ул.Трошева 7",
  //     age: 24,
  //     status: "Догситтер",
  //     description:
  //       "Lorem ipsum merol lofe tesket masks oppos tesla memento ipsum orem ipsum merol lofe tesket masks oppos tesla memento ipsum. Lorem ipsum merol lofe tesket masks oppos tesla memento ipsum orem ipsum ipsum merol lofe tesket masks oppos tesla memento ipsum orem ipsum merol lofe tesket masks oppos tesla memento ipsum. Lorem ipsum merol lofe tesket masks oppos tesla memento ipsum orem ipsum",
  //   },
  // ];

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadComments())
  }, [dispatch]);

  const addStars = (stars) => {
    // setRating(stars)
    console.log(rating)
    // dispatch(addRating(rating, id))
    // console.log(text, id, id)
    dispatch(addComment(text, "628a16d88ffc2f590c6b1360", "628a16d88ffc2f590c6b1360"))
  }

  const users = useSelector((state) => state.users.items);
  const comments = useSelector((state) => state.comments.items)

  return users.map((item, index) => {
    const currentRating = item.rating && item.rating.reduce((a, b) => a + b, 0) / item.rating.length
    console.log(currentRating)
    if (item._id === id) {
      return (
        <>
          <Header />
          <div className={style.mainTitlePersonalPage}>Мой профиль</div>
          <div className={style.personalPagePosition}>
           
                <div className={style.card} key={index}>
                  <div className={style.cardImg}>
                    <img src={item.avatar ? `http://localhost:4000/${item.avatar}` : 'http://localhost:4000/images/fa174b369e114c428c0601cb64369c85.jpg'} alt="avatar"></img>
                  </div>
                  <div className={style.cardInfo}>
                    <div className={style.personalName}>{item.name}</div>
                  </div>
                  <div className={style.textInfo}>{`Email: ${item.email}`}</div>
                  <div
                    className={style.textInfo}
                    >{`Телефон: ${item.number}`}</div>
                  <div
                    className={style.textInfo}
                    >{`Адрес: ${item.address}`}</div>
                  <div
                    className={style.textInfo}
                    >{`${item.status}, ${item.age} года`}</div>
                  <div className={style.textBody}>
                    {`Обо мне: Админ вукх`}
                  </div>
                  <hr />
                </div>
  
            <div className={style.commentPostAndRead}>
            <StarRating numTotalStars="5"  rating={rating} setRating={setRating} currentRating={currentRating}/>
              <div className={style.commentPostBox}>
                <textarea value={text} onChange={(e) => handleChangeText(e)} placeholder="Добавить отзыв..." rows="4"></textarea>
                <button onClick={() => addStars(currentRating)}>Добавить</button>
              </div>

        {comments.map(comment => {
          if (item._id === comment.addressee) {
            const author = users.find(i => i._id === comment.author)
            return (              
              <div className={style.commentReadBox}>
                <div className={style.commentModelRender}>
                  <div className={style.commentRenderHeader}>
                    <div className={style.commentImage}>
                      <img
                        src={author.avatar ? `http://localhost:4000/${author.avatar}` : "https://99px.ru/sstorage/1/2018/06/image_11406181057461083713.gif"}
                        alt="avatarka"
                      ></img>
                    </div>
                    <div className={style.commentNameAndDataAndButton}>
                      <div className={style.commentNameAndData}>
                        <div className={style.commentName}>{author.name}</div>
                        <div className={style.commentData}>{comment.date}</div>
                      </div>

                      <button>
                        <ion-icon name="trash-outline"></ion-icon>
                      </button>
                    </div>
                  </div>
                  <div className={style.commentRenderBody}>
                    <div className={style.commentText}>
                      {comment.text}
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })}
            </div>
          </div>
          <Footer />
        </>
      );
    }
  });
};

export default PersonalPage;
