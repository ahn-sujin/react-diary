import './write.css';

const Write = () => {
    return(
        <div className = "container">
            <div className="write_area">
                <p className="date">2022.7.24</p>
                <form>
                    <input className="title" type="text" placeholder="제목을 입력하세요"></input>
                    <textarea placeholder="내용을 입력하세요"></textarea>
                    <div class="input_area">
                        <input className="tag_name" type="text" placeholder="태그를 입력해주세요"></input>
                        <button className="btn btn_white">적용</button>
                    </div>
                    <div className="tag_wrap">
                        <div className="tag">테스트</div>
                    </div>
                    <button className="btn btn_black btn_lg">저장하기</button>
                </form>
            </div>
            
        </div>
    )
}

export default Write;