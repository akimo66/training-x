import { useState } from 'react'
import './App.css'
import Menu from './component/Menu/Menu'
import MenuOptions from './component/Menu/MenuOptions'

function App() {

  const today=new Date().toISOString().slice(0,10)

  const [menuInput, setMenuInput] = useState('')
  const [menus, setMenus] = useState([])
  const [selectedMenu, setSelectedMenu] = useState('')
  const [dateInput, setDateInput] = useState(today)
  const [weightInput, setWeightInput] = useState('')

  const[records,setRecords]=useState([])
  const[reps,setReps]=useState([])

  const addMenu = () => {
    if (menuInput === '') return
    setMenus([...menus, { id: Date.now(), name: menuInput }]) //
    setMenuInput('')
  }

  const handleRecords=()=>{
    const newRecord={
      id:Date.now(),
      selectedName:selectedMenu,
      date:dateInput,
      weight:weightInput,
      reps:reps
    }
    setRecords([...records,newRecord])
  }

  const handleDelete=(id)=>{
    setRecords(records.filter(record=>id!==record.id))
  }

  



  return (
    <>
      <h1>Training</h1>
      <Menu value={menuInput} onChange={(e) => setMenuInput(e.target.value)} addMenu={addMenu} />
      <select name="" id="" value={selectedMenu} onChange={e => setSelectedMenu(e.target.value)}>
        <option value="" >選択</option>
        {menus.map(menu => (
          <MenuOptions key={menu.id} menu={menu} />
        ))}
      </select>
      <div>
        <input type="date" value={dateInput} onChange={e => setDateInput(e.target.value)} /><br />
        <input type="number" placeholder='重量' value={weightInput} onChange={e => setWeightInput(e.target.value)} /><br />
        {reps.map((rep,index)=>(
          <div key={index}>
        <input 
        type="number" 
        placeholder='回数' 
        value={rep}
        onChange={e => {
          const newReps=[...reps]
          newReps[index]=Number(e.target.value)
          setReps(newReps)
        }} />
        </div>
      ))}
      
        <button onClick={()=>setReps([...reps,0])}>セット数追加</button>
      </div>
      <br />
      <button type='button' onClick={handleRecords} disabled={!dateInput||!weightInput||!reps}>保存する</button>

      {records.filter(record=>record.selectedName===selectedMenu)
      .map(record=>(
      <div key={record.id}>
      <span>
        {`${record.selectedName} ${record.date} 重量${record.weight}kg ${record.reps.join('回')}回`}
      </span>
      <button onClick={()=>handleDelete(record.id)}>削除</button>
      </div>
      ))}
    </>
  )
}

export default App


