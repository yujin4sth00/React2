import { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ModifyCom=() =>{

    const history = useHistory();
    const {id} = useParams();
    console.log('id : ' + id);
       
    //const companyInfo = UseFetch('http://localhost:3001/companys/');

    const [name, setName] = useState(null);
    const [num, setNum] = useState(null);
    const [job, setJob] = useState(null);
    const [limit, setLimit] = useState(null);

    useEffect(()=>{
        console.log('UseFetch() 이용 json 서버로 정보를 가져오기!!');
        fetch('http://localhost:3001/companys/'+id)
            .then((res)=>{               
                return res.json();//res 를 json 형식으로 변환
            })
            .then((res)=>{
                // console.log(res);
                setName(res.name);        
                setNum(res.num);        
                setJob(res.job);        
                setLimit(res.limit);     
            })
    },[]);



    const onSubmit = (e)=>{
        e.preventDefault();
        fetch("http://localhost:3001/companys/"+id,{
            method: "PUT",//데이터 수정
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                name:name,
                num:num,
                job:job,
                limit: limit,
            }),
        }). then(res=>{
            if(res.ok){
                alert("회사정보가 잘 수정되었습니다 !!");
                //단어를 ? day에 추가하고 해당 ?day로 이동하는 코드
                history.push(`/`);
            }
        })
    }


    return (
        <div>
            <article>
                <h2>데이터 수정</h2>
                <form 
                    action="/update_process"
                    method="post"
                    onSubmit={onSubmit}
                >

                    <p className="input_area">
                        <label>회사 이름</label>
                        <input 
                            type="text" 
                            name="name"                             
                            //input 태그의 초기치는 value 속성 설정
                            value={name||""}                         
                            //onChange() 
                            onChange={(e)=>{
                                setName(e.target.value);                                
                            }}
                        ></input>

                    </p>
                    <p className="input_area">
                        <label>채용 인원</label>
                        <input 
                            type="text" 
                            name="num" 
                            //input 태그의 초기치는 value 속성 설정
                            value={num||""}                         
                            onChange={(e)=>{
                                setNum(e.target.value);
                            }}
                         />
                    </p>
                    <p className="input_area">
                        <label>채용 직무</label>
                        <input 
                            type="text" 
                            name="job"                             
                            value={job|| ""}
                            onChange={(e)=>{
                                setJob(e.target.value);
                            }}
                         />
                    </p>
                    <p className="input_area">
                        <label>기한</label>
                        <input 
                            type="text" 
                            name="limit"                             
                            value={limit||""}
                            //onChange() 
                            onChange={(e)=>{
                                setLimit(e.target.value);                             
                            }}
                         />
                    </p>
                    
                    <p>
                        <input className="button" type="submit" value="제출"></input>
                    </p>

                </form>
            </article>

        </div>
    )
}
export default ModifyCom;