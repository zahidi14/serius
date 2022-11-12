import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddUser = () => {
  const [date, setDate] = useState("");
  const [pemasukan, setPemasukan] = useState("");
  const [jumlah, setJumlah] = useState("");
  const navigate = useNavigate();
 
  const saveData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/input/", {
        date,
        pemasukan,
        jumlah,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveData}>
          <div className="field">
            <label className="label">Tanggal</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={pemasukan}
                onChange={(e) => setPemasukan(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default AddUser;