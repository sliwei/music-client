import React from 'react';
import {Link} from 'react-router-dom'
import css from './menu.less'
import config from '../../config'
import Search from '../search/min'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlIndex: 0,
    }
  }

  go = (i) => {
    this.setState({urlIndex: i})
  };

  render() {
    const {menuShowSta} = this.props;
    const {urlIndex} = this.state;
    return <div style={{marginLeft: menuShowSta ? '0' : '-200px'}} className={css.details_menu}>
      <Search/>
      <div className={css.division}/>
      <div className={css.menu_list}>
        <ul>
          {config.menu.map((item, i) => {
            let active = (i === urlIndex) ? css.menu_active : null;
            return <li onClick={() => this.go(i)} className={active} key={i}><Link
              to={item.url}><i className={item.icon}/>{item.val}</Link></li>
          })}
        </ul>
      </div>
      <div className={css.user}>
        <img className={css.user_head} src="https://ss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/a04ecb20.jpg"
             alt=""/>
        <div className={css.user_info}>
          <p>nic</p>
          <span>274635143@qq.com</span>
        </div>
        <i className="iconfont icon-shezhi"/>
      </div>
    </div>
  }
}
