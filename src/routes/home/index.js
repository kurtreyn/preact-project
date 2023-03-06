// import { h } from 'preact';
import Form from '../../components/Form/Form';
import style from './style.css';

const Home = () => {
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
      {/* <a href="https://preactjs.com">
        <img
          src="../../assets/preact-logo.svg"
          alt="Preact Logo"
          height="160"
          width="160"
        />
      </a>
      <h1>Get Started Building PWAs with Preact-CLI</h1>
      <section>
        <Resource
          title="Learn Preact"
          description="If you're new to Preact, try the interactive tutorial to learn important concepts"
          link="https://preactjs.com/tutorial/"
        />
        <Resource
          title="Differences to React"
          description="If you're coming from React, check out our docs for where Preact differs"
          link="https://preactjs.com/guide/v10/differences-to-react"
        />
        <Resource
          title="Learn Preact-CLI"
          description="To learn more about Preact-CLI, read through the ReadMe & Wiki"
          link="https://github.com/preactjs/preact-cli#preact-cli--"
        />
      </section> */}
    </div>
  );
};

// const Resource = (props) => {
//   return (
//     <a href={props.link} class={style.resource}>
//       <h2>{props.title}</h2>
//       <p>{props.description}</p>
//     </a>
//   );
// };

export default Home;

/*
import './style';
import Form from './components/Form/Form';

export default function App() {
  return (
    <div class="app_container">
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
}
*/
