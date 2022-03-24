import { useState, useRef } from "react";
import "./App.css";
import Form from "./components/Form";

const App = () => {
  const dataKosong = {
    nama: "",
    email: "",
    handphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };

  const [datas, setDatas] = useState(dataKosong);

  const suratKesungguhan = useRef(null);

  const baseError = {
    nama: "",
    email: "",
    noHandphone: "",
  };

  const regex = {
    nama: /^[a-zA-Z ]*$/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    noHandphone: /\+?([ -]?\d+)+|\(\d+\)([ -]\d+){9-14}/,
  };

  const [errorMassage, setErrorMassage] = useState(baseError);

  return (
    <div className="App">
      <Form datas={datas} setDatas={setDatas} suratKesungguhan={suratKesungguhan} errorMassage={errorMassage} setErrorMassage={setErrorMassage} regex={regex} />
    </div>
  );
};

export default App;
