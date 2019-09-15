

var app = getApp()
Page({
  data: {
    xs: [1, 0.75, 15 / 24],
    x:1,
    ys: [1 / 2, 1, 38 / 14, 38 / 23, 1 / 2],
    y:0.5,
    zs:[1,2],
    z:1,
    a: "",
    b: "",
  guoqiaos:['15过桥','20过桥','24过桥'],
  changjia:['高阳粗轴','天津80-38T','天津80-14T','天津80-23T','山东80-19',],
  ltjqs: ['19T链条卷曲','38T链条卷曲'],
  weimi:0,
  index1:0,
  index2:0,
  index3:0,
  },
  changeIndex1:function(e){
    var that = this
  that.setData({
    x: that.data.xs[e.detail.value],
    index1:e.detail.value
  })
 },

  changeIndex2: function(e) {
    var that = this
    that.setData({
      y: that.data.ys[e.detail.value],
      index2: e.detail.value
    })
  },
 
  changeIndex3: function(e) {
    var that = this
    
    that.setData({
      z: that.data.zs[e.detail.value],
      index3: e.detail.value
    })
  },
 
  submitProduct:function(e){
    var that = this;
    var a = e.detail.value.swmyz
    var b = e.detail.value.xwmyz
    var x = that.data.x
    var y = that.data.y
    var z=that.data.z
    var res = 1.19 * x * y * z * b / a 
    that.setData({
      weimi:res
    })
  }
  
})
