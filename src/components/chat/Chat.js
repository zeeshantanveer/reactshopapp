import React, {useEffect, useState} from 'react';
import { ChatEngine, getOrCreateChat ,ChatList, ChatCard, NewChatForm,
    ChatFeed, ChatHeader, IceBreaker, MessageBubble, IsTyping, ConnectionBar, NewMessageForm,
    ChatSettings, ChatSettingsTop, PeopleSettings, PhotosSettings, OptionsSettings} from 'react-chat-engine';
import Jumbotron from "../alements/Jumbotron";

const Chat = () => {

    const [username, setUsername] = useState('');

    useEffect(() => {

    },[]);
    function createDirectChat(creds) {
        getOrCreateChat(
            creds,
            { is_direct_chat: true, usernames: [username] },
            () => setUsername('')
        )
    }
    function renderChatForm(creds) {
        return (
            <>
                {/*<Jumbotron page="Chatroom" icon="restaurant" />*/}
                <div className="row">
                    <div className="col-md-12">
                        <div className="pt-5">
                            <input
                                placeholder='Username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <button onClick={() => createDirectChat(creds)}>
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div>
            <ChatEngine
                height='100vh'
                projectID='4261eea6-c4bc-4ae0-adb6-58e0548afdd5'
                userName='zeeshantanveer'
                userSecret='pass1234'
                renderNewChatForm={(creds) => renderChatForm(creds)}
                // Customize UI
                renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
                renderChatCard={(chat, index) => <ChatCard key={`${index}`} chat={chat} />}
                renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
                renderChatHeader={(chat) => <ChatHeader />}
                renderIceBreaker={(chat) => <IceBreaker />}
                renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => <MessageBubble lastMessage={lastMessage} message={message} nextMessage={nextMessage} chat={chat} />}
                renderSendingMessage={(creds, chat, lastMessage, message, nextMessage) => <MessageBubble sending={true} lastMessage={lastMessage} message={message} nextMessage={nextMessage} chat={chat} />}
                renderIsTyping={(typers) => <IsTyping />}
                renderConnectionBar={(chat) => <ConnectionBar />}
                renderNewMessageForm={(creds, chatID) => <NewMessageForm />}
                renderChatSettings={(chatAppState) => <ChatSettings {...chatAppState} />}
                renderChatSettingsTop={(creds, chat) => <ChatSettingsTop />}
                renderPeopleSettings={(creds, chat) => <PeopleSettings />}
                renderPhotosSettings={(chat) => <PhotosSettings />}
                renderOptionsSettings={(creds, chat) => <OptionsSettings />}
            />
        </div>
    );
};

export default Chat;
