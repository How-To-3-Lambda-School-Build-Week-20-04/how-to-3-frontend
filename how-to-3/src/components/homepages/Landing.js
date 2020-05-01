import React from 'react'
import styled from 'styled-components'
import LandingNav from '../navs/LandingNav'

const LandingDiv = styled.div `
   
    background: lightblue;
    width:89%;
     height:95vh;
    margin:0 auto;
    text-align:center;
    .innerContainer{
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
        
        .innerBox{
            height:13rem;
            background:darkred;
            width:40%;
            margin:2%;
            color:lightblue;
            h4{
                font-size:1.7rem;
                margin-top:25%;
            }
            

            
        }
        #box1{

            background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://www.jotform.com/blog/wp-content/uploads/2018/07/photos-with-story-featured-15.jpg');

            transition: all .8s ease-in-out;
         
            
            /* background-size:; */
            background-position:center;
        }
        #box2{
            background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://insights.dice.com/wp-content/uploads/2019/07/Tell-Me-About-Yourself-Interview-Job-Interview-Interview-Questions-Dice.png');

           
            background-size:contain;

            
        }
        #box3{
            width:90%;
            h4{
                font-size:1.7rem;
                margin-top:5%;
            }
        }
        section{
            width:100%;
            height:95vh;
            background:antiquewhite;
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
                        <div className='innerBox' id='box2'>
                            <h4>Create The Event</h4>
                            <p className='pg-info'>
                                lorem tect
                            </p>

                        </div>

                        <div className='innerBox' id='box1' >
                            <h4>Tell us Something About it </h4>
                            <p className='pg-info'>
                                lorem tect
                            </p>

                        </div>

                        <div className='innerBox' id='box3'>
                            <h4>Post It </h4>
                            <p className='pg-info'>
                                lorem tect
                            </p>

                        </div>
                        <section>
                            <h3>About us</h3>

                        </section>



                        



                    </div>

                </LandingDiv>

            </div>
        </div>
    )
}
