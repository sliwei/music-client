import React from 'react';
import css from './head.less'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  close = () => {
    // TODO Electron
    // Electron.ipcRenderer.send('hideapp');
  };

  render() {
    const {menuShowSta} = this.props;
    return <div className={css.menu}>
      <div className={css.title}>
        <i onClick={this.props.close} className={`${css.logo} iconfont icon-logo-name`}/>
        <i onClick={this.props.close} className={menuShowSta ? 'iconfont icon-shouqi' : 'iconfont icon-shouqi1'}/>
      </div>
      <div className={css.head}>
        <div className={css.head_title}>
          <div className={css.head_title_operation}>
            <i onClick={() => {
              window.history.back()
            }} className="iconfont icon-xiangzuo"/>
          </div>
          <div className={css.head_title_txt}>
            <span>音乐推荐</span>
            <a style={{verticalAlign: 'middle', margin: '0 20px'}}
               href="https://github.com/sliwei/music-client/releases/download/0.1.0/jimuMusic-win32-x64.zip">win10客户端绿色版下载</a>
          </div>
        </div>
        {/*TODO Electron*/}
        {/*<div className={css.head_operation}>*/}
        {/*<i className="iconfont icon-zuixiaohua"/>*/}
        {/*<i className="iconfont icon-zuidahua"/>*/}
        {/*<i onClick={this.close} className="iconfont icon-guanbi"/>*/}
        {/*</div>*/}
      </div>
    </div>
  }
}
