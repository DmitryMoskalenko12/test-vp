import Record from '../record/record'
import { useSelector } from 'react-redux'

const RecordList = ({ filter }) => {
  const allRecords = useSelector((state) => state.records.renderedAllRecords)
  const current = useSelector((state) => state.records.renderedCurrentRecords)
  const completed = useSelector((state) => state.records.renderedCompRecords)
  // eslint-disable-next-line id-blacklist
  let content

  switch (filter) {
    case 'All': {
      // eslint-disable-next-line id-blacklist
      content = allRecords
      break
    }
    case 'Current': {
      // eslint-disable-next-line id-blacklist
      content = current
      break
    }
    case 'Completed': {
      // eslint-disable-next-line id-blacklist
      content = completed
      break
    }
    default: {
      // eslint-disable-next-line id-blacklist
      content = []
      break
    }
  }

  return <ul className={ `w-[100%] flex flex-col justify-center
                            items-center gap-[10px] p-[0]`}>
            {
               // eslint-disable-next-line id-blacklist
               content.length > 0 ? content.map((item) => {
                 return <Record
                        // eslint-disable-next-line id-blacklist
                        key={item.id}
                        // eslint-disable-next-line id-blacklist
                        name={item.name}
                        // eslint-disable-next-line id-blacklist
                        description={item.description}
                        // eslint-disable-next-line id-blacklist
                        id={item.id}/>
               }) : <div>No records found</div>
            }
           </ul>
}

export default RecordList
