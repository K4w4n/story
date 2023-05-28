import { useEffect, useRef, useState } from "react";
import Message from "../../components/Message";
import OptionMsg from "../../components/OptionMsg";
import { MessageItem } from "./logic.js";
import history from "../../history";
import "./style.css";

export default function Game({ }) {

    const [currentPage, setCurrentPage] = useState(0);
    const [messageList, setMessageList] = useState([]);
    const [options, setOptions] = useState([]);
    const scrollableRef = useRef(null);
    const [optionId, setOptionId] = useState(0);

    const pageList = history["adventure"];

    useEffect(handleScrollBottom, [messageList]);
    useEffect(effectLoadPage, [currentPage]);

    function handleScrollBottom() {
        scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }

    function effectLoadPage() {
        const { text, options } = pageList[currentPage];
        const newMsgList = [...messageList];
        if (Array.isArray(text)) {
            text.forEach(text => {
                const newMsg = new MessageItem("bot", text);
                newMsgList.push(newMsg);
            });
        } else {
            const newMsg = new MessageItem("bot", text);
            newMsgList.push(newMsg);
        };
        setMessageList(newMsgList);
        setOptions(options);
    }

    function handleOnChangeOption(e) {
        const optionId = e.target.value;
        setOptionId(optionId);
    }

    function handleSendOption() {
        const { nextPage, text } = options[optionId];
        const newMsg = new MessageItem("self", text);
        setMessageList([...messageList, newMsg]);
        setCurrentPage(nextPage);
    }

    return (
        <div className="game-page">

            <div className="game-page-header">
                <h1 className="game-page-header-title">Chat do game</h1>
            </div>

            <div className="game-page-chat" ref={scrollableRef}>

                {messageList.map(({ sender, content }, index) => (
                    <Message
                        isPlayer={sender === "self"}
                        key={index}>
                        {content.split("\n").map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </Message>

                ))}

                {options ? <Message isPlayer={true}>

                    {options.map(({ text, nextPage }, index) => (
                        <OptionMsg
                            value={index}
                            onChange={handleOnChangeOption}
                            name="action"
                            key={index}
                        >{text}</OptionMsg>
                    ))}
                    <button
                        className="btn-send-action"
                        onClick={handleSendOption}>Enviar</button>
                </Message> : null}

            </div>
        </div>
    );
}