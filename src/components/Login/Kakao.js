import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions} from "../../redux/modules/members";
// import { useNavigate } from "react-router-dom";

const KaKao = () => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  React.useEffect( () => {
    console.log(code)
     dispatch(userActions.kakaologin(code));
  }, []);

  return null;
};

export default KaKao;


// import React from "react";
// import { useDispatch } from "react-redux";
// import { actionCreators as userActions} from "../../redux/modules/members";
// // import { useNavigate } from "react-router-dom";

// const KaKao = (props) => {
//   const dispatch = useDispatch();

//   // 인가코드
//   let code = new URL(window.location.href).searchParams.get("code");

//   React.useEffect( () => {
//     console.log(code)
//      dispatch(userActions.kakaologin(code));
//   }, []);

//   return null;
// };

// export default KaKao;