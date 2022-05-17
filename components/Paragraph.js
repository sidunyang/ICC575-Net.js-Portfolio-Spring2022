import styles from './Paragraph.module.scss'

import classNames from 'classnames/bind'

let cx = classNames.bind(styles);

export default function Paragraph({children, intro}){
    let paragraphClasses =cx({
        paragraph: true,
        intro:intro
    });
    return <p className={paragraphClasses}>{children}</p>
}