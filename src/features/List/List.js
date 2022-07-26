import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './list.css';

const List = () => {
    const [ diary, setDiary ] = useState([]);

    const navigate = useNavigate();
    const goToDetail = () => {
        navigate('/detail');
    }

    useEffect(() => {
        fetch('http://localhost:4000/diary')
        .then(res => res.json())
        .then(data => setDiary(data));
    })

    return(
        <div className="container">
            <ul className="list_area">
                {diary.map((data) => (
                    <li className="box" onClick={goToDetail}>
                        <p className="date">{data.date}</p>
                        <p className="title">{data.title}</p>
                        <p className="contents">{data.contents}</p>
                        <ul className="tag_wrap">
                            {data.tag.map((tag) => (
                                <li className="tag">{tag.name}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>  
    )
}

export default List;