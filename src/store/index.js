import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    partnerList: { "gender": "female", "name": { "title": "Ms", "first": "Oya", "last": "Kutlay" }, "location": { "street": { "number": 7519, "name": "Doktorlar Cd" }, "city": "Yozgat", "state": "Batman", "country": "Turkey", "postcode": 60615, "coordinates": { "latitude": "76.1467", "longitude": "104.1483" }, "timezone": { "offset": "+5:00", "description": "Ekaterinburg, Islamabad, Karachi, Tashkent" } }, "email": "oya.kutlay@example.com", "login": { "uuid": "9dbc2de8-bf3c-49c6-988f-4fcc29eaf0c9", "username": "orangezebra381", "password": "loose", "salt": "T0pXMVy1", "md5": "5eb46f9c9b743a85ab028d65b12210f1", "sha1": "79711a69b89ba6dc82fbc86113f5b723555213f5", "sha256": "d97acef70817fe26bd7590055a688400528cd3b8e2e497d33d8ec11f9a51d21c" }, "dob": { "date": "1995-10-17T01:08:07.933Z", "age": 26 }, "registered": { "date": "2015-10-02T00:53:16.240Z", "age": 6 }, "phone": "(168)-690-8652", "cell": "(809)-126-7381", "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/women/73.jpg", "medium": "https://randomuser.me/api/portraits/med/women/73.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/73.jpg" }, "nat": "TR" },
    cartList: new Set()
  },
  mutations: {
    addCounter (state) {
      state.counter ++
    },
    updatePartner (state, newPartner) {
      state.partnerList = newPartner
      // console.log(newPartner)
    },
    addToCart (state, newPartner) {
      state.cartList.add(state.partnerList.name.first)
      // console.log('New Addition', state.partnerList.name.first)
      // console.log('Current List', state.cartList)
    }
  },
  actions: {
    async newPartner({commit}) {
      const res = await fetch('https://randomuser.me/api/')
      const { results } = await res.json()
      commit('updatePartner', results[0])
    }
  },
  modules: {
  }
})
