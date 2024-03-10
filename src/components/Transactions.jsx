import React from 'react'
import { getIcon } from '../lib/utils'
import { Pencil, Trash2 } from 'lucide-react'
import { format } from 'date-fns'


export const Transactions = ({ items }) => {
  return (
   <>
    {items?.map((expense) => (
        <div key={expense.id} className="w-full max-w-sm p-6 m-3 text-center text-white shadow-lg group hover:-translate-y-1 hover: hover:scale-100 shadow-red-lite/50 bg-gray-500/10 rounded-2xl hover:shadow-black/40 xl:w-full lg:w-11/12 sm:m-0 sm:mb-4">
           <div className='flex justify-end gap-2'>
                <Pencil onClick={() => editExpense(expense)}  className='w-5 h-5 cursor-pointer text-sky-400' />
                <Trash2 onClick={() => {
                  setSelectedExpense(expense);
                  setIsConfirmationModalOpen(true);
                }}  className='w-5 h-5 text-red-500 cursor-pointer' />
            </div>
            <h3 className='text-xl font-semibold text-center'>{expense.title}</h3>
            <p className='flex-grow mt-10 mb-10 text-3xl font-bold text-center group-hover:text-red-lite group-hover:text-4xl'>${(+expense.amount).toFixed(2)}</p>
            <div className='flex items-center justify-between'>
              <p className='text-gray-500'>{format(expense.date, 'dd/MM/yyyy')}</p>
              <span className='text-end'>{getIcon(expense.rating)}</span>
            </div>
          </div>
        ))}
   </>
  )
}
