import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UseFetch from "./UseFetch";
import { useRef } from "react";

const CreateCompany = () => {
    const companys = UseFetch("http://localhost:3001/companys");
    const history = useHistory();

    const nameRef = useRef(null);
    const numRef = useRef(null);

    const jobRef = useRef(null);
    const limitRef = useRef(null);

    const onSubmit = (e)=>{
        e.preventDefault();
        fetch("http://localhost:3001/companys",{
            method: "POST",//데이터 추가
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                name: nameRef.current.value,
                num: numRef.current.value,
                job: jobRef.current.value,
                limit: limitRef.current.value,
                // isDone: false,
            }),
        }). then(res=>{
            if(res.ok){
                alert("채용 공지가 잘 추가되었습니다 !!");
                //단어를 ? day에 추가하고 해당 ?day로 이동하는 코드
                history.push(`/`);
            }
        })
    }

    return (
        <>
        <form onSubmit={onSubmit} className="createForm">
            <div className="input_area">
                <label>회사 이름</label>
                <input type="text" placeholder="삼성전자" ref={nameRef} name="name" />
            </div>
            <div className="input_area">
                <label>채용인원</label>
                <input type="text" placeholder="3" ref={numRef} name="num"/>
            </div>
            <div className="input_area">
                <label>채용직무</label>
                <input type="text" placeholder="개발자" ref={jobRef} name="job" />
            </div>
            <div className="input_area">
                <label>기한</label>
                <input type="text" placeholder="2000.11.22" ref={limitRef} name="limit"/>
            </div>
            <button>저장</button>

        </form>
        </>
    )
}
export default CreateCompany;