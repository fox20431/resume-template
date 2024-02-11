
export const Section: React.FC<SectionProps> = ({title, items}) => {

    return (
        <div>
            <div className="text-lg font-bold mt-1">{title}</div>
            <ul className="font-sourceHanSerifSC">
                {items?.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

interface SectionProps {
    title: string | undefined;
    items: string[] | undefined;
}