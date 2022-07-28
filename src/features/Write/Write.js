import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './write.css';

const Write = () => {
    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2,'0');
    const day = String(new Date().getDate()).padStart(2,'0');

    const [date, setDate] = useState( `${year}.${month}.${day}`);
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [tag, setTag] = useState([]);

    const navigate = useNavigate();
    const goToList = () => {
        navigate('/');
    }

    const diarySave = (e) => {
        e.preventDefault();

        fetch('http://localhost:4000/diary',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                date: date,
                title: title,
                contents: contents,
                tag: tag
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res){
                alert('일기가 등록 되었습니다.');
                goToList();
            }
        })
    }

    return(
        <div className = "container">
            <div className="write_area">
                <p className="date">{date}</p>
                <form>
                    <input 
                        className="title" 
                        onChange={(e) => setTitle(e.target.value)} 
                        value={title} 
                        name="title" 
                        type="text" 
                        placeholder="제목을 입력하세요" />
                    <textarea 
                        onChange={(e) => setContents(e.target.value)} 
                        value={contents} 
                        name="contents"
                        placeholder="내용을 입력하세요" />
                    <div className="input_area">
                        <input className="tag_name" type="text" placeholder="태그를 입력해주세요"></input>
                        <button className="btn btn_white">적용</button>
                    </div>
                    <div className="tag_wrap">
                        <div className="tag">테스트</div>
                    </div>
                    <button className="btn btn_black btn_lg" onClick={diarySave}>저장하기</button>
                </form>
            </div>
            
        </div>
    )
}

export default Write;