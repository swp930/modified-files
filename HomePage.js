import React from 'react';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import AutoComplete from 'material-ui/AutoComplete';
import {FormattedMessage, FormattedRelative} from 'react-intl';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import styles from './serversPage.scss';

export class ServersPage extends React.Component {
  static propTypes = {

  };

  static defaultProps = {
    serversLastUpdate: null
  };

  componentDidMount() {

  }

  render() {
    const {} = this.props;
    const styles = {
      auto: {
        marginLeft: '25'
      },
      card2: {
        marginTop:"20",
        marginLeft: "25",
        marginRight: "900"
      },
      card: {
        marginTop: "25",
        marginLeft: "25",
        marginRight: "25",
        height: "450px"
      },
      footer: {
        bottom: "0",
        textAlign: "center",
        backgroundColor: "#f6f6f6",
        position: "absolute",
        width: "100%"
      },
      titleStyle: {
        textAlign: "center",
        paddingTop: "50",
        fontSize: "30px"
      }
    }
    const colors = [
      'Red',
      'Orange',
      'Yellow',
      'Green',
      'Blue',
      'Purple',
      'Black',
      'White',
    ];
    return (
        <div>
        <AutoComplete
          style = {styles.auto}
          floatingLabelText="Search"
          filter={AutoComplete.fuzzyFilter}
          dataSource={colors}
          maxSearchResults={5}/>
        <FontIcon className="material-icons">search</FontIcon>
        <br />
        <Card style = {styles.card}>
          <CardTitle title="This is the workspace"
                     style={styles.titleStyle}/>
        </Card>
        <br />
        <div style={styles.footer}>
          Copyright @ Blinkpad - 2017-2020
        </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(ServersPage);
