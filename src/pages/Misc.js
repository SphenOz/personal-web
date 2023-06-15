import React from "react";
import TopBanner from "../components/TopBanner"

const pages = {p1: 'Home', p2:'n/a'};

export default function Misc(){
    return(
        <>
            <TopBanner navlist = {pages}></TopBanner>
        </>
    )
}