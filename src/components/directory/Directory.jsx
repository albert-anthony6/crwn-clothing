import React from "react";
import MenuItem from '../menu-item/MenuItem';
import './Directory.scss';

import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directorySelectors';

import {connect} from 'react-redux';

const Directory = ({sections}) => (
  <div className='directory-menu'>
      {sections.map(({title, imageUrl, id, size, linkUrl}) => (
          <MenuItem title={title} key={id} id={id} imageUrl={imageUrl} linkUrl={linkUrl} size={size}/>
      ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);