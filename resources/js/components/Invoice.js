import React from 'react';
import ReactDOM from 'react-dom';
 function Invoice() {
  return (
    <div>
      invoice now
    </div>
  )
}
export default Invoice;
if(document.getElementById("invoice")){
ReactDOM.render(<Invoice/>, document.getElementById("invoice"))
}
