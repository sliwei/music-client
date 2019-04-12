import React from 'react';
import css from './search.less'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  search = () => {
    location.replace(`#/search`);
  };

  render() {
    return <div className={css.search}>
      <i onClick={this.search} className="iconfont icon-sousuo"/>
      <span className={css.search_txt} onClick={this.search}>搜索你的喜好</span>
      <div/>
      <i className={`iconfont icon-yuan ${css.yuan}`}/>
    </div>
  }
}
