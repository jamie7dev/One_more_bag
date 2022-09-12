import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions} from "../../redux/modules/user";
import { useNavigate } from "react-router-dom";

const Kakao = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let code = new URL(window.location.href).searchParams.get("code");
    // console.log(code);

    React.useEffect(async () => {
      await dispatch(userActions.kakaoLogin(code))
      navigate('/')}, []);
    

    return null;

}

export default Kakao;