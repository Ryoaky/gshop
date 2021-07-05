 import ajax from './ajax'


 // 根据经纬度获取位置
 export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

 // 获取食品分类列表
 export const reqFoodTypes = () => ajax('/index_category')

 // 获取店铺列表
 export const reqshops = (longitude, latitude) => ajax('/shops', {longitude, latitude})
