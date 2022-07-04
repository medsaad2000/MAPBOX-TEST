import axios from "axios";
import React from "react";
import { Helmet } from 'react-helmet';

const baseURL = "http://localhost:1337/api/companies?populate=openingTimes,pictures";

export default function Companies() {
  const [company, setCompany] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCompany(response.data.data);
      console.log(response.data.data);
    });
  }, []);

  if (!company) return null;

  return (
    
    < div >
      <Helmet>
        <title>Livecity | API</title>
      </Helmet>
      <table id="companies">
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Website</th>
          <th>Shipping</th>
          <th>Monday</th>
        </tr>

        {
          company.map(({ id, attributes }) => (
            <tr>
              <td>{attributes.name}</td>
              <td>{attributes.email}</td>
              <td>{attributes.website}</td>   
              {attributes.shipping ? (<td>Yes</td>):(<td>No</td>)}           
              <td>{attributes.openingTimes[0].openingHour}</td>
            </tr>
          ))
        }

      </table>
    </div>
   
    //}
  );
}