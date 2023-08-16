import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const DeleteCom = () => {
  const history = useHistory();
  const { id } = useParams();
  console.log("id : " + id);

  if (window.confirm("정말삭제하시겠습니까?")) {
    fetch("http://localhost:3001/companys/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        history.push("/"); //메인으로 이동
      }
    });
  } else {
    history.push("/"); //메인으로 이동
  }

  return <div></div>;
};
export default DeleteCom;
