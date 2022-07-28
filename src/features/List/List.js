import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './list.css';

const List = () => {
  const [diary, setDiary] = useState([]);

  const navigate = useNavigate();
  const goToDetail = id => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    fetch('http://localhost:4000/diary')
      .then(res => res.json())
      .then(data => setDiary(data));
  }, []);

  return (
    <div className="container">
      <ul className="list_area">
        {diary
          .map(data => (
            <li
              key={data.id}
              className="box"
              onClick={() => {
                goToDetail(data.id);
              }}
            >
              <p className="date">{data.date}</p>
              <p className="title">{data.title}</p>
              <p className="contents">{data.contents}</p>
              <ul className="tag_wrap">
                {data.tag.map(tag => (
                  <li key={tag.id} className="tag">
                    {tag.name}
                  </li>
                ))}
              </ul>
            </li>
          ))
          .reverse()}
      </ul>
    </div>
  );
};

export default List;
