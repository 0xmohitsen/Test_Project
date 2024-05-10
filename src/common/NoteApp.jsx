import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import AdminHeadingc from "../admin/components/AdminHeadingc";
import Addnotes from "./Addnotes";

const NoteApp = () => {
  const [showId, setshowId] = useState(false);
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [scalingNoteId, setScalingNoteId] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [bgColor, setbgColor] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

   // Function to handle search input changes
   const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredNotes = searchQuery.length === 0
    ? notes
    : notes.filter(note =>
        note.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
  const currentDate = new Date();
  const formattedDate =
    currentDate.getDate() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getFullYear();
  const colors = ["#ffae1f", "#539bff", "#fa896b", "#13deb9", "#5d87ff"];
  const scaleClass = {
    transform: "scale(1.3)",
    transition: "transform 0.3s ease-in-out",
    color: "white",
    backgroundColor: selectedColor,
  };

  const TextWithEllipsis = (text) => {
    return text && text.length > 20 ? text.substring(0, 17) + "..." : text;
  };

  const addNote = (note) => {
    const backgroundColor = getBackgroundColor(note.color);
    const newNote = { ...note, backgroundColor };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const startEditing = (note) => {
    setEditingNote(note);
    setScalingNoteId(note.id);
  };
  const saveNote = () => {
    setNotes(
      notes.map((note) => {
        if (note.id === editingNote.id) {
          return editingNote;
        }
        return note;
      })
    );
    setEditingNote(null); // Clear editing note after saving
  };
  const handleNoteChange = (event) => {
    setEditingNote({ ...editingNote, description: event.target.value });
  };

  // const handleColorChange = (event) => {
  //   setEditingNote({ ...editingNote, color: event.target.value });
  // };
  const changeNoteColor = (color) => {
    if (editingNote) {
      const backgroundColor = getBackgroundColor(color);
      setEditingNote({ ...editingNote, color, backgroundColor });
    }
    setSelectedColor(color);
  };
  const getBackgroundColor = (color) => {
    switch(color) {
      case '#ffae1f': return '#fef5e5';
      case '#539bff': return '#ebf3fe';
      case '#fa896b': return '#fdede8';
      case '#13deb9': return '#e6fffa';
      case '#5d87ff': return '#ecf2ff';
      default: return null;
    }
  };
  

  return (
    <div className="flex flex-col gap-4 h-full w-full ">
      <AdminHeadingc name="Note App " img={"/notehead.png"} />
      <div className="border shadow-lg h-[30rem] w-full bg-white  rounded-xl py-2 flex sm:flex-col sm:h-full">
        <div className="w-[27%] border-r  flex items-center flex-col sm:w-full">
          <input
            type="search"
            className="rounded-md h-9 px-4 w-[90%] mt-4 border"
            placeholder="Search Notes..."
            value={searchQuery}
          onChange={handleSearchChange}
          />
          <p className="font-semibold w-full text-left ml-9">All Notes</p>
          <div>
            <div>
              {filteredNotes.map((note) => (
                <div
                  key={note.id}
                  onClick={() => startEditing(note)}
                  style={{
                    backgroundColor: note.backgroundColor,
                    transform:
                      scalingNoteId === note.id ? "scale(1.1)" : "scale(1)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className="h-16 w-[16rem] p-3 rounded-xl  flex flex-col mb-2"
                >
                  <p
                    style={{ color: note.color }}
                    className="font-semibold h-0 flex justify-start items-end text-[1.1rem]"
                  >
                    {TextWithEllipsis(note.description)}
                  </p>
                  <div className="text-smi flex justify-between items-center ">
                    {formattedDate.toString()}
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="bg-slate-200 rounded-full h-8 w-8 hover:bg-slate-300"
                    >
                      <RiDeleteBin5Line className="h-4 w-4 " />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[70%] h-full sm:w-full">
          <header className="flex w-full h-20  justify-between items-center px-4 border-b sm:px-0 sm:w-[97%] sm:justify-end">
            <AiOutlineMenu className="h-7 w-7 sm:hidden" />
            <button
              onClick={() => setshowId(true)}
              className="bg-[#5d87ff] text-white font-semibold text-mini h-[2rem] w-[6rem] rounded-md"
            >
              Add Note
            </button>
          </header>
          {editingNote && (
            <main className="flex flex-col pl-8 sm:pl-0 ">
              <p className="font-semibold w-full text-left">Edit Note</p>
              <textarea
                type="text"
                value={editingNote.description}
                onChange={handleNoteChange}
                placeholder="Edit Note..."
                className="resize-none p-5 h-[8rem] shadow border w-[95%] rounded-md flex justify-start items-start"
              />
              <p className="font-semibold w-full text-left">
                Change Note Color
              </p>
              <div className="flex justify-between items-center">
                {/* <input type="color" value={editingNote.color} onChange={handleColorChange} />  */}
                <div className="flex gap-3">
                  {colors.map((color, index) => (
                    <div
                      className="hover:scale-105 rounded-full flex justify-center items-center"
                      key={index}
                      onClick={() => changeNoteColor(color)}
                      style={{
                        color: "transparent",
                        backgroundColor: color,
                        width: "25px",
                        height: "25px",
                        cursor: "pointer",
                        ...(selectedColor === color ? scaleClass :{}), // Apply scaleClass if color is selected
                      }}
                    >
                      ✓
                    </div>
                  ))}
                </div>
                <button
                  className="bg-[#5d87ff] text-white font-semibold text-mini h-[2rem] w-[6rem] rounded-md"
                  onClick={saveNote}
                >
                  Save
                </button>
              </div>
            </main>
          )}
        </div>
      </div>
      {showId && (
        <Addnotes addNote={addNote} forClose={() => setshowId(false)} />
      )}
    </div>
  );
};

export default NoteApp;
