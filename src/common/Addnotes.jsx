import React, {useState, useRef } from "react";

const Addnotes = ({ forClose, addNote }) => {
    const [noteDescription, setNoteDescription] = useState('');
    
    const [editingNote, setEditingNote] = useState(null);
    const [selectedColor, setSelectedColor] = useState("#ffae1f");


    const modelref = useRef();

  

    const colors = ["#ffae1f", "#539bff", "#fa896b", "#13deb9", "#5d87ff"];
    const scaleClass = {
      transform: "scale(1.3)",
      transition: "transform 0.3s ease-in-out",
      color: "white",
    };
    const closeModel = (e) => {
      if (modelref.current === e.target) {
        forClose();
      }
    };
  
    const handleTextareaChange = (e) => {
      setNoteDescription(e.target.value);
    };
    
 

  const handleSubmit = (e) => {
    // e.preventDefault();
    const newNote = {
      id: Date.now(), 
      description: noteDescription,
      color: selectedColor,
    };
    addNote(newNote);
    forClose();
  };
  const changeNoteColor = (color) => {
    setSelectedColor(color);
  };
  

  return (
    <div
      ref={modelref}
      onClick={closeModel}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <form
        onSubmit={handleSubmit}
        className="text-left bg-white flex flex-col  h- gap-3 w-[34rem] rounded-xl py-3 px-3 sm:w-[20rem] "
      >
        <p className="font-semibold text-xl h-0 flex justify-center items-center gap-3">
          Add New Note
        </p>
        <p className=" text-gray-700">
          To add new notes please enter your description and choose note colors.
          and press the submit button to add new note.
        </p>
        <textarea
          type="text"
          name=""
          id=""
          placeholder="Add Note Description..."
          className="resize-none p-5 h-[8rem] shadow border w-[92.5%] rounded-md flex justify-start items-start sm:w-[86%]"
          value={noteDescription}
          onChange={handleTextareaChange}
        />
         {/* <input
          type='color'
          value={noteColor}
          onChange={handleColorChange}
        /> */}
        <div className="flex gap-3">
                  {colors.map((color, index) => (
                    <div
                      className="rounded-full flex justify-center items-center"
                      key={index}
                      onClick={() => changeNoteColor(color)}
                      style={{
                        color: "transparent",
                        backgroundColor: color,
                        width: "25px",
                        height: "25px",
                        cursor: "pointer",
                        ...(selectedColor === color ? scaleClass : null), // Apply scaleClass if color is selected
                      }}
                    >
                      {" "}
                      ✓
                    </div>
                  ))}
                </div>

        <div className="w-[34rem] flex justify-end gap-4 sm:w-[20rem]">
          <button
            onClick={forClose}
            className="bg-[#ecf2ff] shadow-md text-[#5d87ff] h-9 w-24 rounded-xl hover:bg-[#5d87ff] hover:text-white"
          >
            Cancel
          </button>
          <button
            disabled={!noteDescription}
            className={`bg-[#ecf2ff] text-[${
              noteDescription ? "#5d87ff" : "gray"
            }] h-9 w-24 rounded-xl ${
              noteDescription ? "hover:bg-[#5d87ff] shadow-md hover:text-white" : ""
            }`}
            onClick={()=>handleSubmit()}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addnotes;
