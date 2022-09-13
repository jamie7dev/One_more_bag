import React from "react";
// import { useDispatch } from "react-redux";
// import { actionCreators as userActions} from "../../redux/modules/members";
import { useNavigate } from "react-router-dom";
import { instance } from "../../shared/api";


const KaKao = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code)
  React.useEffect( () => {
    kakaologin(code)   
     
  }, []);

  const kakaologin = async (_code) => {
        try {
            const res = await instance.get(`api/member/kakao?code=${_code}`)   //백엔드로 인가코드 보내기
            
            localStorage.setItem("ACCESS_TOKEN", res.headers.authorization);
            localStorage.setItem("REFRESHTOKEN", res.headers.refreshtoken);
            console.log(res);
            alert('로그인 되었습니다.');                   
            navigate('/');          
          } catch (error) {
            console.log("카카오 로그인 실패")
        }
    }
  
  return console.log('kakao')
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