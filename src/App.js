import React from 'react';
import { Message } from './components/Message/Message';

function App() {

  const firstMassage = 'Текст сообщения';

  return (
    <div>
      <Message text={firstMassage} />
    </div>

  )
}

export default App;
