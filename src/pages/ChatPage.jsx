import React, { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import Message from "../components/Message";

const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState();
  const lastMsg = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messagesCol = collection(db, "messages");

    await addDoc(messagesCol, {
      room,
      text: e.target[0].value,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });

    lastMsg.current.scrollIntoView({behavior: "smooth"})

    e.target.reset();
  };

  console.log(lastMsg);

  useEffect(() => {
   
    const messagesCol = collection(db, "messages");

    const q = query(
      messagesCol,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    onSnapshot(q, (snapshot) => {
   
      let tempMsg = [];

      
      snapshot.docs.forEach((doc) => tempMsg.push(doc.data()));
      console.log(tempMsg);

      setMessages(tempMsg);
    });
  }, []);

  console.log(auth);

  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Farklı Oda</button>
      </header>

      <main>
        {" "}
        {!messages ? (
          <p>Sohbete ilk mesajı gönderin</p>
        ) : (
          messages.map((data, i) => <Message data={data} key={i} />)
        )}

        <div ref={lastMsg}/>
      </main>

      <div className="out">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Mesajınızı yazınız..." required />
          <button>Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;