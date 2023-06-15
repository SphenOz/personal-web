import React, {useState} from 'react'
import TopBanner from '../components/TopBanner';

export default function Home() {
    const pages = {p1: 'Misc', p2:'n/a'};
    return(
        <>
            <TopBanner navlist={pages}></TopBanner>
        </>
    )
}