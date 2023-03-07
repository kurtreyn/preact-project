/* eslint-disable object-shorthand */
import { useState } from 'preact/hooks';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';
import style from './formStyle';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const randomId = uuidv4();
  const date = new Date().toLocaleDateString('en-US');
  // eslint-disable-next-line no-unused-vars
  const localBackendHost = 'http://localhost:3000/api';
  const backendHost = 'https://preact-demo-backend.onrender.com';

  const formData = {
    form_id: randomId,
    date: date,
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

  async function postData(url = backendHost, data = formData) {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      body: JSON.stringify(data),
    })
      .then((result) => {
        console.log(result.json());
      })
      .catch((error) => {
        console.log('Errors:', error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    // console.log('formData', formData);
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
