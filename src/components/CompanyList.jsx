import UseFetch from "../components/UseFetch";
import { Link } from "react-router-dom";

const CompanyList = () => {
  const companys = UseFetch("http://localhost:3001/companys");
  return (
    <div>
      <ul className="list_company">
        {
          // data.days.map((day)=>{
          companys.map((company) => {

            return (
              <li key={company.id}>
                {/* Day {day.day} */}
                {/* <Link to={'/word/'+ day.day}> */}
                <div className="list_sub">
                  {company.name}
                  <br />
                  채용인원 : {company.num} 명<br />
                  채용직무 : {company.job}
                  <br />                  
                  기한 : {company.limit}
                  <div className="list_button">
                    <Link to={`/deleteCom/${company.id}`}> 삭제 </Link>
                    <Link to={`/modifyCom/${company.id}`}> 수정 </Link>
                  </div>
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default CompanyList;
