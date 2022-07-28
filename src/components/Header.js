import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
  const navigate = useNavigate();
  const goToList = () => {
    navigate('/');
  };
  const goToWrite = () => {
    navigate('/write');
  };

  return (
    <header>
      <div className="inner">
        <h1 className="logo" onClick={goToList}>
          일기장
        </h1>
        <button className="btn btn_white" onClick={goToWrite}>
          일기 쓰기
        </button>
      </div>
    </header>
  );
};

export default Header;
