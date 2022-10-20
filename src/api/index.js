import http from '../utils/http'

// export const getMenu =(param) => {
//     if(param === 'user'){
//         return []
//     }
// }
export const gettableData = (param) => {
    return http.get('/tabledata',param)
}
// export const getChinaMapData = (param) =>{
//     return http.get('/getEpidemicChinaMap/'+param)
// }

// export const getStatisticData = () =>{
//     return http.get('/getStatistic')
// }

// export const getProvinceTableData = () =>{
//     return http.get('/province')
// }

// export const getProvinceMapData = (provinceId,type)=>{
//     return http.get('/province'+provinceId+'/'+type)
// }

// export const getProvinceLineData = (provinceId,type) =>{
//     return http.get('/province/table/' + provinceId + '/' + type)
// }

// export const getTimeLines = (params) =>{
//     return http.get('/getTimeline',params)
// }
// export const  getCountryMapData =(param) =>{
//     return http.get('/getCountryMap/'+param)
// }
// export const getCountData = () => {
//     return http.get('/getGlobal')
// }
// export const getWorldTableData = () =>{
//     return http.get('/getCountryList')
// }
// export const getWorldDataByContinent = (param) =>{
//     return http.get('/country/'+param)
// }

// export const getDangerAreasTableData = () =>{
//     return http.get('/getDangerAreas')
// }

// export const getDangerAreasTop10ByLevel = (param) =>{
//     return http.get('/getTop10DangerAreas/'+param)
// }
// export const getDangerAreasTop10 = () =>{
//     return http.get('/getTop10DangerAreas')
// }
// export const postLoginRequest = (params) =>{
//     return http.post('/login',params)
// }

// export const postRegisterRequest = (params) => {
//     return http.post('/register',params)
// }

// export const  updateUserRequest = (params) =>{
//     return http.put('/updateUser',params)
// }

// export const getPredictResult = () =>{
//     return http.get('/predict/LSTM/confirmedIncr')
// }

