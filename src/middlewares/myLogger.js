const myLogger = store => next => action => {
  console.log(action);
  console.log('\tPrev: ', store.getState());
  const result = next(action); // 다음 미들웨어, 혹은 리듀서에게 전달
  console.log('\tNext: ', store.getState());
  return result; // 반환하는 값은 컨테이너에서 디스패치 되었을 때, 반환되는 값
};

export default myLogger;
