import React from 'react'

function Edit({editli,setEditli,list,setList,li,i}) {
    const edit=(li)=>{
        setEditli({id:li.id,name:li.name,email:li.email,contact:li.contact})
    }
    const handleChangeid=(e)=>{
        console.log(e.target.value)
        editli.id=e.target.value;
        setEditli({...editli})
    }
    const handleChangename=(e)=>{
        console.log(e.target.value)
        editli.name=e.target.value;
        setEditli({...editli})
    }
    const handleChangemail=(e)=>{
        console.log(e.target.value)
        editli.email=e.target.value;
        setEditli({...editli})
    }
    const handleChangenum=(e)=>{
        console.log(e.target.value)
        editli.contact=e.target.value;
        setEditli({...editli})
    }
    const update=(i)=>{
        var temp=[...list]
        temp[editli.id-1]=editli
        setList(temp)
        console.log("searchname",editli)
        console.log("searchname",)
    }
  return (
    <div>
        <button className='btn btn-outline-warning float-start mx-5' onClick={()=>{edit(li,i)}}  data-bs-toggle="modal" data-bs-target="#exampleModal1">Edit</button>
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className="row m-2">
                                <label className='col-3'>ID:</label>
                                <input type="number" name="id" value={editli.id} onChange={(e)=>{handleChangeid(e)}} className='col-9 form-control'/>
                            </div>
                            <div className="row m-2">
                                <label className='col-3'>Name:</label>
                                <input type="text" name="name" value={editli.name}  onChange={(e)=>{handleChangename(e)}} className='col-9 form-control'/>
                            </div>
                            <div className="row m-2">
                                <label className='col-3'>EMail:</label>
                                <input type="email" name="email" value={editli.email} onChange={(e)=>{handleChangemail(e)}}  className='col-9 form-control'/>
                            </div>
                            <div className="row m-2">
                                <label className='col-3'>Contact:</label>
                                <input type="number" name="contact" value={editli.contact} onChange={(e)=>{handleChangenum(e)}} className='col-9 form-control'/>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" onClick={()=>{update(i)}} data-bs-dismiss="modal">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Edit