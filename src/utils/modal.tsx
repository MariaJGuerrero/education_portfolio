import { modalArrayType } from "../models/types"
import { modalArray } from "./modal-array"
import '../styles/modal.css'

const Modal = ({dialogRef}: {dialogRef: HTMLDialogElement | null})=> {

    let skills: modalArrayType = modalArray

    return(
        <>
            <div className="main" >
                <button onClick={()=> {dialogRef?.close();}} type="button" className="btn closeButton">Close</button>
                {
                    skills.map((skill)=> 
                    <>
                        <div className="card border-light bg-transparent mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{skill.title}</h5>
                                <p className="card-text">{skill.description}</p>
                            </div>
                    </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Modal;