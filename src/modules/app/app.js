import { Provider } from 'react-redux'
import { store } from '../../store/store'
import
InputRecordHeader
  from '../../components/input-record-header/record-header'
import Filters from '../../components/filters/filters'

const App = () => {
  return <Provider store={store}>
            <div className={ `absolute top-[50%] left-[50%] 
                              translate-x-[-50%] translate-y-[-50%]`}>
                <InputRecordHeader/>
                <Filters/>
            </div>
         </Provider>
}

export default App
