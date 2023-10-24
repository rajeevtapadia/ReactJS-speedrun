import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App flex flex-col justify-center items-center h-screen">
      <button className="btn">
        <Link to={"/admin/auth"}>Admin</Link>
      </button>
      <button className="btn">
        <Link to={"/user/auth"}>User</Link>
      </button>
    </div>
  );
}
