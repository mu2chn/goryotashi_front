import axiosBase from "./base";
import Community from "../model/Community";
const axios = axiosBase.axiosCreate("");

const client = {

  // 自身の情報
  // !Auth!
  getMe() {
    const url = '/users/me';
    return axiosBase.defaultGet(url, true);
  },

  // 自身のコミュニティ
  // !Auth!
  async getMyCommunity() {
    const url = '/users/me/communities';
    const data = await axiosBase.defaultGet(url, true);
    if(data){
      const community = new Community(data);
    }
    else {
      return null;
    }
  },

  // コミュニティ検索
  async searchCommunity(q) {
    // const url = '/communities/search';
    const url = '/communities';
    const query = {q: q};
    const array = await axiosBase.defaultGet(url, false, query);
    if (array) {
      const communityList = [];
      for (let data of array) {
        communityList.push(new Community(data))
      }
      return communityList;
    } else {
      return null;
    }
  },

  // コミュニティ一覧
  getCommunityById(communityId) {
    const url = `/communities/${communityId}`;
    const query = {id: communityId};
    return axiosBase.defaultGet(url, false, query)
  },

  // コミュニティのレストラン一覧
  getCommunityRestaurant(communityId, order="random") {
    const url = `/communities/${communityId}/restaurants`;
    const query = {order: order};
    return axiosBase.defaultGet(url, false, query)
  },

  // レストラン検索
  searchRestaurant(q) {
    const url = '/restaurants/search';
    const query = {q: q};
    return axiosBase.defaultGet(url, false, query)
  },

  // コミュニティにレストラン追加
  // !Auth!
  addCommunityRestaurant(communityId, shopId, comment) {
    const url = `/communities/${communityId}/restaurants`;
    const body = {
      id: shopId,
      comment: comment
    };
    return axiosBase.defaultPost(url, true, body);
  },

  // レストラン取得
  getRestaurant(shopId) {
    const url = `/restaurant/${shopId}`;
    return axiosBase.defaultGet(url, false)
  },

  // レストランのコメント一覧取得
  getRestaurantComment(communityId, shopId){
    const url = `/restaurants/${shopId}/comments`;
    const query = {community: communityId};
    return axiosBase.defaultGet(url, false)
  },

  // レストランのコメント追加
  // !Auth!
  addRestaurantComment(communityId, shopId, comment){
    const url = `/restaurants/${shopId}/comments`;
    const body = {
      body: comment,
      community_id: communityId
    };
    return axiosBase.defaultPost(url, true, body)
  }
};

export default client;
