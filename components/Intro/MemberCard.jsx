/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'

const MemberCard = ({ member }) => {
    return (
        <div className="rounded-lg ring-slate-900/5 bg-slate-800 highlight-white/5 ring-0 flex flex-col lg:flex-row w-4/5 items-center lg:items-stretch py-8 px-4 lg:p-0 overflow-hidden h-[375px] lg:h-60 justify-start">
            <Link href={ member.facebook } target="_blank" rel='noopener' className="h-32 w-32 lg:w-1/3 lg:h-auto">
                <img src={ member.avatar } alt={ member.name } className="rounded-full lg:rounded-none w-full h-full object-cover" />
            </Link>
            <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-2/3 h-full mt-4 lg:mt-0 lg:p-8">
                <p className="text-slate-400 lg:text-lg">{ member.position }</p>
                <h4 className="text-xl lg:text-2xl font-semibold text-center lg:text-left text-blue-400">{ member.name }</h4>
                <p className="text-sm lg:text-base text-center lg:text-left">{ member.desc }</p>
            </div>
        </div>
    )
}

export default MemberCard