import React, { useState } from 'react'
import Add from './Add'
import Del from './Del'
import Edit from './Edit'

function Table() {
    const [list, setList] = useState([
        { id: 1, name: "Tania", email: "mailto:tania@abc.com", contact: 989898757 },
        { id: 2, name: "Craig", email: "mailto:craig@abc.com", contact: 999898757 },
        { id: 3, name: "Ben", email: "mailto:ben@abc.com", contact: 979898757 }
    ])
    const initialFormState = { id: null, name: "", email: "", contact: "",status:"" };
    const [addli,setAddli] = useState(initialFormState)
    const [editli,setEditli] = useState(initialFormState)
    
    const add=()=>{
        setList([...list,addli])
    }
    function del(index){
        var temp = [...list];
        temp.splice(index,1)
        setList([...temp])
    }
    console.log(addli)
  return (
    <div>
        <div>
            <Add addli={addli} add={add} setAddli={setAddli}></Add>
        </div>
        <div>
            <table className='table'>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>EMail</th>
                    <th>Contact</th>
                </thead>
                {
                    list.map((li,i)=>{
                        return <tbody>
                            <tr>
                                <td>{li?.id}</td>
                                <td>{li?.name}</td>
                                <td>{li?.email}</td>
                                <td>{li?.contact}</td>
                                <td><Del del={del} i={i}></Del></td>
                                <td><Edit li={li} i={i} editli={editli} setEditli={setEditli} list={list} setList={setList}></Edit></td>
                            </tr>
                        </tbody>
                    })
                }
            </table>
        </div>
    </div>
  )
}

export default Table