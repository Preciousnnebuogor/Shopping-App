import style from "./style.module.scss";

export default function Navbar() {
  return (
    <div className={style.container}>
      <p>Alpine</p>
      <div className={style.content}>
        <p>Cart</p>
        <p>Profile</p>
      </div>
    </div>
  );
}
