<template>
  <div class="pos">
      <div>
        <el-row>
          <el-col id="order-list" class="pos-order" :span='7'>
            <el-tabs>
              <el-tab-pane label="点餐">
                <el-table :data='tableData' border show-summary style="width: 100%">
                  <el-table-column prop='goodsName' label='商品'></el-table-column>
                  <el-table-column prop='count' label='数量' width='90'></el-table-column>
                  <el-table-column prop='price' label='金额' width='90'></el-table-column>
                  <el-table-column label='操作' width='150' fixed='right'>
                    <template slot-scope="scope">
                      <el-button type='text' size='small' @click="delSingleGoods(scope.row)">删除</el-button>
                      <el-button type='text' size='small' @click="addOrderList(scope.row)">增加</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="order-btn">
                  <el-button type='warning'>挂单</el-button>
                  <el-button type='danger' @click="delAllGoods">删除</el-button>
                  <el-button type='success' @click="checkout">结账</el-button>
                </div>
              </el-tab-pane>
              <el-tab-pane label="挂单">
                挂单
              </el-tab-pane>
              <el-tab-pane label="外卖">
                外卖
              </el-tab-pane>
            </el-tabs>
          </el-col>
          <el-col :span='17'>
            <div class="often-goods">
              <div class="title">常用商品</div>
              <div class="often-goods-list">
                <ul>
                  <li v-for="(goods,index) in oftenGoods" :key="index" @click="addOrderList(goods)">
                    <span>{{ goods.goodsName }}</span>
                    <span class="o-price">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="goods-type">
              <el-tabs>
                <el-tab-pane label="汉堡">
                  <div>
                    <ul class="cookList">
                      <li v-for="(goods,index) in type0Goods" :key="index" @click="addOrderList(goods)">
                        <span class="foodImg">
                          <img :src="goods.goodsImg" alt="" width="100%">
                        </span>
                        <p class="foodName">{{ goods.goodsName }}</p>
                        <p class="foodPrice">￥{{ goods.price }}元</p>
                      </li>
                    </ul>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="小食">
                  <div>
                    <ul class="cookList">
                      <li v-for="(goods,index) in type1Goods" :key="index" @click="addOrderList(goods)">
                        <span class="foodImg">
                          <img :src="goods.goodsImg" alt="" width="100%">
                        </span>
                        <p class="foodName">{{ goods.goodsName }}</p>
                        <p class="foodPrice">￥{{ goods.price }}元</p>
                      </li>
                    </ul>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="饮料">
                  <div>
                    <ul class="cookList">
                      <li v-for="(goods,index) in type2Goods" :key="index" @click="addOrderList(goods)">
                        <span class="foodImg">
                          <img :src="goods.goodsImg" alt="" width="100%">
                        </span>
                        <p class="foodName">{{ goods.goodsName }}</p>
                        <p class="foodPrice">￥{{ goods.price }}元</p>
                      </li>
                    </ul>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="套餐">
                  <div>
                    <ul class="cookList">
                      <li v-for="(goods,index) in type3Goods" :key="index" @click="addOrderList(goods)">
                        <span class="foodImg">
                          <img :src="goods.goodsImg" alt="" width="100%">
                        </span>
                        <p class="foodName">{{ goods.goodsName }}</p>
                        <p class="foodPrice">￥{{ goods.price }}元</p>
                      </li>
                    </ul>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Pos",
  data() {
    return {
      tableData: [],
      totalCount: 0,
      totalMoney: 0,
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: []
    };
  },
  methods: {
    //添加订单列表的方法
    addOrderList(goods) {
      let isHave = false;
      for (let i = 0; i < this.tableData.length; i++) {
        // console.log(this.tableData[i].goodsId);
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true;
        }
      }
      if (isHave) {
        //存在商品，添加数量即可
        let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
        arr[0].count++;
        console.log(arr);
      } else {
        //不存在商品，将商品推入数组
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        };
        this.tableData.push(newGoods);
      }
      this.getAllMoney();
    },
    delSingleGoods(goods) {
      this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
      this.getAllMoney();
    },
    delAllGoods() {
      this.tableData = [];
      this.totalCount = 0;
      this.totalMoney = 0;
    },
    getAllMoney() {
      this.totalCount = 0;
      this.totalMoney = 0;
      if (this.tableData) {
        this.tableData.forEach(ele => {
          this.totalCount += ele.count;
          this.totalMoney += ele.count * ele.price;
        });
      }
    },
    checkout() {
      //设置axios的Pos方法,接受返回值进行处理
      if (this.totalCount != 0) {
        this.delAllGoods();
        this.$message({
          message: "结账成功，感谢你又为店里出了一份力!",
          type: "success"
        });
      } else {
        this.$message.error("不能空结。老板了解你急切的心情！");
      }
    }
  },
  created() {
    //读取常用商品列表
    axios
      .get("http://jspang.com/DemoApi/oftenGoods.php")
      .then(response => {
        // console.log(response);
        this.oftenGoods = response.data;
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问！");
      });
    //读取分类商品列表
    axios
      .get("http://jspang.com/DemoApi/typeGoods.php")
      .then(response => {
        // console.log(response);
        this.type0Goods = response.data[0];
        this.type1Goods = response.data[1];
        this.type2Goods = response.data[2];
        this.type3Goods = response.data[3];
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问！");
      });
  },
  mounted: function() {
    var orderHeight = document.body.clientHeight;
    document.getElementById("order-list").style.height = orderHeight + "px";
  }
};
</script>

<style scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
  height: 100%;
}
.order-btn {
  margin-top: 10px;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
  text-align: left;
}
.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
}
.o-price {
  color: #58b7ff;
}
.goods-type {
  clear: both;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auto;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 18px;
  /* padding-left: 10px; */
  color: brown;
}
.foodPrice {
  font-size: 16px;
  /* padding-left: 10px; */
  padding-top: 10px;
}
</style>
