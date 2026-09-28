import { useState } from 'react'
import './App.css'
import Case from './cases'

function App() {
  const [value, setValue] = useState('')
  const [cases, setCase] = useState([])
  const [editingId, setEditingId] = useState(null)
  function changeHandler(event){
      setValue(event.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(!value.trim()) return;
    if(editingId != null){
      setCase((prev) =>
      prev.map((item) =>
        item.id === editingId ? { ...item, text: value } : item
      )
    )
    setEditingId(null)
    }
    else
    setCase((prev) => [
      ...prev,
      { id: Date.now(), text: value, done: false },
    ])
  setValue('')
  }
  function toggleCase(id){
    setCase((cases) =>{
      return cases.map((item)=>{
        return item.id === id ? {...item, done: !item.done} : item
      })
    })
  }
  function handleDelete(id){
    setCase((cases) => cases.filter((item) => item.id !== id))
  }
  function handleChange(id){
    const item = cases.find((c)=> c.id === id)
    setValue(item.text)
    setEditingId(id)
  }
  return (<><div className="checklist">
      <h2>Мои дела</h2>

      <form className="checklist__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="checklist__input"
          placeholder="Новое дело..."
          value={value}
          onChange={changeHandler}
        />
        <button type="submit" className="checklist__add-btn">
          {editingId === null ? 'Добавить' : 'Сохранить'}
        </button>
      </form>
      <ul className="checklist__list">
        <Case cases={cases} toggleCase={toggleCase} handleDelete={handleDelete} handleChange={handleChange}/>
      </ul>
    </div></>)
}

export default App
