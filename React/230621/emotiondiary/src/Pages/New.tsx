import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";
import Header from "../Component/Header";

const New = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <div>
      <Header title={"새 일기 쓰기"} leftChild={<Button text={"<뒤로가기"} onClick={goBack}/>}/>
    </div>
  )
}

export default New;
