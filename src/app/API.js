const Api = {
  getweathers: async () => {
    var MockAPI = {
      data: [
        { Lat: 55.672666, lon: 12.493872 },
        { Lat: 55.632487, lon: 12.490454 },
        { Lat: 55.670617, lon: 12.546021 },
        { Lat: 55.703718, lon: 12.53792 }
      ]
    };
    return MockAPI.data;
  }
};

export default Api;
