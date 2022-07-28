import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './detail.css';

const Detail = () => {
  const [diary, setDiary] = useState({
    date: '',
    title: '',
    contents: '',
    tag: [],
  });
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/diary/${params.id}`)
      .then(res => res.json())
      .then(data => setDiary(data));
  }, []);

  const { date, title, contents, tag } = diary;

  return (
    <div className="container">
      <div className="detail_area">
        <div className="box">
          <p className="date">{date}</p>
          <p className="title">{title}</p>
          <p className="contents">{contents}</p>
          <ul className="tag_wrap">
            {tag.map(tag => (
              <li key={tag.id} className="tag">
                {tag.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
