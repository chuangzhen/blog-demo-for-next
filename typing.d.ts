declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.json' {
    const value: any;
    export default value;
}
declare module 'classnames'



declare module '*.bmp' {
    const path: string
    export default path
}

declare module '*.gif' {
    const path: string
    export default path
}

declare module '*.jpg' {
    const path: string
    export default path
}

declare module '*.jpeg' {
    const path: string
    export default path
}

declare module '*.png' {
    const path: string
    export default path
}
declare module '*.svg' {
    export function ReactComponent(
        props: React.SVGProps<SVGSVGElement>,
    ): React.ReactElement;
    const url: string;
    export default url;
}




interface Window {
    report_href: string;
    /**用来标识项目是pc还是mobile*/
    isMobile: boolean | { [key: string]: any;[key: number]: any };
    /**用来心跳上报中上报阅读进度*/
    reading_progress: number;
}

// declare const REACT_APP_ENV: 'test' | 'dev' | 'prod' | 'gray' | null;
// declare const NO_REPORT: '1' | 1 | null;
// declare module 'react';
// declare module 'react-dom';
// declare module 'react-router-dom';
declare module '@babel/runtime/helpers/slicedToArray'
