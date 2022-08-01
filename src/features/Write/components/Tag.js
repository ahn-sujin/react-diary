import { useState } from 'react';

const Tag = ({ onInsertTag, tag }) => {
  const [tagName, setTagName] = useState('');

  const handleTagName = e => {
    setTagName(e.target.value);
  };

  const submitTagName = e => {
    e.preventDefault();
    onInsertTag(tagName);
    setTagName('');
  };

  return (
    <>
      <div className="input_area">
        <input
          className="tag_name"
          value={tagName}
          onChange={handleTagName}
          type="text"
          placeholder="태그를 입력해주세요"
        />
        <button className="btn btn_white" onClick={submitTagName}>
          적용
        </button>
      </div>
      <ul className="tag_wrap">
        {tag.map(list => (
          <li className="tag" key={list.id}>
            {list.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tag;
