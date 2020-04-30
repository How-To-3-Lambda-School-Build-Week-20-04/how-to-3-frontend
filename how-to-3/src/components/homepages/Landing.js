import React from 'react'
import styled from 'styled-components'
import LandingNav from '../navs/LandingNav'

const LandingDiv = styled.div `
   
    background: lightblue;
    width:75%;
    margin:0 auto;
    text-align:center;
    .innerContainer{
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
        
        .innerBox{
            height:13rem;
            background:red;
            width:40%;
            margin:2%;
        }
    }
    @media screen and (max-width:800px){
            .innerContainer{
                flex-direction:column;
                margin:0 auto;
                align-items:center;
                .innerBox{
                    width:98%;
                }
            }
            
        }

`

export default function Landing() {
    return (
        <div>
            <LandingNav/>

            <div className='container'>
                <LandingDiv>
                    <h1>How - To - 3</h1>

                    <div className='innerContainer'>
                        <div className='innerBox'>
                            <h4>hello</h4>

                        </div>

                        <div className='innerBox'>

                        </div>

                        <div className='innerBox'>
                            <h4>hello</h4>

                        </div>

                        <div className='innerBox'>

                        </div>



                    </div>

                </LandingDiv>

            </div>
        </div>
    )
}
