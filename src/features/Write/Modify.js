import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Tag from './components/Tag';

let nextId = 1;

const Modify = () => {
  const [tag, setTag] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/diary/${params.id}`)
      .then(res => res.json())
      .then(data => setTag(data));
  }, [params.id]);

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
    setTag(tag => tag.filter(tags => tags.id !== id));
  };

  return (
    <div className="container">
      <div className="write_area">
        <p>수정페이지</p>
        <p className="date" />
        <form>
          <input
            className="title"
            type="text"
            placeholder="제목을 입력하세요"
          />
          <textarea placeholder="내용을 입력하세요" />
          <Tag onInsertTag={onInsertTag} tag={tag} removeTag={removeTag} />
          <button className="btn btn_black btn_lg">수정하기</button>
        </form>
      </div>
    </div>
  );
};

export default Modify;
