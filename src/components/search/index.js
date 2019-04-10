import React from 'react';
import {op} from 'Api/op';
import {connect} from 'react-redux';
import css from './search.scss'
import playAction from '../../actions/playAction'

@connect(state => {
  return {...state}
}, playAction)
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.hotDivSta = false;
    this.state = {
      search: '',
      info: {},
      songs: [],
      hot: [],
      page: 1,
      hotSta: false,
      pagesize: 30
    }
  }

  componentDidMount() {
    this.hotDate();
  }

  getData = () => {
    const {page, pagesize, search} = this.state;
    op({url: `http://mobilecdn.kugou.com/api/v3/search/song?format=jsonp&keyword=${encodeURIComponent(search)}&page=${page}&pagesize=${pagesize}&showtype=1`}).then(ret => {
      let data = ret.data;
      data = data.slice(1, data.length - 1);
      this.setState({songs: JSON.parse(data).data.info})
    })
  };

  go = (dat) => {
    this.props.router.replace({
      pathname: '/list_info',
      query: {code: dat.rankid}
    })
  };

  add = (dat) => {
    op({url: `http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash=${dat.hash}&from=mkugou`}).then(ret => {
      this.props.addSinger(ret.data);
      this.props.play()
    })
  };

  change = (e) => {
    this.setState({search: e.target.value})
  };

  hot = () => {
    this.setState({hotSta: true})
  };

  hotDate = () => {
    op({url: `http://mobilecdn.kugou.com/api/v3/search/hot?format=jsonp&plat=0&count=30`}).then(ret => {
      let data = ret.data;
      data = data.slice(1, data.length - 1);
      let list = JSON.parse(data).data.info;

      this.state.hot = list;
      this.state.search = list[0].keyword;
      this.getData();
    })
  };

  closeHot = () => {
    if (this.hotDivSta) {
      this.setState({hotSta: false})
    }
  };

  choice = (val) => {
    this.setState({search: val, hotSta: false}, () => {
      this.getData()
    })
  };

  leaveHot = () => {
    if (this.hotDivSta) {
      this.refs.search.focus()
    }
    this.hotDivSta = true
  };

  render() {
    const {songs, hot, hotSta, search} = this.state;
    return <div className={css.list}>
      <div className={css.search_page}>
        <input value={search} onBlur={this.closeHot} onFocus={this.hot} onChange={this.change} type="text"
               placeholder="搜索你的喜好"/>
        <button onClick={this.getData}>搜索</button>
        {hot.length && hotSta ?
          <div onMouseEnter={() => this.hotDivSta = false} onMouseLeave={this.leaveHot} className={css.hot}>
            <ul>
              {hot.map((item, i) => {
                return <li key={i} onClick={() => this.choice(item.keyword)}>{item.keyword}</li>
              })}
            </ul>
          </div> : null}
      </div>
      <ul>
        {songs.map((item, i) => {
          let style = i % 2 ? null : css.li_show;
          return <li onClick={() => this.add(item, i)} key={i} className={style}>
            <div className={css.list_name}>{item.filename}</div>
          </li>
        })}
      </ul>
    </div>;
  }
}

