import * as React from "react";
import '../index.css'

// interface IModalProps {
//   closeModal: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Modal = ({ closeModal }) => {
    return (
        <div className="modal">
            <div className="modal-header">
                <h2
                    onClick={() => {
                        closeModal(false);
                    }}
                >
                    X
                </h2>
            </div>
            <div className="modal-body">
                <h1 className="text-3xl  text-purple-900"><button>About</button></h1>
                <h2 className="text-3xl my-6 text-purple-900"><button>Auther</button></h2>
                <h2 className="text-3xl text-purple-900"><button>Team</button></h2>
            </div>
        </div>
    );
};
export default Modal
