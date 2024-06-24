import React from 'react';
import { Popover, Whisper, Button } from 'rsuite';

type props = {
    children: string | JSX.Element | JSX.Element[],
    innerChildren:  React.ReactElement | ((props: any, ref: any) => React.ReactElement),
    placement: 'top' | 'bottom' | 'right' | 'left',
    trigger: 'click' | 'hover' | 'focus' | 'active' | 'contextMenu' | 'none'
  }
const CustomPopOver = ({children, placement, trigger, innerChildren}: props) => (
    <Whisper
      trigger={trigger}
      placement={placement}
      controlId={`control-id-bottom`}
      speaker={  <Popover >
            <div>
              {children}  
            </div>
        </Popover>
      }
    >
        {innerChildren ?  innerChildren : <Button>Hover</Button>}
    </Whisper>
);

export default CustomPopOver;
  





