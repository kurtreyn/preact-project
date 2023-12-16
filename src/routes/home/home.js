// import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import Form from '../../components/Form/Form';
import style from './style.css';

const Home = () => {
  // const localBackendHost = 'http://localhost:3000/wakeup';
  const backendHost = 'https://preact-demo-backend.onrender.com/wakeup';

  async function wakeUpServer(url = backendHost, data = 'wakeUpPost') {
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

  useEffect(() => {
    wakeUpServer();
  }, []);

  return (
    <div class={style.home_container}>
      <div className="text_wrapper">
        <h1 className="header_text">Welcome!</h1>
        <span class="text">
          Please fill out the form and we'll send an email to you with a PDF
          attachment, thanking you for your visit.
        </span>
      </div>
      <Form />
    </div>
  );
};

export default Home;
