import { useDispatch } from 'react-redux'
import {
  onToggleStatusRecord,
  onFilteredAllRecords,
  onFilteredCompRecords,
  onFilteredCurrentRecords,
} from '../../slices/main-slices'

const Record = ({ name, description, id }) => {
  const dispatch = useDispatch()

  const onToggleStatus = () => {
    dispatch(onToggleStatusRecord(id))
    dispatch(onFilteredAllRecords())
    dispatch(onFilteredCompRecords())
    dispatch(onFilteredCurrentRecords())
  }

  return <li
            className={ `w-[100%] h-[100px] p-[15px] 
                          rounded-[3px] border-[1px]`
                       }>
                <button
                  onClick={onToggleStatus}
                  className={ `w-max h-[30px] border-0 bg-[transparent]
                               font-bold text-[#FFFFFF] text-[18px]`}>
                  {name}
                </button>
                <p
                  className={ `w-[100%] h-[70px] text-[14px] font-normal 
                             text-[#d5c7c7] overflow-hidden`
                            }>
                  {description}
               </p>
           </li>
}

export default Record
