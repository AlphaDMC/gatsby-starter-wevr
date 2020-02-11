import React from 'react';
import { Footer, Anchor, Text } from 'grommet';


const CustomFooter = () => (
    <Footer pad="medium">
        <Text>
            <p className="wevr-text">
                *The command to run storybook is 'yarn storybook'
      </p>
        </Text>
        <Anchor>
            <span className="wevr-text">Powered By  </span>
            <img className="wevr-logo" src="/wevr.svg" ></img>
        </Anchor>
    </Footer>
)

export default CustomFooter
