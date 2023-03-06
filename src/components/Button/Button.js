import style from './buttonStyle';

export default function Button({ label, runFunction }) {
  return (
    <button class={style.btn_primary} onClick={runFunction}>
      {label}
    </button>
  );
}
