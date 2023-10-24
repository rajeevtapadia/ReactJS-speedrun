import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc, Firestore, collection, addDoc } from "firebase/firestore";

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [justifyActive, setJustifyActive] = useState("tab1");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const addAdmin = async (user) => {
    try{
      setDoc(doc(db, "Admins", user.user.email), {
        email: user.user.email,
        quizs: [],
      });
    }catch (e){
      console.log('error in addAdmin', e)
    }
  };

  function signupHandler() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setUser(user.user.email);
        console.log(user.user.email);
        addAdmin(user);
        navigate("/admin/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setError(err.code)
      });
  }

  function loginHandler() {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setUser(user.user.email);
        console.log("logged in as", user.user.email);
        navigate("/admin/dashboard");
      })
      .catch((err) => console.log(err));
  }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-80">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="form1"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form2"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <MDBBtn
            className="mb-4 w-100"
            onClick={(e) => {
              e.preventDefault();
              loginHandler();
            }}
          >
            Sign in
          </MDBBtn>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          {/* <MDBInput wrapperClass="mb-4" label="Name" id="form1" type="text" /> */}
          <MDBInput
            wrapperClass="mb-4"
            label="Email"
            id="form1"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <MDBInput
            wrapperClass="dmb-4"
            label="Password"
            id="form1"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {error && <p className="text-red-500">error: {error}</p>}
          <MDBBtn
            className="mb-4 w-100"
            onClick={(e) => {
              e.preventDefault();
              signupHandler();
            }}
          >
            Sign up
          </MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
};

export default LoginPage;
