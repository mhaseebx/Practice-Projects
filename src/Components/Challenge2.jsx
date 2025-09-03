import React from 'react'

const Challenge2 = () => {

    let currDate = new Date()
    currDate = currDate.getHours()

    let greeting = '';
    const css = { }

    if (currDate >= 0 && currDate <= 24) {

        if (currDate >= 0 && currDate < 5 || currDate >= 20 && currDate <= 24) {
            greeting = 'Good Night'
            css.color = 'black'
        }

        else if(currDate >= 5 && currDate <= 11){
            greeting = 'Good Morning'
            css.color = 'blue'
        } 
        
        else if(currDate >= 12 && currDate <= 19 ){
            greeting = 'Good Afternoon'
            css.color = 'orange'
        }

        else{
            console.log('invalid')
        }
    }

    return (
        <>
            <div className='w-[100%] h-full flex flex-col justify-center items-center '>

                <div className='absolute top-[15rem] bg-amber-200 font-bold text-2xl px-9 py-5 '>
                    <p>Hello Sir, <span style={css}>{greeting} </span></p>
                </div>

            </div>
        </>
    )
}

export default Challenge2