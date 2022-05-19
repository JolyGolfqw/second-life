const initialState = {
  questionsAndAnswers: [
    {
      questions: "Сколько лет должно быть, чтобы взять питомца из приюта?",
      answer:
        "Что бы стать потенциальных хозяином наших питомцев, вы должны быть совершеннолетним.",
    },
  ],
  gallery: [{}],
  cartItems: [{}],
};

export const assetsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
