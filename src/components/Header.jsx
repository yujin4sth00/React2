import { Link } from 'react-router-dom';

const Header = () =>{
    return (
        <div className='header'>
            <h1><a href='/'  className="header">소융과 채용 공지 싸이트</a></h1>
            <div className="menu">
            <Link to="/createcompany"  className="link">회사추가
            </Link>
            </div>
          
        </div>
    )
}
export default Header;