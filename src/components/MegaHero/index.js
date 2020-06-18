import React from 'react';
import { Text, RichText, Link } from '@sitecore-jss/sitecore-jss-react';
import { Jumbotron, Button } from 'reactstrap';

const MegaHero = ({fields}) => {
  return (
    <div>
      <Jumbotron>
        <Text field={fields.heading} className="display-3" tag="h1"/>
        <Text field={fields.lead} className="lead" tag="p" />
        <hr className="my-2" />
        <RichText field={fields.text} />
        <p className="lead">
          <Link field={fields.link} className="btn btn-primary"/>
        </p>
      </Jumbotron>
    </div>
  );
};

export default MegaHero;
