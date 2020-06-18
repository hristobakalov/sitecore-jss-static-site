import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { trackingApi} from '@sitecore-jss/sitecore-jss-tracking';
import config from '../../temp/config';
import { dataFetcher } from '../../dataFetcher';

class TrackerButton extends React.Component {
  constructor(props) {
    super(props);
  
    this.trackingApiOptions = {
      host: config.sitecoreApiHost,
      querystringParams: {
        sc_apikey: config.sitecoreApiKey,
      },
      fetcher: dataFetcher,
    };
  }

  registerGoal() {
    trackingApi
      .trackEvent([{ goalId: "Register" }], this.trackingApiOptions)
      .then(() => alert('Goal pushed'))
      .catch((error) => alert(error));
  }

  login(){
    var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://jss93sc.dev.local/sitecore/api/ssc/auth/login");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
          alert('Status: '+this.status+'\n'+'\nLogin was successful');
        }
      };
      xhr.send("{ \n    \"domain\": \"sitecore\", \n    \"username\": \"admin\", \n    \"password\": \"b\" \n}");
  }

  render() {
    return (
      <div>
         <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={this.registerGoal.bind(this)}
        >
          <Text field={this.props.fields.title}/>
        </button>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={this.login}
        >
          Login User
        </button>
      </div>
    );
  };
}

export default TrackerButton;
