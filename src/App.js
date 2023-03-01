import "./App.css";
import Nav from "./component/Nav";

import { db, firebaseStorage } from "./component/firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import Addmodel from "./component/Addmodel";
import PrincessModel from "./component/PrincessModel";

function App() {
  const [search, setsearch] = useState("");
  const [addmodel, setaddmodel] = useState(false);
  const [pmodel, setpmodel] = useState(false);
  const [princessName, setprincessName] = useState("");
  const [princessInput, setprincessInput] = useState("");
  const [princessimage, setprincessimage] = useState(null);
  const [princessData, setprincessData] = useState([]);
  const [princessid, setprincessid] = useState(null);
  const [copy, setcopy] = useState(false);
  const [loading, setloading] = useState(true);
  const userCollection = collection(db, "princess");

  useEffect(() => {
    const getprincess = async () => {
      const data = await getDocs(userCollection);
      setloading(false);
      setprincessData(data.docs.map((e) => ({ ...e.data(), id: e.id })));
    };
    getprincess();
  }, []);

  const Addprincess = async () => {
    const imgref = ref(
      firebaseStorage,
      `princess/${princessimage.name + Date.now()}`
    );
    await uploadBytes(imgref, princessimage).then(() => {
      getDownloadURL(imgref).then((url) => {
        addDoc(userCollection, { name: princessInput, imgLink: url })
          .then(() => {
            alert("Actress import Successfull");
          })
          .catch((error) => {
            alert(error);
          });
      });
    });
  };

  const openModelprincess = (name, id) => {
    setpmodel(true);
    setprincessName(name);
    setprincessid(id);
  };

  const deletePrincess = async (id) => {
    const imagelink = princessData
      .filter((e) => e.id === id)
      .map((e) => e.imgLink);

    const deleteImage = ref(firebaseStorage, imagelink[0]);
    await deleteObject(deleteImage).then(async () => {
      const deleteid = doc(db, "princess", id);
      await deleteDoc(deleteid)
        .then(() => {
          alert("Princess Delete success");
        })
        .catch((error) => {
          alert(error);
        });
    });
  };

  return (
    <div className="App">
      <Nav setaddmodel={setaddmodel} />
      <Addmodel
        addmodel={addmodel}
        setaddmodel={setaddmodel}
        princessInput={princessInput}
        setprincessInput={setprincessInput}
        Addprincess={Addprincess}
        setprincessimage={setprincessimage}
      />
      <PrincessModel
        pmodel={pmodel}
        setpmodel={setpmodel}
        princessName={princessName}
        deletePrincess={deletePrincess}
        princessid={princessid}
        copy={copy}
        setcopy={setcopy}
      />
      <div className="home-section">
        <input
          type="text"
          placeholder=" search tonight princess"
          className="search-input"
          onChange={(e) => setsearch(e.target.value)}
          value={search}
        />
        <div className="home-border">
          <div className="actress-list">
            {loading ? (
              <div style={{ padding: "150px 0px 50px 0px" }}>
                <h4 style={{ color: "#eeeeee", fontSize: "2rem" }}>
                  Loading...
                </h4>
              </div>
            ) : search === "" ? (
              princessData.map((e, index) => (
                <div
                  className="actress-main"
                  key={e.id}
                  onClick={() => openModelprincess(e.name, e.id)}
                >
                  <img src={e.imgLink} alt="" />
                  <p>{e.name}</p>
                  <p className="index">{index + 1}</p>
                </div>
              ))
            ) : (
              princessData
                .filter((e) => {
                  if (e.name.toLowerCase().includes(search.toLowerCase())) {
                    return e;
                  }
                })
                .map((e) => (
                  <div
                    className="actress-main"
                    key={e.id}
                    onClick={() => openModelprincess(e.name, e.id)}
                  >
                    <img src={e.imgLink} alt="" />
                    <p>{e.name}</p>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>

      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#7c838e",
        }}
      >
        @CopyRight to kaungmyat 2023 All Right Reserve
      </p>
    </div>
  );
}

export default App;
