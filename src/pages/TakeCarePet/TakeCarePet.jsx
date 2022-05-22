import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TakeCarePetCard from "../../components/TakeCarePetCard/TakeCarePetCard";
import { loadpetsKeeping } from '../../redux/features/petsKeeping'
import style from './takeCarePet.module.css'

const TakeCarePet = () => {

	const dispatch = useDispatch();

	const pets = useSelector(state => state.petsKeeping.items);
	const loading = useSelector(state => state.petsKeeping.loading)
	console.log(pets);

	useEffect(() => {
		dispatch(loadpetsKeeping())
	}, [dispatch])

  return (
    <>
      <Header />
      <div className={style.petCardsWrapper}>
        {pets.map((element) => {
					return <TakeCarePetCard element={element} key={element._id} />
				})}
      </div>
      <Footer />
    </>
  );
};

export default TakeCarePet;
