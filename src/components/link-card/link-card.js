import cardStyles from './link-card.module.css';
import copyIcon from '../../images/copy.png';

function LinkCard() {
    return (
        <article className={cardStyles.card}>
            <p className={`${cardStyles.link} ${cardStyles.linkFull}`}>EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTISCAEQABhDGIMBGLEDGIAEGIoFMg0IAhAAGIMBGLEDGIAEMg0IAxAAGIMBGLEDGIAEMg0IBBAAGIMBGLEDGIAEMg0IBRAAGIMBGLEDGIAEMgwIBhAAGEMYgAQYigUyBwgHEAAYgAQyDQgIEAAYgwEYsQMYgAQyBwgJEAAYjwKoAgCwAgA</p>
            <div className={cardStyles.cell}>
                <p className={`${cardStyles.linkShort}`}>EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTISCAEQABhDGIMBGLEDGIAEGIoFMg0IAhAAGIMBGLEDGIAEMg0IAxAAGIMBGLEDGIAEMg0IBBAAGIMBGLEDGIAEMg0IBRAAGIMBGLEDGIAEMgwIBhAAGEMYgAQYigUyBwgHEAAYgAQyDQgIEAAYgwEYsQMYgAQyBwgJEAAYjwKoAgCwAgA</p>
                <img alt='Иконка копирования' src={copyIcon} className={cardStyles.copyLogo} />
            </div>
            <p className={`${cardStyles.link} ${cardStyles.linkCounter}`}>0</p>
        </article>
    )
}

export default LinkCard;