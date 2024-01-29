import React, { ReactNode } from "react"

export const SubTitle: React.FC<SubTitleProps> = ({main, event, time}) => {
    return (
      <div>
        <div className="text-l font-bold font-SourceHanSansHWSC">
          {main}
        </div>
        <div className="mt-1 text-xs flex flex-row items-center justify-between font-sourceHanSerifSC">
          <div className="flex flex-row items-center">
              {event}
          </div>
          <div className="flex flex-row">
            <div>{time}</div>
          </div>
        </div>
      </div>
    );
}


interface SubTitleProps {
  main: string | ReactNode;
  event: string | ReactNode;
  time: string | ReactNode;
}