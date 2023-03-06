import { useState } from 'preact/hooks';
import Button from '../Button/Button';
import style from './formStyle';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const formData = {
    name: name,
    email: email,
    password: password,
    message: message,
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formData', formData);
    handleReset();
  };

  return (
    <div class={style.form_container}>
      <form class={style.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          class={style.form_input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          class={style.form_input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          class={style.form_input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <textarea
          name="message"
          placeholder="Message"
          class={style.form_input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>

      <div class={style.button_container}>
        <Button label="Submit" runFunction={handleSubmit} />
      </div>
    </div>
  );
}
