import "./App.css";
import { useState } from "react";
function App() {
  let [person, setPerson] = useState("");
  const [comment, setComment] = useState("");
  let [commentList] = useState([]);
  let [str, setStr] = useState("暂无评论，快去评论吧");
  function addText() {
    commentList.push({
      person: person,
      comment: comment,
    });
    let string = "";
     string = commentList.map((item) => {
      return `<p>评论人: ${item.person}</p>
                <p>评论内容：${item.comment}</p>
        `;
    });
    setStr(string);
  }
  function inputPerson(e) {
    setPerson(e.target.value);
  }
  function inputComment(e) {
    setComment(e.target.value);
  }
  return (
    <div className="mainApp">
      <input className="topInput" placeholder="请输入评论人" value={person} onChange={inputPerson} />
      <br />
      <textarea className="myTextarea" rows="18" placeholder="请输入评论内容" value={comment} onChange={inputComment} />
      <button onClick={addText} className="btn">
        发表评论
      </button>
      <div className="text" dangerouslySetInnerHTML={{ __html: str }}></div>
    </div>
  );
}
export default App;
