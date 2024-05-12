import { useState } from "react";
import styles from "./chat.module.scss";

const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className={styles.chat}>
      <div className={styles.messages}>
        <h2>Messages</h2>
        <div className={styles.message}>
          <img src="/images/Malick.jpg" alt="user" />
          <span>Malick</span>
          <p>Lorem ipsum dolor...</p>
        </div>
        <div className={styles.message}>
          <img src="/images/Malick.jpg" alt="user" />
          <span>Malick</span>
          <p>Lorem ipsum dolor...</p>
        </div>
        <div className={styles.message}>
          <img src="/images/Malick.jpg" alt="user" />
          <span>Malick</span>
          <p>Lorem ipsum dolor...</p>
        </div>
        <div className={styles.message}>
          <img src="/images/Malick.jpg" alt="user" />
          <span>Malick</span>
          <p>Lorem ipsum dolor...</p>
        </div>
        <div className={styles.message}>
          <img src="/images/Malick.jpg" alt="user" />
          <span>Malick</span>
          <p>Lorem ipsum dolor...</p>
        </div>
      </div>
      {chat && (
        <div className={styles.chatBox}>
          <div className={styles.top}>
            <div className={styles.user}>
              <img src="/images/Malick.jpg" alt="user" />
              Malick
            </div>
            <div className={styles.close} onClick={() => setChat(false)}>
              X
            </div>
          </div>
          <div className={styles.center}>
            <div className={styles.chatMessage}>
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
            <div className={`${styles.chatMessage} ${styles.own}`}>
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
            <div className={styles.chatMessage}>
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
            <div className={`${styles.chatMessage} ${styles.own}`}>
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
            <div className={styles.chatMessage}>
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className={styles.bottom}>
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
