import React from 'react'

function Add({add, addli, setAddli}) {
    const handleChange=(e)=>{
        const {name,value}= e.target;
        setAddli({...addli,[name]:value})
    }
  return (
    <div>
        <button className='btn btn-outline-info m-5'  data-bs-toggle="modal" data-bs-target="#exampleModal">Add new details</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="">
                                <div className="row m-2">
                                    <label className='col-3 text-start'>ID:</label>
                                    <input type="number" name="id" value={addli.id} onChange={(e)=>{handleChange(e)}} className='col-9 form-control'/>
                                </div>
                                <div className="row m-2">
                                    <label className='col-3 text-start'>Name:</label>
                                    <input type="text" name="name" value={addli.name}  onChange={(e)=>{handleChange(e)}} className='col-9 form-control'/>
                                </div>
                                <div className="row m-2">
                                    <label className='col-3 text-start'>EMail:</label>
                                    <input type="email" name="email" value={addli.email} onChange={(e)=>{handleChange(e)}}  className='col-9 form-control'/>
                                </div>
                                <div className="row m-2">
                                    <label className='col-3 text-start'>Contact:</label>
                                    <input type="number" name="contact" value={addli.contact} onChange={(e)=>{handleChange(e)}} className='col-9 form-control'/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary " onClick={add} data-bs-dismiss="modal">Add</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Add