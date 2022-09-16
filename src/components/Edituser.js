import React, {Fragment} from "react";

const Edituser = ({user})=>{
    console.log(user);
    return (
    <Fragment>
       
        <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal">
        Editar
        </button>


        <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

            
            <div class="modal-header">
                <h4 class="modal-title">Editar usuario</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            
            <div class="modal-body">
                <input type="text" className="form-control"/>
                <input type="text" className="form-control" />
                <input type="number" className="form-control" />
            </div>

            
            <div class="modal-footer">

                <button type="button" class="btn btn-warning" data-dismiss="modal">Guardar</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
            </div>

            </div>
        </div>
        </div>
    </Fragment>
)};

export default Edituser;