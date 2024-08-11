import { useContext } from 'react';
import { Context } from './Context';
function AppComponent() {
  const { text, setText } = useContext(Context);
  return (
    <div>
      <h1 >{text}</h1>
      <button  onClick={() => setText('hello')}>
        Click me
      </button>
    </div>
  );
}
export default AppComponent;