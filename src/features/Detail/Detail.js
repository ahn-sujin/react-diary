import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './detail.css';

const Detail = () => {
  const [diary, setDiary] = useState({
    date: '',
    title: '',
    contents: '',
    tag: [],
  });

  const params = useParams();
  const navigate = useNavigate();
  const goToList = () => {
    navigate('/');
  };

  useEffect(() => {
    fetch(`http://localhost:4000/diary/${params.id}`)
      .then(res => res.json())
      .then(data => setDiary(data));
  }, [params.id]);

  const { date, title, contents, tag } = diary;

  const onDelete = () => {
    fetch(`http://localhost:4000/diary/${params.id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(res => {
        if (res) {
          alert('삭제하시겠습니까?');
          setDiary({ id: 0 });
          goToList();
        }
      });
  };

  if (diary.id === 0) {
    return null;
  }

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
        <button className="btn btn_black btn_lg" onClick={onDelete}>
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default Detail;
