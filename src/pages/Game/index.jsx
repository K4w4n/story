import { useEffect, useRef, useState } from "react";
import Message from "../../components/Message";
import OptionMsg from "../../components/OptionMsg";
import { MessageItem } from "./logic.js";
import history from "../../history";
import { ReactComponent as BackIcon } from "../../assets/back.svg";
import "./style.css";

export default function Game({ }) {

    const [currentPage, setCurrentPage] = useState(0);
    const [messageList, setMessageList] = useState([]);
    const [options, setOptions] = useState([]);
    const scrollableRef = useRef(null);
    const [optionId, setOptionId] = useState(0);
    const [currentStory, setCurrentStory] = useState(history["adventure"]);
    const [responsiveList, setResponsiveList] = useState(false);

    useEffect(handleScrollBottom, [messageList]);
    useEffect(effectLoadPage, [currentPage]);
    useEffect(effectChangeStory, [currentStory]);

    function handleScrollBottom() {
        scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }

    function effectLoadPage() {

        setMessageList((messageList) => {
            const { text, options } = currentStory["pages"][currentPage];
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
            setOptions(options);
            return newMsgList;
        });
    }

    function effectChangeStory() {
        setMessageList(() => []);
        setCurrentPage(0);
        effectLoadPage();
    }

    function handleOnChangeOption(e) {
        const optionId = e.target.value;
        setOptionId(optionId);
    }

    function handleSendOption() {
        const { nextPage, text } = options[optionId];
        const newMsg = new MessageItem("self", text);
        setMessageList((messageList) => [...messageList, newMsg]);
        setCurrentPage(nextPage);
    }

    function handleOnClickOpenList() {
        setResponsiveList(true);
    }
    function handleOnClickCloseList() {
        setResponsiveList(false);
    }

    return (
        <div className={`game-page ${responsiveList ? "responsive-list-open" : "responsive-list-close"}`}>
            <div className="game-list">

                <div className="game-page-header">
                    <button className="humbugger-responsive" onClick={handleOnClickCloseList}>
                        <BackIcon className="humbugger-responsive-icon" />
                    </button>
                    <h1 className="game-page-header-title">Lista de histórias</h1>
                </div>

                <div className="game-list-content">
                    {Object.values(history).map((story, index) => {

                        function handleOnClick() {
                            setCurrentStory(story);
                            setResponsiveList(false);
                        }

                        return (
                            <div
                                className="story-list-item"
                                onClick={handleOnClick}
                                key={index}>
                                {story.name}
                            </div>
                        );
                    })}
                </div>

            </div>
            <div className="game-content">

                <div className="game-page-header">
                    <button className="humbugger-responsive" onClick={handleOnClickOpenList}>
                        <BackIcon className="humbugger-responsive-icon" />
                    </button>
                    <h1 className="game-page-header-title">{currentStory.name}</h1>
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
        </div>
    );
}