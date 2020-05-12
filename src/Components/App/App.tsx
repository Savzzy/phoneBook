import React, { useEffect, useState } from "react";
import Axios from "axios";
import ContactCard from "../ContactCard";
import ControlPanel from "../ControlPanel";

import "./App.scss";

const App: React.FC = (): JSX.Element => {
  const [apiResponse, setApiResponse] = useState<
    null | { address: string; name: string; phone_number: string }[]
  >(null);

  useEffect(() => {
    var fetchData = async () => {
      var response = await Axios.get(
        "http://www.mocky.io/v2/581335f71000004204abaf83"
      );
      setApiResponse(response.data.contacts);
      console.log("reponse from api", response.data.contacts);
    };

    fetchData();
  }, []);

  const helperMethod = (): JSX.Element | undefined => {
    if (apiResponse) {
      console.log(apiResponse);
      let jsxArray: any = [];
      apiResponse.forEach(
        (
          element: { address: string; name: string; phone_number: string },
          id
        ) => {
          jsxArray.push(<ContactCard personalDetails={element} key={id} />);
        }
      );
      return jsxArray;
    } else {
      return <div></div>;
    }
  };

  return (
    <div>
      <h1>Contact List Here</h1>
      <ControlPanel />
      <div className="contact-card-container">{helperMethod()}</div>
    </div>
  );
};

export default App;
