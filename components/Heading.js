import styles from './heading.module.scss'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles);

export default function Heading({children,level }){
    //console.log({props})
    let headingClasses =cx({
        heading : true,
        heading1 :level === "1",
        heading2: level === "2",
        heading3: level === "3",
    });
    // console.log({headingClasses});

    if (level === "1"){
        return <h1 className={headingClasses}>{children}</h1>
    } else if (level === "2"){
        return <h2 className={headingClasses}>{children}</h2>
    } else if (level === "3"){
        return <h3 className={headingClasses}>{children}</h3>
    } else {
        return <p>Warning:The 'level'prop is required to make this component display properly.</p>
    }
}