import React from 'react'
import Pro from './Pro'
import Free from './Free'

function Table() {
    return (
        <div className='w-[1597px] h-[1206px] mt-[80px] flex justify-center m-auto bg-[#FFFFFF] gap-[30px]'>
            <Pro />
            <Free />
        </div>
    )
}

export default Table
