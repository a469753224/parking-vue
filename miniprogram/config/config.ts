/**Mode 当前API请求环境**/
export const Mode: string = 'deve'

/**Sock 当前Scoket通讯环境**/
export const Sock: string = 'host'

/**APP_BASE_API API请求根目录**/
export const APP_BASE_API: any = {
  prod: 'https://api.liuchewei.com/',               //正式服
  test: 'https://36a0463r69.wicp.vip/',             //测试服
  deve: 'http://localhost:10087/',                //本地服
  ipad: '8.134.14.147:8081',                        //正式服IP
  host: 'ws://localhost:8095/websocket',          //本地sockit通讯域名
  sock: 'wss://socket.liuchewei.com/websocket/',    //线上sockit通讯域名
}

/**WX_APPID 微信小程序APPID**/
export const WX_APPID: any = {
  auth: 'wx5fa980be1efcf27a',   //@Author  appid
  prod: 'wxa5747b4a3c5a3f82'    //@company appid
}

/**TX_MAP_KEY 腾讯位置服务开发者密钥**/
export const TX_MAP_KEY: string = '4KYBZ-4SWKD-RZ64L-HMENE-FWOHZ-ZLBAJ'

/**GD_MAP_KEY 高德位置服务开发者密钥**/
export const GD_MAP_KEY: string = 'd7a8dde5b54710fad2be51d227e01e56'

/**VERSION 当前小程序版本**/
export const VERSION: string = '1.1.19'