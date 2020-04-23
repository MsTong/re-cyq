require('./index.less')
require('./common')
import dva from 'dva';
const app = dva({});
app.router(require('./router').default);
app.start('#root');