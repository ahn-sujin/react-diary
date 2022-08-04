import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Tag from './components/Tag';
import './write.css';

let nextId = 1;

const Write = () => {
  const navigate = useNavigate();
  const goToList = () => {
    navigate('/');
  };

  const year = new Date().getFullYear();
  const month = String(new Date().getMonth() + 1).padStart(2, '0');
  const day = String(new Date().getDate()).padStart(2, '0');

  const [write, setWrite] = useState({
    date: '',
    title: '',
    contents: '',
  });
  const [tag, setTag] = useState([]);

  useEffect(() => {
    setWrite(prev => ({ ...prev, date: `${year}.${month}.${day}` }));
  }, []);

  const handleInput = e => {
    const { name, value } = e.target;
    setWrite(prev => ({ ...prev, [name]: value }));
  };

  const diarySave = e => {
    e.preventDefault();

    fetch('http://localhost:4000/diary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: write.date,
        title: write.title,
        contents: write.contents,
        tag: tag,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res) {
          alert('일기가 등록 되었습니다.');
          goToList();
        }
      });
  };

  const onInsertTag = name => {
    if (name === '') {
      return;
    } else {
      const tagList = {
        id: nextId,
        name,
      };
      setTag(tag => tag.concat(tagList));
      nextId++;
    }
  };

  const removeTag = id => {
    setTag(tag => tag.filter(tags => tags.id !== id)); //tag의 id가 인자로 받아온 id와 일치하지 않는 것들만 남겨둔다.
  };

  return (
    <div className="container">
      <div className="write_area">
        <p className="date">{write.date}</p>
        <form>
          <input
            className="title"
            onChange={handleInput}
            value={write.title}
            name="title"
            type="text"
            placeholder="제목을 입력하세요"
          />
          <textarea
            onChange={handleInput}
            value={write.contents}
            name="contents"
            placeholder="내용을 입력하세요"
          />
          <Tag onInsertTag={onInsertTag} tag={tag} removeTag={removeTag} />
          <button className="btn btn_black btn_lg" onClick={diarySave}>
            저장하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Write;
