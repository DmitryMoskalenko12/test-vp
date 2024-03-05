import { useSelector } from 'react-redux'
import { useState } from 'react'
import RecordList from '../record-list/record-list'

const Filters = () => {
  const [filter, setFilter] = useState('All')
  const allRecords = useSelector((state) => state.records.renderedAllRecords)
  const curRecord = useSelector((state) => state.records.renderedCurrentRecords)
  const compRecords = useSelector((state) => state.records.renderedCompRecords)

  const onGetFilter = (event) => {
    if (event.target.tagName === 'BUTTON') {
      setFilter(event.target.textContent.replaceAll(/\d/ug, ''))
    }
  }

  return <div className={ `w-[100%] w-max-[90%] rounded-[6px]
                           bg-[#3e5d6c] p-[1rem]`
                        }>
            <div className=" w-[min-content] flex gap-[15px] mb-[30px]">
                <button className={ `flex justify-center items-center
                                     rounded-[5px] hover:text-[#fff]`
                                  }
                onClick={onGetFilter}>All
                <span
                className={ `rounded-[4px] ml-[0.5rem] p-[0.25rem_0.5rem]
                           bg-[#0f61ef] text-[#fff] text-[0.7rem]`
                          }>
                {allRecords.length}
                </span>
                </button>
                <button className={ `flex justify-center items-center
                                     rounded-[5px] hover:text-[#fff]`
                                  }
                onClick={onGetFilter}>Current
                <span
                className={ `rounded-[4px] ml-[0.5rem] p-[0.25rem_0.5rem]
                           bg-[#0f61ef] text-[#fff] text-[0.7rem]`
                          }>
                {curRecord.length}
                </span>
                </button>
                <button className={ `flex justify-center items-center
                                     rounded-[5px] hover:text-[#fff]`
                                  }
                onClick={onGetFilter}>Completed
                <span
                className={ `rounded-[4px] ml-[0.5rem] p-[0.25rem_0.5rem]
                           bg-[#0f61ef] text-[#fff] text-[0.7rem]`
                          }>
                {compRecords.length}
                </span>
                </button>
            </div>
            <RecordList filter={filter}/>
           </div>
}

export default Filters
