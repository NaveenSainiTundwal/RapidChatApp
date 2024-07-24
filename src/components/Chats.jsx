import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats=()=>{
    const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

//     return (
//         <div className='chats'>
//             <div className="userChat">
//             <img src='https://tse2.mm.bing.net/th?id=OIP.t8NO2dtMJyk3w_9Q8Ux_IAHaNK&pid=Api&P=0&h=180'></img>
//             <div className="userChatInfo">
//                 <span>abc</span>
//                 <p>hello</p>
//             </div>
//            </div>
//            <div className="userChat">
//             <img src='https://tse2.mm.bing.net/th?id=OIP.t8NO2dtMJyk3w_9Q8Ux_IAHaNK&pid=Api&P=0&h=180'></img>
//             <div className="userChatInfo">
//                 <span>abc</span>
//                 <p>hello</p>
//             </div>
//            </div>
//            <div className="userChat">
//             <img src='https://tse2.mm.bing.net/th?id=OIP.t8NO2dtMJyk3w_9Q8Ux_IAHaNK&pid=Api&P=0&h=180'></img>
//             <div className="userChatInfo">
//                 <span>abc</span>
//                 <p>hello</p>
//             </div>
//            </div>
//            <div className="userChat">
//             <img src='https://tse2.mm.bing.net/th?id=OIP.t8NO2dtMJyk3w_9Q8Ux_IAHaNK&pid=Api&P=0&h=180'></img>
//             <div className="userChatInfo">
//                 <span>abc</span>
//                 <p>hello</p>
//             </div>
//            </div>
           
//         </div>
//     )
// }

// export default Chats;
return (
    <div className="chats">
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
