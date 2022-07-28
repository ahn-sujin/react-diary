import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './write.css';

const Write = () => {
    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2,'0');
    const date = String(new Date().getDate()).padStart(2,'0');

    const [write, setWrite] = useState({
        date: `${year}.${month}.${date}`,
        title : '',
        contents: ''
    });
    const [tag, setTag] = useState([]);

    const navigate = useNavigate();
    const goToList = () => {
        navigate('/');
    }

    const postTitle = (e) => {
        console.log(e.target.value);
    };
    const postContents = (e) => {
        console.log(e.target.value);
    };

    const diarySave = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/diary',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                date: write.date, 
                title: write.title,
                contents: write.contents,
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
                <p className="date">{write.date}</p>
                <form>
                    <input className="title" onChange={postTitle} value={write.title} name="title" type="text" placeholder="제목을 입력하세요"></input>
                    <textarea placeholder="내용을 입력하세요" onChange={postContents} value={write.contents} name="contents"></textarea>
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