import { useEffect } from "react";
import { useState } from "react";

function Message({ size, featherCount }) {
  // console.log('Message', size);

  const [message, setMessage] = useState('');

  useEffect(() =>{
    if (featherCount <= 0)
      setMessage('Oh my! Your bird is naked!');
    else if (featherCount >= 10) {
      setMessage('Full turkey!');
    } else {
      setMessage('Coming along...');
    }
  }, [featherCount])

  useEffect(()=>{
    console.log('Message', size);
  },[size])

  return (
    <div className="message medium">
     {message}
    </div>
  );
}

export default Message;
