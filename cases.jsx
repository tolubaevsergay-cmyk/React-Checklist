import { useState } from "react"
import styled from 'styled-components'
const Input = styled.input`
     display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 4px;
  border-bottom: 1px solid #eee;
    `
    const Span = styled.span`
    flex: 1;
  word-break: break-word;
    `
    const Button = styled.button`
    padding: 6px 10px;
  border: none;
  border-radius: 6px;
  background: #eef1f6;
  cursor: pointer;
  color: #555;
  &:hover {
    background: #dde3ec;
  }
    `
    const DeleteButton = styled(Button)`
    &:hover {
   background: #fdecec;
  color: #e5484d;
  }
    `
    const Li = styled.li`
    display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 4px;
  border-bottom: 1px solid #eee;
    `
function Case({cases, toggleCase, handleDelete, handleChange}){
    
   return cases.map((item) =>{
        return <Li key={item.id}>
            <Input type="checkbox" checked={item.done} onChange={() => toggleCase(item.id)}/>
          <Span style={item.done ? { textDecoration: 'line-through', color: '#999' } : undefined}>{item.text}</Span>
          <Button onClick={()=> handleChange(item.id)}>✏️</Button>
          <DeleteButton onClick={()=> handleDelete(item.id)}>🗑️</DeleteButton>
        </Li>
    })

}
export default Case