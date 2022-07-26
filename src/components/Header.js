import './header.css';

const Header = () => {
    return(
        <header>
            <div className="inner">
                <h1 className="logo">일기장</h1>
                <button className="btn btn_white">일기 쓰기</button>
            </div>  
        </header>
    )
}

export default Header;