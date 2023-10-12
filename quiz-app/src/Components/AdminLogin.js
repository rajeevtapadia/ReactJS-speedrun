import "../assets/AdminLogin.css";

export default function AdminLogin() {
  return (
    <>
        <p>Admin login</p>
        <input placeholder={"username"} type={"text"}></input>
        <input placeholder={"password"} type={"password"}></input>
        <button className="btn" type="submit">submit</button>
    </>
  );
}
