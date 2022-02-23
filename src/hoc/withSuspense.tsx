import React, { Suspense } from "react";
import Preloader from "../components/common/Preloader/Preloader";

type InjectedPropsType = any;

export function withSuspense<PropsType>(Component: React.ComponentType<PropsType>) {
    function SuspensedComponent(props: InjectedPropsType) {
        return (             
                <Suspense fallback={<Preloader/>}>
                    <Component {...props as PropsType}/>
                </Suspense>           
        );
    }
    return <SuspensedComponent/>;
}
