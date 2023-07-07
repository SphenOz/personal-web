import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function AboutMe({}) {
        const handleSwap = () => {
            {isSwapped ? (setIsSwapped(false)):    setIsSwapped(true)};
            {isSwapped ? (setImg("/images/108219365_p1_master1200.jpg")):   setImg("/images/IMG.jpg")};
        }
        const [isSwapped, setIsSwapped] = useState(true);
        const [img, setImg] = useState("/images/108219365_p1_master1200.jpg")
    return(
        <>
        <Card style={{ /*color: "#000",*/ width: '16rem'}}>
            <Card.Img 
            variant="bottom"
            src={process.env.PUBLIC_URL + img}/>
            <Card.Body>
                <Card.Title>Hi</Card.Title>
                <Card.Text>Im slow in the head.</Card.Text>
                <Button onClick={handleSwap} variant='success'>Switch Image</Button>
            </Card.Body>
        </Card>
        </>
    )
}