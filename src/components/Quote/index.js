import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { withNamespaces} from 'react-i18next';
import { trackingApi} from '@sitecore-jss/sitecore-jss-tracking';
import config from '../../temp/config';
import { dataFetcher } from '../../dataFetcher';

class Quote extends React.Component {
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

  render() {
    const { backgroundColor, fontColor, fontSize } = this.props.params;
    const {quote, author} = this.props.fields;
    return (
      <div style={{backgroundColor: backgroundColor, color: fontColor}}>
        <div>{this.props.t('TodaysQuoteLabel')}:</div>
        <div style={{fontSize: parseInt(fontSize)}} >
          "<Text field={quote}/>"
        </div>
        <div style={{textAlign: 'right'}}>
          <Text field={author} />
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={this.registerGoal.bind(this)}
        >
          Trigger Goal
        </button>
      </div>
    );
  };
};
  
export default withNamespaces()(Quote);
