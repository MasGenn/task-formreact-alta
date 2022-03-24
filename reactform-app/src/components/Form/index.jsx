import styles from "./style.module.css";

const Form = ({ datas, setDatas, suratKesungguhan, errorMassage, setErrorMassage, regex }) => {
  //   const fotoSampul = useRef(null);
  const handleInput = (value, key) => {
    const newDatas = { ...datas };

    newDatas[key] = value;

    const validNama = () => {
      if (datas === "nama") {
        if (regex.test(value)) {
          setErrorMassage("");
        } else {
          setErrorMassage("Nama Harus Berupa Huruf");
        }
      }
    };

    const validEmail = () => {
      if (datas === "email") {
        if (regex.test(value)) {
          setErrorMassage("");
        } else {
          setErrorMassage("Email tidak sesuai");
        }
      }
    };

    const validHandphone = () => {
      if (datas === "handphone") {
        if (regex.test(value)) {
          return setErrorMassage("No Handphone tidak sesuai");
        }
      }
    };

    setDatas(newDatas);
    // console.log("datas", datas);
  };

  const handleSubmit = (e) => {
    if (errorMassage !== "") {
      alert("Data pendaftar tidak sesuai");
    } else {
      alert(`Data Pendaftar"${datas.nama}" berhasil disimpan`);
    }

    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Pendaftaran Peserta Bootcamp Coding</h1>
      <div className="input-container">
        <label>Nama Lengkap : </label>
        <input type="text" name="namaLengkap" placeholder="Masukkan Nama Lengkap Anda" value={datas.nama} onChange={(e) => handleInput(e.target.value, "nama")} />
      </div>

      <div className="input-container">
        <label>Email : </label>
        <input type="text" name="email" placeholder="Masukkan Email Anda" value={datas.email} onChange={(e) => handleInput(e.target.value, "email")} />
      </div>

      <div className="input-container">
        <label>No Handphone : </label>
        <input type="text" name="noHandphone" placeholder="Masukkan Nomor Handphone Anda" value={datas.handphone} onChange={(e) => handleInput(e.target.value, "handphone")} />
      </div>

      <div className="input-container">
        <label>Latar Belakang Pendidikan : </label>
        <div>
          <input type="radio" id="it" name="latarBelakang" value="it" onChange={(e) => handleInput(e.target.value)} />
          <label for="it">IT</label>
        </div>
        <div>
          <input type="radio" id="nonit" name="latarBelakang" value="nonit" onChange={(e) => handleInput(e.target.value)} />
          <label for="nonit">Non IT</label>
        </div>
      </div>

      <div className="input-container">
        <label>Kelas Coding yang dipilih : </label>
        <select
          onChange={(e) => {
            handleInput(e.target.value);
          }}
        >
          <option value={datas.kelas}>React Js</option>
          <option value={datas.kelas}>Vue Js</option>
          <option value={datas.kelas}>Next Js</option>
          <option value={datas.kelas}>Angular</option>
        </select>
      </div>

      <div className="input-container">
        <label>Foto Surat Kesungguhan : </label>
        <div>
          <input type="file" name="surat" refs={suratKesungguhan} />
        </div>
      </div>

      <div className="input-container">
        <label>Harapan Untuk Coding Bootcamp Ini : </label>
        <textarea placeholder="Harapan Anda" value={datas.harapan} onChange={(e) => handleInput(e.target.value, "harapan")} />
      </div>
      {/* <label className="error-msg">{errorMassage}</label> */}
      {/* {validNama}
      <br />
      {validEmail}
      <br />
      {validHandphone} */}

      <button className={styles.tombol} type="submit">
        Submit
      </button>
      <button className={styles.reset} type="reset">
        Reset
      </button>
    </form>
  );
};

export default Form;
