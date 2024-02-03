import { useClipboard } from 'use-clipboard-copy';
import { useRef } from 'react';

import cardStyles from './link-card.module.css';
import copyIcon from '../../images/copy.png';

import { generatorUrl } from '../../utils/constants';

function LinkCard({counter, short, target}) {
    const clipboard = useClipboard();
    const shortRef = useRef(null);

    return (
        <article className={cardStyles.card}>
            <p className={`${cardStyles.link} ${cardStyles.linkFull}`}>{ target }</p>
            <div className={cardStyles.cell}>
                <p className={`${cardStyles.linkShort}`}
                    ref={shortRef}
                >
                    {`${generatorUrl}/${short}`}
                </p>
                <img alt='Иконка копирования' src={copyIcon} className={cardStyles.copyLogo}
                    onClick={ () => clipboard.copy(shortRef.current.textContent) }
                />
            </div>
            <p className={`${cardStyles.link} ${cardStyles.linkCounter}`}>{ counter }</p>
        </article>
    )
}

export default LinkCard;