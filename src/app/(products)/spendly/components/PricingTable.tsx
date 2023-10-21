
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/app/components/UI/Table'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdOutlineCancel } from 'react-icons/md'

type Props = {
    data:{
        title: string,
        features: string[]
    }[]
}

const PricingTable = (props: Props) => {
    return (
        <div className='w-1/2'>
            <Table >
                <TableHeader>
                    <TableRow className='divide-y-0 '>
                        <TableHead className="w-[400px]"></TableHead>
                        <TableHead className='space-y-2'>
                            <p className='text-spendly  inline px-2 py-1 bg-[#EBF9F6] rounded-full'>Basic</p>
                            <p className='font-semibold '>FREE</p>
                        </TableHead>
                        <TableHead className='space-y-2'>
                             <p className='text-spendlyText  inline px-2 py-1 bg-[#F7E6FF] rounded-full'>Pro</p>
                            <p className='font-semibold '>$10/month</p>
                        </TableHead >
                        <TableHead className='space-y-2' >
                        <p className='text-spendly  inline px-2 py-1 bg-[#EBF9F6] rounded-full'>Basic</p>
                            <p className='font-semibold '>$20 /month</p>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className=''>
                    {props.data.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className='flex justify-center'>{item.title}</TableCell>
                            <TableCell className='px-4'>
                                {item.features.includes('free') ? <AiFillCheckCircle className="text-green-500" /> : <MdOutlineCancel className="text-red-500" />}
                            </TableCell>
                            <TableCell className='px-4'>
                                {item.features.includes('pro') ? <AiFillCheckCircle className="text-green-500" /> : <MdOutlineCancel className="text-red-500" />}
                            </TableCell>
                            <TableCell className='px-4'>
                                {item.features.includes('premium') ? <AiFillCheckCircle className="text-green-500" /> : <MdOutlineCancel className="text-red-500" />}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
    )
}

export default PricingTable