import React from 'react';
import { Box } from 'grommet';

const LinkCard = ({ imgSrc, info, buttonText, buttonLink, buttonColor }) => (
    <div className="c-card u-p-medium u-text-center u-mb-medium" data-mh="landing-cards" style={{ height: '100%' }}>
        <Box fill direction="column" justify="between" >
            <div>
                <img className="u-mb-small" style={{ height: '100px' }} src={imgSrc} />
                <h4 className="u-h6 u-text-bold u-mb-small">
                    {info}
                </h4>
            </div>
            <a className={`c-btn c-btn--${buttonColor}`} href={buttonLink}>{buttonText}</a>
        </Box>
    </div>
)

export default LinkCard;
