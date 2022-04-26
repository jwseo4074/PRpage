// import React from "react";
// import App from "./App";
// import * as ReactDOMClient from 'react-dom/client';
// import reportWebVitals from "./reportWebVitals";


// const rootnode = ReactDOMClient.createRoot(document.getElementById('root'));
// rootnode.render(
// //   <React.StrictMode>
//     <App />
// //   {/* </React.StrictMode> */}
// );

// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	// <React.StrictMode>
		<App />,
	// </React.StrictMode>,
	document.getElementById("root")
);
reportWebVitals();