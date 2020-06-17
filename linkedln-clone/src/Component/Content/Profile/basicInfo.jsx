import {Container, Jumbotron, Image} from 'react-bootstrap';
import React, {Component} from 'react';

const user9 ='user9';
const password1 ='sP4YMKhBpqQHAPJN';

class BasicInfo extends Component{
    render(){
        return(
            <Jumbotron>
                <div id="profilePhoto"> <Image src="/jumbotronCover.jpeg" thumbnail /></div>
                <div style={{width: "20px"}}><Image src="https://media-exp1.licdn.com/dms/image/C5603AQH2ZpNTBJ0m0w/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=YAO-WFnpaWofgqpyQIjfMpFwRuJRUnW7-Mgqf8EhOm0"  roundedCircle  /></div>
            </Jumbotron>
        )
    }
    
}

export default BasicInfo;