import { Duration } from "@/types/Resume";
import { DefineEnv } from "next/dist/build/swc";
import React, { ReactNode } from "react"

export const SubHeading: React.FC<SubTitleProps> = ({main, position, duration,time}) => {
    return (
      <div>
        <div className="mt-2 text-xl font-bold font-SourceHanSansHWSC">
          {main}
        </div>
        <div className="mt-1 text-sm flex flex-row items-center justify-between font-sourceHanSerifSC">
          <div className="flex flex-row items-center">
              {position}
          </div>
          <div className="flex flex-row">
            <div>{duration.start} ~ {duration.end}</div>
          </div>
        </div>
      </div>
    );
}


interface SubTitleProps {
  main: string | ReactNode;
  position: string | ReactNode;
  duration: Duration;
  time?: string | ReactNode; /* deprecated by duration */
}
